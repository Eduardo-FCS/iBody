const {Builder, By, Key, until} = require('selenium-webdriver');
const { titleMatches } = require('selenium-webdriver/lib/until');
const link = "http://eduardo-fcs.github.io/iBody"
let random = 0

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

async function start(){
 
        //Abrindo navegador do Google Chrome
        let driver = await new Builder().forBrowser("chrome").build();
        //Inserindo o link informado na const link
        await driver.get(link);

        //Testes dos menus
        await driver.findElement(By.id("AeroPage")).click();
        await driver.findElement(By.id("AnaeroPage")).click();
        await driver.findElement(By.id("EsportePage")).click();
        await driver.findElement(By.className("HomePage")).click();
        
        //Teste do calculador de IMC
        random = getRandomInt(100, 210)
        await driver.findElement(By.id("altura")).sendKeys(random, Key.TAB);
        random = getRandomInt(35, 190)
        await driver.findElement(By.id("peso")).sendKeys(random, Key.TAB);
        await driver.findElement(By.id("calculo")).sendKeys(Key.ENTER);

        console.log("Teste finalizado com sucesso!");

        //Comando para encerrar o teste automático
        //await driver.quit();
 
}

start()