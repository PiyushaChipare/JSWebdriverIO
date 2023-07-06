class UserHomePage{
    get logoutLnk()
    {
        return $('a=/ Logout');
    }

    get tourPackagesLnk()
    {
        return $('a=Tour Packages');
    }

    get myTourHistoryLnk()
    {
        return $('a=My Tour History');
    }

    async goToTourPackagesPage()
    {
        await this.tourPackagesLnk.waitForClickable({timeout:2000});
        await this.tourPackagesLnk.click();
    }
    async logoutUser()
    {
        await browser.scroll(0,0);
        await this.logoutLnk.waitForClickable({timeout:2000})
        await this.logoutLnk.click();
    }

    async goToMyTourHistoryPage()
    {
        await this.myTourHistoryLnk.waitForClickable({timeout:2000});
        await this.myTourHistoryLnk.click();
    }
}
export default new UserHomePage();