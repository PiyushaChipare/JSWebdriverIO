async function run() {
    let pro=new Promise((resolve,reject)=>{
        console.log('promise started');
        setTimeout(() => {
            console.log('logged timeout');
        }, 2000);
        console.log('promise finish')
    
        //if code runs suuccessfully then RESOLVE will be invoked
        resolve('promise is ResolveD')          
    
        //if code does not runs suuccessfully then REJECT will be invoked
        reject('promise is RejecteD')           
    })
    
    //(msg is captured from the parameter given to then)
    await pro.then((msg)=>{console.log(msg);})  
    
    // msg is captured from the parameter given to catch)
    await pro.catch((errmsg)=>{console.log(errmsg);})
    
    let ultraPro=new Promise((resolve,reject)=>
    {
        resolve('promise is ResolveD')
        reject('promise is RejecteD')
    }
    )
    await ultraPro.then((msg)=>{console.log(msg);})
    await ultraPro.catch((msg)=>{console.log(msg);})
    }
    
    
    run();