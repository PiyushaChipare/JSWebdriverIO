import pkg from "chai";
const {expect}=pkg;
describe('Flipkart',()=>{
    // it('Go To Cart',async()=>{
    //     browser.maximizeWindow();
    //     await browser.url('https://www.flipkart.com/')
    //     let closePopup= $('button=✕');
    //     await closePopup.click();
    //     let cart=await $('=Cart');
    //     await cart.click();
    //     let u = await browser.getUrl().then((res)=>{return res})
    //     console.log(u);
    //     expect(u,'not same as expected link for cart').to.equal('https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART')
         
        
    // }),
    it('Trello login and logout',async()=>{
        browser.maximizeWindow();
        browser.url('https://trello.com/');
        const loginLnk=await $('=Log in');
        await loginLnk.click();
        const emailEdt=await $('[id="user"]');
        emailEdt.setValue('pushachip@gmail.com');
        const continueForPasswordBtn=await $('[value="Continue"]');
        await continueForPasswordBtn.waitForClickable({timeout:2000});
        await continueForPasswordBtn.click();
        browser.waitUntil(()=>{
            return browser.getTitle()==='Log in to continue - Log in with Atlassian account';
        },3000,'Log in to continue not same')
        const passwordEdt=await $('#password');
        passwordEdt.waitForClickable({timeout:2000});
        // passwordEdt.value='Piyusha@02';
        await passwordEdt.setValue('Piyusha@02');
        const loginLnkFinal=await $('span=Log in');
        await browser.pause(2000);
        await loginLnkFinal.waitForEnabled({timeout:2000})
        // await browser.pause(2000);
        
       // let ul=await browser.getUrl().then((res)=>{return res})//.then((ress)=>{expect(ress).contain('login?application')}).then(await browser.pause(3000));
       // expect(await browser.getUrl().then((res)=>{return res})).contains('login?application');

    })
})
async function validateUrl(partialContent)
{
    expect(await browser.getUrl().then((res)=>{console.log(res);return res})).contains(partialContent);
}