import wPage from '../../pageobjects/WelcomePage.js';
import alPage from '../../pageobjects/AdminLoginPage.js'
import ahPage from '../../pageobjects/AdminHomePage.js';
import cpPage from '../../pageobjects/CreateTourPackagePage.js';
import plPage from '../../pageobjects/PackageListPage.js';
import uhPage from '../../pageobjects/UserHomePage.js';
import pdPage from '../../pageobjects/PackageDetailsPage.js';
import mbPage from '../../pageobjects/ManageBookingPage.js';
import thPage from '../../pageobjects/TourHistoryPage.js';
import creds from '../../pageobjects/Creds.js';
import pkg from 'chai';
const {expect}=pkg;
import pkg2 from 'chai';
const {assert}=pkg2;
//                      INCORRECT WAY TO IMPORT POM AND CHAI ASSERTION MENTIONED BELOW
// const wPage=require('../../pageobjects/WelcomePage.js');
// import {expect} from 'chai'

    
describe('login as user smoke',async()=>
{    
    
    it.skip('Using Pom clases login as user',async()=>
    {
        await openApplication();
       await  wPage.signInUser(creds.usernameUser,creds.passwordUser);
       let title=await browser.getTitle();
       console.log(title);
       expect(title).contains('123');
       expect(wPage.SignUpLnk.isen)
       await  browser.pause(2000);
       await uhPage.logoutUser();
       await  browser.pause(2000);
       browser.sw
    });

    // it('login and logout',async ()=>
    // {
    //     openApplication();
    //      const signInLnk= await $('a=/ Sign In');
    //     await signInLnk.click();
    //     //await browser.pause(5000);
    //      const emailEdt=await $("//div[@id='myModal4']//input[@id='email']");
    //     //  expect(await emailEdt.waitForClickable({timeout:3000})).to.be.equal
    //     await emailEdt.setValue('alpha@gmail.com');
        
    //     //await browser.pause(5000);
    //      const passwordEdt=await $("//div[@id='myModal4']//input[@id='password']");
    //      await passwordEdt.waitForClickable({timeout:3000})
    //     await passwordEdt.setValue('abc');
        
    //     const signInBtn= await $('[name="signin"]');
    //     await signInBtn.waitForClickable({timeout:3000,timeoutMsg:'SignIn Button not clickable'})
    //     await signInBtn.click();
    //     //await expect(browser).toHaveTitleContaining('Package List')
        
    //     const logoutLnk=await $('=/ Logout');
    //     await logoutLnk.waitForClickable({timeout:2000});
    //     await logoutLnk.click();
    //    // const title=browser.getTitle;
    //     //  expect(title).to.equal('TMS | Tourism Management System');
    //     await browser.pause(2000);
    // })



    it.skip('Create Tour Package',async()=>
    {
       await openApplication();
       await wPage.goToAdminLoginPage();
       await alPage.loginAsAdmin(creds.adminUsername,creds.adminPassword);
       await ahPage.goToCreateTourPackagePage(); 
        await cpPage.createTourPackage(creds.packageNM,'family','gujarat','76000k','Transportation','All Details','C://Users/Piyusha Chipare/Desktop/New Bitmap image.jpeg');
        await ahPage.logoutAdmin();
        await alPage.goToWelcomePAge();
        await wPage.signInUser(creds.usernameUser,creds.passwordUser);
        await uhPage.goToTourPackagesPage();

        //Check if package is present or not in Package list page of user
        let ppresent= await plPage.packageName.isExisting();
        console.log(`@@@@@@@@@@@@@@@@@@@@@@@ ${ppresent} @@@@@@@@@@@@@@@@@@@@@@@ `);
        expect(ppresent).equals(true)

        const detailIcon=await plPage.detailsBtn.isExisting();
        console.log(`@@@@@@@@@@@@@@@@@@@@@@@ ${detailIcon} @@@@@@@@@@@@@@@@@@@@@@@ `);
        await plPage.detailsBtn.scrollIntoView();
        uhPage.logoutUser();
        // await plPage.detailsBtn.click();
       await browser.pause(3000);
    });

    it('Confirm Booking And Check its status in User',async (done)=>{
        await openApplication();
        await wPage.goToAdminLoginPage();
        await alPage.loginAsAdmin(creds.adminUsername,creds.adminPassword);
        let url= await browser.getUrl();
        expect(url).equals('http://rmgtestingserver/domain/Online_Tourism_Management_System/admin/dashboard.php')
        await ahPage.goToCreateTourPackagePage(); 
        await cpPage.createTourPackage(creds.packageNM,'family','gujarat','76000k','Transportation','All Details','C://Users/Piyusha Chipare/Desktop/New Bitmap image.jpeg');
        await ahPage.logoutAdmin();
        await alPage.goToWelcomePAge();
        await wPage.signInUser(creds.usernameUser,creds.passwordUser);
        await uhPage.goToTourPackagesPage();
        await plPage.packageCheck();
        await plPage.clickDetailsBtn();
        await pdPage.bookTour(creds.bookStart,creds.bookEnd,creds.bookComment);
        await uhPage.logoutUser();
        await wPage.goToAdminLoginPage();
        await alPage.loginAsAdmin(creds.adminUsername,creds.adminPassword);
        await ahPage.goToManageBookingPage();
        await mbPage.confirmBooking();
        await ahPage.logoutAdmin();
        await alPage.goToWelcomePAge();
        await wPage.signInUser(creds.usernameUser,creds.passwordUser);
        await uhPage.goToMyTourHistoryPage();
        text=await thPage.bookingStatusText;
        console.log("                              "+text);

        done();
    })
})
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
//                                        REUSABLE METHODS
async function openApplication()
{
    await browser.maximizeWindow();
    await browser.url('http://rmgtestingserver/domain/Online_Tourism_Management_System/')    
}