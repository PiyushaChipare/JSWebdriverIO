class PackageDetailsPage{
    get fromEdt()
    {
        return $('#datepicker');
    }

    get toEdt()
    {
        return $('#datepicker1');
    }

    get commentEdt()
    {
        return $("//input[@name='comment']");
    }

    get bookBtn()
    {
        return $("//button[@name='submit2']");
    }

    async bookTour(bookStart,bookEnd,bookComment)
    {
        await this.fromEdt.waitForEnabled({timeout:1000});
        await this.fromEdt.setValue(bookStart);
        await this.toEdt.waitForEnabled({timeout:1000});
        await this.toEdt.setValue(bookEnd);
        await this.bookBtn.waitForExist({timeout:1000});
        await this.bookBtn.scrollIntoView();
        await this.commentEdt.waitForEnabled({timeout:1000});
        await this.commentEdt.setValue(bookComment);
        await this.bookBtn.click();
    }
}
export default new PackageDetailsPage();