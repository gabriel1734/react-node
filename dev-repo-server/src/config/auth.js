require("dotenv/config");

export default {
    secret: process.env.APP_SECRET,
    expiresin: "7d"
}