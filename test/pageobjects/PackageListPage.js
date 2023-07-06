//for checking if a package is created or not    
// ========>   //div[@class='rom-btm']/descendant::h4[contains(.,'Goa')]
import cred from'../pageobjects/Creds.js';

class PackageListPage{

    pname=cred.packageNM;

    get packageName()
    {
        return $(`//div[@class='rom-btm']/descendant::h4[contains(.,'${this.pname}')]`)
    }
    get detailsBtn()
    {
        return $(`//h4[contains(.,'${this.pname}')]/ancestor::div[@class='rom-btm']/descendant::a`)
    }
  
    get packageCheck()
    {
        let p=false;
        p= this.packageName.isExisting();
        return p;       
    }

    /**
     * This method will click on details button of package given
     */
    async clickDetailsBtn()
    {
        await this.detailsBtn.isExisting();
        await this.detailsBtn.scrollIntoView({block : 'center',inline: 'center'});
        await this.detailsBtn.click();
    }
}
export default new PackageListPage();