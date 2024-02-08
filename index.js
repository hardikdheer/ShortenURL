const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const { connectMongoDb } = require("./connect")


const URL = require("./models/url")

const { checkForAuthentication, restrictTo } = require("./middlewares/auth")
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticrouter")
const userRoute = require("./routes/user")
const app = express()
const PORT = process.env.PORT||8000

connectMongoDb(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected"))
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls
    })
});

app.use("/url",restrictTo(["NORMAL"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);
app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: { timestamp: Date.now(), }
            }
        }
    );
    return res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))