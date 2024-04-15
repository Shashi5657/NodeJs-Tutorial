const {nanoid} = require('nanoid')
const URL = require('../models/url')

async function handleGenerateNewShortUrl(req, res){
    const body = req.body
    if(!body) return res.status(400).json({ error: 'url is required'})
    const shortID = nanoid(8)
    await URL.create({
        shortId : shortID,
        redirectedUrl : body.url,
        visitHistory : [],
    })

    return res.json({id : shortID})
}

module.exports = {
    handleGenerateNewShortUrl
}

