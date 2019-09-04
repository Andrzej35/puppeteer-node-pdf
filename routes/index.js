const express = require('express')
const router = express.Router()
const savePDF = require('../controller/savePDF')

// Home
router.get('/', (req, res) => {
    res.render(require('../public/index.html'))
})

router.get('/generate-pdf', async (req, res) => {
    const result = await savePDF(req.query.url)
    res.attachment('express-pdf-example.pdf')
    res.contentType('application/pdf')
    res.send(result)
})

module.exports = router
