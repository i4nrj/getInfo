const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

(async function firstTest(firstName, lastName, fathersName, date) {
    let driver;

    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://www.reestr-zalogov.ru/search/index");
  
    let title = await driver.getTitle();
    assert.equal("Поиск в реестре", title);
  
    await driver.manage().setTimeouts({ implicit: 500 });
  
    await driver.findElement(By.linkText("По информации о залогодателе")).click();
  
    await driver.findElement(By.id("privatePerson.lastName")).sendKeys(firstName);
    await driver.findElement(By.id("privatePerson.firstName")).sendKeys(lastName);
      await driver.findElement(By.id("privatePerson.fathersName")).sendKeys(lastName);
    await driver.findElement(By.id("privatePerson.birthday")).sendKeys(date + "\n");
  
    await driver.manage().setTimeouts({ implicit: 10000 });
  
    const searchData = [];
    let trElements = await driver.findElements(By.css("tr"));
    for (let row of trElements) {
      let cells = await row.findElements(By.css("td"));
      let rowData = [];
      for (let cell of cells) {
        rowData.push(await cell.getText());
      }
      searchData.push({
        regDate: rowData[1],
        noticeNum: rowData[2],
        property: rowData[3],
        pledger: rowData[4],
        pladgee: rowData[5],
      });
    }
    let json = JSON.stringify(searchData);
    await driver.quit();
    alert(json);
})();

export const getInfo = (firstName, lastName, fathersName, date) => {
    firstTest(firstName, lastName, fathersName, date);
}




