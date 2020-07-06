package com.wish.pages;

import com.wish.utils.Passwords;
import com.wish.utils.Properties;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import static org.junit.Assert.assertTrue;

public class LoginPage extends BasePage{

    public LoginPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

   /*
   @FindBy(css="div.AuthenticationPage__PaneWrapper-wo9hra-4.hVXHRo > div.AuthenticationPage__FormTabs-wo9hra-18.kHuBpd > div.AuthenticationPage__FormTab-wo9hra-19.isVqXQ")
    WebElement opcionRegistro;
    @FindBy(css="[name=firstname]")
    WebElement campoNombre;
    @FindBy(css="[name=lastname]")
    WebElement campoApellido;
    @FindBy(css="[name='emailAddress']")
    WebElement campoEmail;
    @FindBy(css="[name=password]")
    WebElement campoPassword;
    @FindBy(css="div.AuthenticationPage__PaneWrapper-wo9hra-4.hVXHRo > form.AuthenticationPage__FormWrapper-wo9hra-7.jCMLww > div.Button-sc-1rnmncq-0.dmiPZs.Button___StyledStyledWishButtonWithKeyboard-s129vo-0.hIOtUa")
    WebElement botonRegistrate;
    @FindBy(css="AuthenticationPage__TrustFeatureWrapper-wo9hra-21 MrWHO")
    WebElement banner;
    @FindBy(css="AuthenticationPage__LeftContentWrapper-wo9hra-1 ctcnFp")
    WebElement productos;
    */

    @FindBy(css="g[fill='#2fb7ec']")
    WebElement logoWish;

    @FindBy(xpath = "//form/div[1]/div/input")
    WebElement loginEmail;

    @FindBy(xpath = "//*//div[3]/form/div[2]//input")
    WebElement loginPassword;

    @FindBy(xpath = "//div[3]/form/div[4]")
    WebElement loginButton;

    public void navigate()
    {
        driver.get(Properties.URL);
    }

    public void validateLoginPage() {
        wait.until(ExpectedConditions.visibilityOf(logoWish));
        assertTrue(logoWish.isDisplayed());
    }

    public void loginWithValidCredentials() {
        loginEmail.sendKeys(Passwords.EMAIL);
        loginPassword.sendKeys(Passwords.PASSWORD);
        loginButton.click();
        System.out.println("Login successful");
    }

}
