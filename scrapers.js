const puppeteer = require('puppeteer')


async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
//image
    const [el] = await page.$x('//*[@id="gallery_dflt"]/div/figure[1]/a/img');
    const src = await el.getProperty('src');
    const imageUrl = await src.jsonValue();

//tittle
    const [el2] = await page.$x('//*[@id="short-desc"]/div/header/h1');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();
    
//price
    const [el3] = await page.$x('//*[@id="productInfo"]/fieldset[1]/span/span[2]');
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();
    
    
    
    console.log({imageUrl, title, price});
    browser.close();
}

scrapeProduct('https://articulo.mercadolibre.com.co/MCO-537669772-camara-digital-fotografica-ninos-video-imagenes-obsequio-_JM?variation=44696097451&quantity=1#reco_item_pos=1&reco_backend=machinalis-pads&reco_backend_type=low_level&reco_client=vip-pads-right&reco_id=d442f195-163c-47c1-939d-9482f8a6f56d');
