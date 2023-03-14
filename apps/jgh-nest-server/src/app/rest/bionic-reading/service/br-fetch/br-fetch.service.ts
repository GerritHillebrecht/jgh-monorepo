import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class BrFetchService {
  async fetchURLData(url: string) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=desktop'],
    });
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(url);
    const dom = await page.content();
    await browser.close();
    return dom;
  }
}
