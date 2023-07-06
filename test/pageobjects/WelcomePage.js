class WelcomePage{
    //Returns User SignIn Link
    get signInLnk()
    {
        return $('a=/ Sign In');
    }

    //Returns Admin LogIn Link
    get adminLoginLnk()
    {
        return $('a=Admin Login');
    }

    //Returns User SignUp Link
    get SignUpLnk()
    {
        return $('a=Sign Up');
    }

    //
    get usernameSignIn()
    {
        return $("//div[@id='myModal4']//input[@id='email']");
    }

    //
    get passwordSignIn()
    {
        return $("//div[@id='myModal4']//input[@id='password']");
    }

    //
    get signInBtn()
    {
        return $('[name="signin"]');
    }

   async signInUser(username,password)
    {
        await this.signInLnk.waitForClickable({timeout:2000});
        await this.signInLnk.click();
        await this.usernameSignIn.waitForEnabled({timeout:2000});
        await this.usernameSignIn.setValue(username);
        await this.passwordSignIn.waitForEnabled({timeout:2000});
        await this.passwordSignIn.setValue(password);
        await this.signInBtn.waitForClickable({timeout:2000});
        await this.signInBtn.click();    
    }

    async goToAdminLoginPage()
    {
        await this.adminLoginLnk.waitForClickable({timeout:2000});
        await this.adminLoginLnk.click();
        this.adminLoginLnk.view
    }

    
}

export default new WelcomePage();
// module.exports=wpage;