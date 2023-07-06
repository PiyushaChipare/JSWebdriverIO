class AdminHomePage
{
    //Returns Tour Package Link 
    get tourPackageLnk()
    {
        return $('//li[@id="menu-academico"]//span[contains(.,"Packages")]');
    }

    get manageBookingLnk()
    {
        return $('span=Manage Booking');
    }

    //Returns Create Tour Package Link
    get createTourPackageLnk()
    {
        return $('a=Create');
    }

    //Returns profile Dropdown for logging out 
    get profileDD()
    {
        return $('//div[@class="profile_details w3l"]');
    }

    //Returns Logout Link
    get logoutLnk()
    {
        return $("//a[text()=' Logout']");
    }

    //Navigates to create tour package page
    async goToCreateTourPackagePage()
    {
        await this.tourPackageLnk.waitForClickable({timeout:2000})
        await this.tourPackageLnk.moveTo();
        await this.createTourPackageLnk.waitForClickable({timeout:2000});
        await this.createTourPackageLnk.click();        
    }

    async logoutAdmin()
    {
        await browser.scroll(0,0);
        await this.profileDD.waitForClickable({timeout:2000});
        await this.profileDD.click();
        await this.logoutLnk.waitForClickable({timeout:2000});
        await this.logoutLnk.click();
    }

    async goToManageBookingPage()
    {
        await this.manageBookingLnk.waitForClickable({timeout:2000});
        await this.manageBookingLnk.click();
    }
}

export default new AdminHomePage();