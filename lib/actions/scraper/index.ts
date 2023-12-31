import axios from "axios";
import * as cheerio from 'cheerio'

export async function scrapeAmazonProduct( url: string){
if(!url) return

//brightData stuff
// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_bfeca51b-zone-jsmscraper:ka42ul8z1sc9 -k https://lumtest.com/myip.json
const username = String(process.env.BRIGHT_DATA_USERNAME)
const password = String(process.env.BRIGHT_DATA_PASSWORD)
const port = 22225
const session_id = (1000000 * Math.random())| 0;
const options = {
    auth: {
        username: `${username}-session-${session_id}`,
        password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
}

try {
    const response = await axios.get(url, options)
    console.log(response.data);
    
} catch (error:any) {
    throw new Error(`Failed To scrape product: ${error.message}`)
}
}

