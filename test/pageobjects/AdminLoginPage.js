class AdminLoginPage
{
    //Returns Admin Username
    get usernameEdt()
    {
        return $('[name="username"]');
    }

    //Returns Admin Password
    get passwordEdt()
    {
        return $('[name="password"]');
    }

    //Returns Admin Login Button
    get loginBtn()
    {
        return $('[name="login"]');
    }

    //Returns Admin Back To Home link
    get backToHomeLink()
    {
        return $('a=Back to home');
    }

    async loginAsAdmin(username,password)
    {
        await this.usernameEdt.waitForEnabled({timeout:2000});
        await this.usernameEdt.setValue(username);
        await this.passwordEdt.waitForEnabled({timeout:2000});
        await this.passwordEdt.setValue(password);
        await this.loginBtn.waitForClickable({timeout:2000});
        await this.loginBtn.click();
    }

    async goToWelcomePAge()
    {
        await this.backToHomeLink.waitForClickable({timeout:2000});
        await this.backToHomeLink.click();
    }
}

export default new AdminLoginPage();