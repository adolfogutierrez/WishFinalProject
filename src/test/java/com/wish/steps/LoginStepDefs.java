package com.wish.steps;

import com.wish.hooks.Hooks;
import com.wish.sites.WishSite;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AddFirstProductStepDefs {

    public WishSite wishSite;

    public AddFirstProductStepDefs(Hooks hooksClass)
    {
        this.wishSite = hooksClass.getWishSite();
    }

    @Given("I login to Wish")
    public void iLoginToWish()
    {
        wishSite.getLogin().navigate();
        wishSite.getLogin().validateLoginPage();
        wishSite.getLogin().loginWithValidCredentials();
    }
}
