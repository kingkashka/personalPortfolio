const express = require("express");
const pdfRouter = express.Router();

pdfRouter.get("/file", (req, res) => {
    try {
        res.sendFile("/resume.pdf")
    }
    catch{
        res.status(500)
        res.json({message: "failed to find"})
    }
})

module.exports = pdfRouter