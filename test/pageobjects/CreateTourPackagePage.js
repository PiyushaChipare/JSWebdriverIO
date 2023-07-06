class CreateTourPackagePage
{
     get packNameEdt()
     {
        return $('#packagename');
     }

     get packTypeEdt()
     {
        return $('#packagetype');
     }

     get packLocationEdt()
     {
        return $('#packagelocation');
     }

     get packPriceEdt()
     {
        return $('#packageprice');
     }

     get packFeaturesEdt()
     {
        return $('#packagefeatures');
     }

     get packDetailsEdt()
     {
        return $('#packagedetails');
     }

     get packImageEdt()
     {
        return $("//label[text()='Package Image']/parent::div//input");
     }

     get createBtn()
     {
        return $('[name="submit"]');
     }

     async createTourPackage(pName,pType,pLocation,pPrice,pFeature,pDetails,pImage)
     {
      //Package name Added
        await this.packNameEdt.waitForEnabled({timeout:2000});
        await this.packNameEdt.setValue(pName);
      //Package type added
        await this.packTypeEdt.waitForEnabled({timeout:2000});
        await this.packTypeEdt.setValue(pType);
      //Package location added
        await this.packLocationEdt.waitForEnabled({timeout:2000});
        await this.packLocationEdt.setValue(pLocation);
      //Package price added
        await this.packPriceEdt.waitForEnabled({timeout:2000});
        await this.packPriceEdt.setValue(pPrice);
      //Package feature added
        await this.packFeaturesEdt.waitForEnabled({timeout:2000});
        await this.packFeaturesEdt.setValue(pFeature);
      //Package details added
        await this.packDetailsEdt.waitForEnabled({timeout:2000});
        await this.packDetailsEdt.setValue(pDetails);
      //Package create button and package image element saved
        await this.createBtn.waitForClickable({timeout:2000});
        const submit=await this.createBtn;
        submit.scrollIntoView();
        const image=await this.packImageEdt;
        
        await this.packImageEdt.waitForEnabled({timeout:2000});
        await image.setValue(pImage);        
        await this.createBtn.click();
     }
}

export default new CreateTourPackagePage();