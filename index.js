// // // // // // // // // // // // // // // setTimeout(() => {
// // // // // // // // // // // // // // //     console.log('setTimeout har 2sec me');
// // // // // // // // // // // // // // // }, 2000);

// // // // // // // // // // // // // // // function x(y) {
// // // // // // // // // // // // // // //     console.log('x');
// // // // // // // // // // // // // // //     y();
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // x(function y() {
// // // // // // // // // // // // // // //     console.log('y');
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // var square2 = square(n);
// // // // // // // // // // // // // // var n = 2;
// // // // // // // // // // // // // // function square(num){
// // // // // // // // // // // // // //     var ans = num * num;
// // // // // // // // // // // // // //     return ans;
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // var square4 = square(4);

// // // // // // // // // // // // // // getName();
// // // // // // // // // // // // // console.log(getName);

// // // // // // // // // // // // // var x = 7;

// // // // // // // // // // // // // function getName() {
// // // // // // // // // // // // //     console.log("Namste Javascript");
// // // // // // // // // // // // // }

// // // // // // // // // // // // var x = 1;
// // // // // // // // // // // // a();
// // // // // // // // // // // // b();
// // // // // // // // // // // // console.log(x);

// // // // // // // // // // // // function a() {
// // // // // // // // // // // //     var x = 10;
// // // // // // // // // // // //     console.log(x);
// // // // // // // // // // // // }

// // // // // // // // // // // // function b() {
// // // // // // // // // // // //     var x = 100;
// // // // // // // // // // // //     console.log(x);
// // // // // // // // // // // // }

// // // // // // // // // // // var a = 10;
// // // // // // // // // // // function b() {
// // // // // // // // // // //     var x = 10;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(window.a);
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // console.log(this.a);

// // // // // // // // // // // console.log(a);
// // // // // // // // // // // var a = 7;

// // // // // // // // // // // console.log(x);

// // // // // // // // // // // var a;
// // // // // // // // // // // a = 10;
// // // // // // // // // // // console.log(a);

// // // // // // // // // // // if(a == undefined) {
// // // // // // // // // // //     console.log("a is undefined")
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("a is not undefined");
// // // // // // // // // // // }

// // // // // // // // // // // var a;
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // a = 10;
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // a = "hello world";
// // // // // // // // // // // console.log(a);

// // // // // // // // // // // a = undefined;  // never do this (not a good practice to do this.)
// // // // // // // // // // // console.log(a);

// // // // // // // // // // // function a() {
// // // // // // // // // // //     var b =10;
// // // // // // // // // // //     c()
// // // // // // // // // // //     // console.log(b);
// // // // // // // // // // //     function c() {
// // // // // // // // // // //         console.log(b);
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // // // var b = 10;
// // // // // // // // // // // a();
// // // // // // // // // // // // console.log(b);

// // // // // // // // // // // console.log("jklshdafkjlah");
// // // // // // // // // // // let a = 10;
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // // console.log(b);

// // // // // // // // // // // var b =100;
// // // // // // // // // // // var b = 1000;

// // // // // // // // // // let a;
// // // // // // // // // // const b;
// // // // // // // // // // // cannot to it later u have to do const b = 1000;
// // // // // // // // // // b = 100000;
// // // // // // // // // // a = 10;
// // // // // // // // // // console.log(a);

// // // // // // // // // let a;
// // // // // // // // // const b = 1000;

// // // // // // // // // b = 10000;
// // // // // // // // // a = 10;
// // // // // // // // // console.log(a);

// // // // // // // // {
// // // // // // // //     //Compund Statement
// // // // // // // //     var a = 10;
// // // // // // // //     console.log(a);
// // // // // // // // }
// // // // // // // // if (true) {
// // // // // // // //     //Compund Statement
// // // // // // // //     var a = 10;
// // // // // // // //     console.log(a);
// // // // // // // // }

// // // // // // // let b = 100;
// // // // // // // {
// // // // // // // var a = 10;
// // // // // // // let b = 20;
// // // // // // // const c = 30;
// // // // // // // console.log(a);
// // // // // // // console.log(b);
// // // // // // // console.log(c);
// // // // // // // }
// // // // // // // // console.log(a);
// // // // // // // console.log(b);
// // // // // // // // console.log(c);

// // // // // // var c = 100;
// // // // // // function x() {
// // // // // //     var c = 30;
// // // // // //     console.log(c);
// // // // // //     window.c = 20;
// // // // // // }
// // // // // // x()
// // // // // // console.log(c);

