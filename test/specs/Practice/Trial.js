// import pkg from 'chai';
// const {expect}=pkg;
// import wpage from "../../pageobjects/WelcomePage.js";

// describe('Trial 1',async ()=> 
//     {
//         it('Trial 1.0', async () => 
//         {
//             await browser.maximizeWindow();
//             await browser.url('http://rmgtestingserver/domain/Online_Tourism_Management_System/');
//             await wpage.signInUser('alpha@gmail.com', 'abc');
//             let title=await browser.getTitle();  
//             expect(title).contains('TMS | Package List');
//             await browser.pause(2000);
//         });

        
//     })
function called(num,dial) 
{
    console.log(num);
    console.log(dial);    
}
let minote6pro={
    contact:'8787878787',
    call:true
}
let ip={
    numb:'9595959595',
    makeCall:false
}
let newfun=called.bind(minote6pro,minote6pro.contact,minote6pro.call);
called.call(minote6pro,minote6pro.contact,minote6pro.call);
called.apply(ip,[ip.numb,ip.makeCall]);
newfun();