const puppeteer=require('puppeteer');
const fs = require('fs');

//Main Method
async function scrapProduct(url){
    var lastPageNumber = 5;
    var result = [];

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
    for (let index = 0; index < lastPageNumber; index++) {
        result =result.concat(await extractEvaluate(page));        
        if (index != lastPageNumber - 1) {            
            await page.click('#root > div > div.ant-row.main--pIV2h > div > div > div.ant-col-20.ant-col-push-4.side-right--Tyehf > div.box--eTFFd > div > ul > li.ant-pagination-next > a');    
        }
    }
    for (let index = 0; index < result.length; index++) {
        var obj = result[index].prodname + ','+result[index].prodprice.replaceAll(',','') +','+result[index].prodrate +','+result[index].prodavail+','+result[index].prodimg +'\n';
        await writeCSV(obj);
    } 
    await browser.close();    
 }
//Get Data FROM PAGE
async function extractEvaluate(page){
    return await page.evaluate(() => {
         let data = [];
       let elements = document.querySelector("#root > div > div.ant-row.main--pIV2h > div > div > div.ant-col-20.ant-col-push-4.side-right--Tyehf > div.box--ujueT").childNodes;
       elements.forEach(async (element)=>{
        console.log(element);
        var name = element.childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerText;
        var price = element.childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText;
        var rating = element.childNodes[0].childNodes[0].childNodes[1].childNodes[4].innerText.replaceAll("\nPakistan","");
        var available = element.childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText;
        var image = element.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('SRC')
        var obj={
            prodname : name,
            prodprice : price,
            prodrate : rating,
            prodavail : available,
            prodimg: image
        }
        data.push(obj);

    });
       return data;
    });
   
} 
// WRITE CSV FILE
async function writeCSV(obj){
    await fs.appendFile('record/Product.csv', obj, function (err) {
         if (err) throw err;
       });
 }

 // CALL MAIN METHOD
scrapProduct('https://www.daraz.pk/dawlance1621855818/?q=All-Products&langFlag=en&from=wangpu&lang=en&pageTypeId=2');