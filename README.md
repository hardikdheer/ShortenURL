# URL Shortener

## Overview

The URL Shortener is a web application that allows users to shorten long URLs into shorter, more manageable links. Users can sign up for accounts, log in, and track the number of clicks on each shortened URL.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd url-shortener

## Install Dependencies:
npm install

## Set Up Environment Variables:
Create a .env file in the root directory and add the following:
PORT=8000
MONGODB=<your_mongodb_connection_string>

## Usage
Start the Server:
npm start

## Access the Application:
Visit http://localhost:8000 in your web browser.

## Sign Up or Log In:
Create an account or log in if you already have one.

## Shorten URLs:
Use the provided form to shorten URLs.

## Routes
POST /shorten: Shorten a URL.
GET /:shortId: Redirect to the original URL associated with the short ID.

## Technologies Used
Node.js
Express.js
MongoDB
HTML/CSS

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
