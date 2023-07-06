// let ar="Human";


// function some(a,b,c,d){

//     console.log(a+b+c+d);
// }
// some(...ar)


// function hu(a,b,...some1){
//     let zz=a+b;
    
//     for (const ele of some1) {
//        zz=zz+ele;
//     }
//     console.log(`${zz}`);
// }
// let a =10,b=20,c=30,d=40,e=60
// hu(a,b,c,d)

// // setTimeout(()=>{
// //     console.log(1);
// // },1000)

// // setInterval(()=>{
// //     console.log('interval');
// // },1000)
// let yy='test';
// let yy1='';
// for (const i in yy) {
//     // console.log(typeof i);
//     if(i==yy.indexOf(yy.charAt(i)))
//     {yy1=yy1+yy.charAt(i);}
// }
// console.log(yy1);

// let s='123abc';
// let num=parseInt(s,0)
// console.log(num);


// function Person() {
//   this.firstName = 'first';
//   this.lastName = 'last';
//   this.age = 'age';
//   this.eyeColor = 'eye';
//   }
  
// //   Person.nationality = "Indian";
  
// //   const myFather = new Person("John", "Doe", 50, "blue");
// //   myFather.nationality='123'
// //   console.log(myFather);

//   let a={
//     firstName : 'first',
//     lastName: 'last',
//     age :'age',
//     eyeColor : 'eye'
//   }
//   let b={
   
//     job:123
//   }
//   b. __proto__=a
//   let c=(new Person());
//   c.job=123
//   console.log(b);
// function name11(p1,p2) {
//   console.log(arguments[1]);
  
//   let aa1=(a1,a2)=>{
    
    
  
//   }
// }
// // name11(2,4,5)

// let aa1=(a1,a2,...arg)=>{
//   console.log(`${a1} ${a2}`);
//   console.log(`${arg.join(" ")}`);

// }
// aa1(1,2,3,4,5)
// function n12() {
//   console.log(`${this.a1} ${this.a2}`);  
// }
// let num={
//   a1:11,a2:22,
//   length:2
// }
// let num1={
//   a1:111,a2:222,
//   length:2
// }
// let was=n12.bind(num);
// was()

//      INHERITANCE
//function based encapsulation
// function name22(name,age)
// {
//   this.nm=name;
//   this.ag=null;
// }
// name22.prototype.getAge=function()
// {
//   return typeof this.ag;
// }
// const obj1=new name22('qwe',45);
// console.log(obj1.getAge());

//      ENCAPSULATION
//Prototype-based inheritance:
//Every object in JavaScript has an associated prototype object from which it can inherit properties and methods. 
//When a property or method is accessed on an object, if it doesn't exist on the object itself, 
//JavaScript looks for it in the prototype chain until it finds it or reaches the top-level Object.prototype object.

function Shape(colour){
this.colour=colour;  
}
Shape.prototype.getColour=function(){return this.colour;}

function Circle(colour,radius)
{
  Shape.call(this,colour)
  this.radius=radius;  
}

Circle.prototype.getRadius=function(){return this.radius}

Circle.prototype.getArea=function()
{
  return Math.PI * Math.pow(this.radius,2);
}
let objCircle=new Circle('red',2);
console.log(objCircle.getArea());