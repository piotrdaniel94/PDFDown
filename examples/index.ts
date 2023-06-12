import report from "../out";
import path from "path";
import puppeteer from "puppeteer";

const example = process.argv[2];

async function main() {
  (async ()=> {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      const file = path.join("E://Working/HTMLTOPDF/sampls/puppeteer-report-typescript/examples/basic/blog-single.html");
      await page.setDefaultNavigationTimeout(2000);
      await report.pdf(browser, file, {
        path: path.join("E://Working/HTMLTOPDF/sampls/puppeteer-report-typescript/examples/basic/index.pdf"),
        format: "a4",
        landscape: true,
        printBackground: true,
        margin: {
          bottom: "10mm",
          left: "10mm",
          right: "10mm",
          top: "10mm",
        },
      });
    } finally {
      await browser.close();
    }
  })();
  
}

main().catch((err) => console.error(err));
