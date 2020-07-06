$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addFirstProductToCart.feature");
formatter.feature({
  "name": "Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add first products to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Wish",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.iNavigateToWish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a product name in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "HomeStepDefs.iEnterAProductNameInTheSearchBar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"NavbarSearchBar__SearchInput-\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MXGDXL1043CAACC\u0027, ip: \u002710.112.143.155\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\ksfl580\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60986}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 199be97a4cbe52c1b9b4ce252e763e03\n*** Element info: {Using\u003dcss selector, value\u003dNavbarSearchBar__SearchInput-}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.wish.pages.HomePage.searchProduct(HomePage.java:24)\r\n\tat com.wish.steps.HomeStepDefs.iEnterAProductNameInTheSearchBar(HomeStepDefs.java:20)\r\n\tat ✽.I enter a product name in the search bar(file:src/test/resources/features/addFirstProductToCart.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the first product",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProductStepDefs.iClickOnTheFirstProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add the product into the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductStepDefs.iAddTheProductIntoTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});