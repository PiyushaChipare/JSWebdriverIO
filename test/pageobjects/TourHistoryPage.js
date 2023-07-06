class TourHistoryPage{

    get bookingStatus()
    {
        return $("//td[text()='Lily Travel0.6871279555850389']//following-sibling::td[1]");
    }

    get bookingStatusText()
    {
        this.bookingStatus.waitForExist({timeout:2000});
        return this.bookingStatus.getText();
    }

}
export default new TourHistoryPage();