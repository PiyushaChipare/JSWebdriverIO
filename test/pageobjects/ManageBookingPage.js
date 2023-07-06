import creds from "./Creds.js";
class ManageBookingPage
{

    comment=creds.bookComment;
    get confirmLnk()
    {
        return $(`//span[text()='${this.comment}']/../..//a[text()='Confirm']`);
    }

    get cancelLnk()
    {
        return $(`//span[text()='${this.comment}']/../..//a[text()='Cancel']`);
    }

    async confirmBooking()
    {
        await this.confirmLnk.waitForExist({timeout:3000});
        await this.confirmLnk.scrollIntoView();
        await this.confirmLnk.click();
        await browser.isAlertOpen();
        await browser.acceptAlert();
    }

    async cancelBooking()
    {
        await this.cancelLnk.waitForExist({timeout:3000});
        await this.cancelLnk.scrollIntoView();
        await this.cancelLnk.click();
    }
}
export default new ManageBookingPage();