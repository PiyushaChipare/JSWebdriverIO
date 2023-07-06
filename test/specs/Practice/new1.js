// class demo{
//     str='hi';
// }

// class num extends demo
// {
//  nnn=123;
// }
// let numOb=new num();
// console.log(numOb instanceof num);
// console.log(numOb instanceof demo);
// console.log(numOb instanceof Object);

let a=[1,2,3,4,5,6,7];
console.log(a);
let b=[...a];
// console.log(a);
// console.log(b);
const string = 'hello';
let s2={name1:'abc',age:32};
let s3={...string};
console.log(typeof s3);
// // console.log(s2===s3);
// let aa=12;
// let abc=function () {
//     let bb=45;   
// }
// describe('describe',()=>{
//     it('it',()=>{
       
//          function name1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('element located');
//            // resolve('1');
//             reject('p1 rejected');
//         },2000);
            
//         });
// }

//  function name2() {
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('element initialized');
//             resolve('2');
//             reject('p2 rejected')
//         },2000)
        
        
//     })
// }
//  function name3() {
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('element clicked');
//         resolve('3')
//     reject('p3 rejected');
//     },2000);
    
// })
// }
// let p=name1();

// p.then((aa)=>{
//     console.log(aa);
//    return name2()
// }).catch((cc)=>{
//     console.log(cc);
//     return name2()
// }).then((bb)=>{
//     console.log(bb);
//     return name3();
// }).then((bb1)=>{
//     console.log((bb1));
// }).finally(()=>{
//     console.log('BYEEEEEEEEE');
// })

// name1().then((a)=>{
//     console.log(a);;
//     name2;
// }).then((b)=>{
//     console.log(b);
//     name3;
// }).then((c)=>{
//     console.log(c);
// })
// p1.then((v1)=>{console.log(v1);})
//     // p2).then(p3).catch('Promise failed').finally('Promise done');
    // console.log('it done');
// })
// })