const express = require("express");
const puppeteer = require("puppeteer-core");

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    console.log("generate route")
    const { title, sections } = req.body;

    const browser = await puppeteer.launch({ headless: "new" , executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",args: ["--no-sandbox", "--disable-setuid-sandbox"],});
    const page = await browser.newPage();

   const html = `
      <html dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial; padding: 40px; }
          h1 { text-align: center; }
          h2 { margin-top: 30px; border-bottom: 1px solid #ccc; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          td { border: 1px solid #ddd; padding: 8px; color:black; }
          td.label { font-weight: bold; background: #f5f5f5; width: 30%; color: black }
        </style>
      </head>
      <body>
        <h1>${title}</h1>

        ${sections
          .map(
            (section) => `
          <h2>${section.sectionTitle}</h2>
          <table>
            ${section.fields
              .map(
                (field) => `
              <tr>
                <td class="label">${field.label}</td>
                <td>${field.value ?? ""}</td>
              </tr>
            `
              )
              .join("")}
          </table>
        `
          )
          .join("")}
      </body>
      </html>
    ` ;

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length, 
    });
console.log("PDF length:", pdf.length);

    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to generate PDF" });
  }
});

module.exports = router;