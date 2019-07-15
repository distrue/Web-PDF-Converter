const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

const main = async () => {
    let from_url = readlineSync.question("Input From URL reference: ");
    console.log("URL reference: ", from_url);
    let result_pdf = readlineSync.question("Input your Output PDF location + name (default: ./result.pdf): ");
    console.log("Output PDF location: ", result_pdf);

    puppeteer.launch()
    .then(async (browser) => {
        let pdf_style = {path: result_pdf, width:"600px", scale: 0.8, margin: {top:100, left:50, right:50, bottom:100}};
        return (
            browser.newPage()
            .then((page) => {
            return page.goto(from_url)
                .then(() => page.pdf(pdf_style))
            })
            .then( () => {console.log("PDF generated"); browser.close();} )
        );
    });
}

main();
