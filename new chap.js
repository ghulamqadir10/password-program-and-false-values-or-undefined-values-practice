// let password=prompt("please enter a pasword");
// // let special_characters=  "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// let special_characters=/[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
// if (password.length < 8){
// if (password.indexOf(" ") !== -1){
//     console.log("password do not contain spaces")
//     document.write("password do not contain spaces")
// }else{
//     console.log("password have no spaces")
//     document.write("password have no spaces")
// }
// if (!password.match(special_characters)){
//     console.log("password must contain one special character")
//     document.write("password must contain one special character")
// }
// console.log("correct password");
// document.write("correct password");
// } else{
//     console.log("pass is 8 or more character long")
//     document.write("pass is 8 or more character long")
// }

// // var password = prompt("Enter password");

// // if (password.indexOf(" ") !== -1) {
// //   console.log("password can not contain spaces");
// // } else {
// //   if (password.indexOf(".") === -1) {
// //     console.log("password must contain .");
// //   }
// //   if (password.length < 8) {
// //     console.log("password must contain atleast 8 characters");
// //   } else {
// //     console.log("correct password");
// //   }
// // }

//  more practice for password program

let password = prompt("enter a password");
let specialCharacters = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
if ((password.length <= 8 || password.length >= 10)) {
  if (!password.match(specialCharacters)) {
    console.log("password must have one special character" );
    document.write("password must have one special character" + "<br>");
  } else {
    console.log("password  have  special character");
    document.write("password  have  special character"+ "<br>");
  }
  if (password.indexOf(" ") !== -1) {
    console.log("password can not contain spaces");
    document.write("password can not contain spaces"+ "<br>");
  } else {
    console.log("password is correct");
    document.write("password is correct"+ "<br>");
  }
  console.log("password is correct");
  document.write("password is correct"+ "<br>");
} else {
  console.log("password is incorrect");
  document.write("password is incorrect"+ "<br>");
}

// falsy values

// false
// 0
// null
// undefined
// NaN
// ''|""

if (false) {
  console.log("tcruthy value");
  document.write("truthy value");
} else {
  console.log("false value");
}
if (0) {
  console.log("truthy value");
  document.write("truthy value"+ "<br>");
} else {
  console.log("false value");
  document.write("false value"+ "<br>");
}
if (null) {
  console.log("truthy value");
  document.write("truthy value"+ "<br>");
} else {
  console.log("false value");
  document.write("false value"+ "<br>");
}
if (undefined) {
  console.log("truthy value");
  document.write("truthy value"+ "<br>");
} else {
  console.log("false value");
  document.write("false value"+ "<br>");
}
if (NaN) {
  console.log("truthy value");
  document.write("truthy value"+ "<br>");
} else {
  console.log("false value");
  document.write("false value"+ "<br>");
}
if ("") {
  console.log("truthy value");
  document.write("truthy value"+ "<br>");
} else {
  console.log("false value");
  document.write("false value"+ "<br>");
}

let value = +prompt("please enter a value");
console.log(value);
if (value) {
  console.log(value++);
  document.write(value++ , "<br>");
} else {
    console.log("invalid value");
    document.write("invalid value"+ "<br>");
}

if (!value) {
  console.log("invalid value");
  document.write("invalid value"+ "<br>");
} else {
  console.log(value++);
  document.write(value++)
}
