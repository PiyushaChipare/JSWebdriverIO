import wPage from "../pageobjects/WelcomePage.js";
import pkg from 'chai';
const {expect}=pkg;

// describe('browser launch' , ()=>{

//     it('Trail' ,  async()=>{
//        await browser.maximizeWindow();
//         browser.url('http://rmgtestingserver/domain/Online_Tourism_Management_System/')
//        async function click(){
//           await  wPage.adminLoginLnk.waitForClickable({timeout:2000})
//           await wPage.adminLoginLnk.click();
//           let t=browser.getUrl();
//           return expect(t).toHaveUrlContaining('admin')
//         }
//         new Promise((resolve,reject)=>{
//             console.log('entered promise');
//             let re = click()
//           if(re)
//             resolve('clicked');
//             else
//             reject(false)
//         }).then((val)=>{console.log(val);
//         // wPage.adminLoginLnk.click();
//         })
//         await browser.pause(3000);
//     })
// })
let m1=()=>{
    let a=0;
    return a;
};
let aa=m1();
console.log(aa);