// // // // // // function x() {
// // // // // //     var a = 7;
// // // // // //     function y() {
// // // // // //         console.log(a);
// // // // // //     }
// // // // // //     y();
// // // // // // }
// // // // // // x();

// // // // // function x() {
// // // // //     var a = 7;
// // // // //     function y() {
// // // // //         console.log(a);
// // // // //     }
// // // // //     return y;
// // // // // }
// // // // // var z = x();
// // // // // console.log(z);
// // // // // z();

// // // // function x() {
// // // //     var a = 7;
// // // //     return function y() {
// // // //         console.log(a);
// // // //     }
// // // // }
// // // // var z = x();
// // // // console.log(z);
// // // // z();

// // // // function x() {
// // // //     var a = 7;
// // // //     function y() {
// // // //         console.log(a);
// // // //     }
// // // //     a = 100;
// // // //     return y;
// // // // }
// // // // var z = x();
// // // // console.log(z);
// // // // z();

// // // // function z() {
// // // //   var b = 900;
// // // //   function x() {
// // // //     var a = 7;
// // // //     function y() {
// // // //       console.log(a, b);
// // // //     }
// // // //     y();
// // // //   }
// // // //   x();
// // // // }
// // // // z();

// // // // function x() {
// // // //     var i = 1;
// // // //     setTimeout(function () {
// // // //         console.log(i);
// // // //     }, 3000);
// // // //     console.log("Namaste JavaScript");
// // // // }
// // // // x();

// // // // function x() {
// // // //     for (var i = 1; i <= 5; i++) {
// // // //         setTimeout(function () {
// // // //             console.log(i);
// // // //         }, i * 1000);
// // // //     }
// // // //     console.log("Namaste JavaScript");
// // // // }
// // // // x();

// // // // function x() {
// // // //     for (let i = 1; i <= 5; i++) {
// // // //         setTimeout(function () {
// // // //             console.log(i);
// // // //         }, i * 1000);
// // // //     }
// // // //     console.log("Namaste JavaScript");
// // // // }
// // // // x();

// // // // function x() {
// // // //   for (var i = 1; i <= 5; i++) {
// // // //     function close(x) {   // by just creating this, we are able to do what let was able to do
// // // //       setTimeout(function () {
// // // //         console.log(x);
// // // //       }, x * 1000);
// // // //     }
// // // //     close(i);
// // // //   }
// // // //   console.log("Namaste JavaScript");
// // // // }
// // // // x();

// // // // DingDong = () => {
// // // //     functionb = () => {
// // // //         console.log("hhhhhhhhhhhhhhhhh");
// // // //     }
// // // //     functionb()
// // // //     setTimeout(function () {
// // // //         console.log("functionb just completed, so I'm printing this thing!");
// // // //     }, 2000);
// // // //     console.log(" ENTER ENTER ENTER we are just function ke bahar btw!!!!!!!!!!!!")
// // // // }
// // // // DingDong();

// // // // function outer() {
// // // //     var a = 10;
// // // //     function inner(){
// // // //         console.log(a);
// // // //     }
// // // //     return inner;
// // // // }
// // // // outer()();
// // // // or did this same thing
// // // // var close = outer();
// // // // close();

// // // // function outer(b){

// // // //     function inner(){
// // // //         console.log(a, b);
// // // //     }
// // // //     let a = 10;
// // // //     return inner;
// // // // }
// // // // var close = outer("hellow world");
// // // // close();

// // // //if we have this outer function and it nested inside of another function

// // function outest(){
// //     var c = 20;
// //     function outer(b){

// //         function inner(){
// //             console.log(a, b, c);
// //         }
// //         let a = 10;
// //         return inner;
// //     }
// //     return outer;
// // }
// // var close = outest()("helloworld"); // when outest is called it returns the outer function and this outer function wehen called aparameter hello world is passed and it give us the inner function and we can call inner function
// // close();

// // function counter() {
// //   var count = 0;
// //   return function incrementCounter() {
// //     count++;
// //     console.log(count);
// //   }
// // }


// // var counter1 = counter()
// // counter1();
// // counter1();

// // var counter2 = counter();
// // counter2();

// // do you think this above code is good and scalable ??
// // NOT a GOOD WAY may be we can make a constructor function
// function Counter(){
//     var count = 0;
//     this.incrementCounter = function() {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count --;
//         console.log(count);
//     }
// }


// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


