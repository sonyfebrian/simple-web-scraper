const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

// url
const url = "https://example.com/" 

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
//get data 
        $('.media__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })

        })
        console.log(articles)
    }).catch(err => console.log(err))

axios()
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
