const express=require("express")
const {handleGenerateNewShortURL, handleAnalyticsofUrl}=require("../controllers/url")
const router=express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleAnalyticsofUrl)


module.exports=router;

