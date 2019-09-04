const puppeteer = require('puppeteer')

const savePDF = async url => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage()
    await page.goto(url)
    const pdf = await page.pdf()
    await browser.close()

    return pdf
}

module.exports = savePDF
