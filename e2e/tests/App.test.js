const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();
const app = require('../../backend/src/app');

let backend;
let frontend;
let browser;
let page;

beforeAll(() => {
  backend = http.createServer(app);
  backend.listen(3010, () => {
    console.log('Backend Running at http://localhost:3010');
  });
  frontend = http.createServer(
    express()
      .use('/v0', createProxyMiddleware({
        target: 'http://localhost:3010/',
        changeOrigin: true
      }))
      .use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')))
  );
  frontend.listen(3000, () => {
    console.log('Frontend Running at http://localhost:3000');
  });
});

afterAll((done) => {
  backend.close(() => {
    frontend.close(done);
  });
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--headless',
    ],
  });
  page = await browser.newPage();
});

afterEach(async () => {
  await browser.close();
});

// Clicks the 'Get Dummy' button and checks the server response is displayed.
test('Get Dummy', async () => {
  await page.goto('http://localhost:3000/');
  const label = await page.$('aria/dummy message');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Click the button!');
  await page.click('aria/get dummy[role="button"]');
  await page.waitForFunction(
    'document.querySelector("label").innerText.includes("Hello CSE183")',
  );
  cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont.search(/Hello CSE183/)).toEqual(0);
  expect(cont.search(/Database created/)).toBeGreaterThan(60);
});

// Clicks the 'Get Dummy' button and checks the server response is displayed.
test('Go to Login', async () => {
  await page.goto('http://localhost:3000/');
  let label = await page.$('aria/login button');
  let cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign In');
  await page.click('aria/login button');
  /* await page.waitForFunction(
    'document.querySelector("div").innerText.includes("Sign in here")',
  ); */
  label = await page.$('aria/login page');
  cont = await (await label.getProperty('textContent')).jsonValue();
  expect(cont).toBe('Sign in here');
  // cont = await (await label.getProperty('textContent')).jsonValue();
  // expect(cont.search(/Hello CSE183/)).toEqual(0);
  // expect(cont.search(/Database created/)).toBeGreaterThan(60);
});
