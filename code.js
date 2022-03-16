<<<<<<< HEAD
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}
=======
const someObject = { hello: "hello", sean: "sean" };
Object.keys(someObject).forEach((property) => {
  console.log(property);
const soap = require("strong-soap").soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
const url = "https://10.2.1.108/tranwall/service/IssuerApi/v2.0?wsdl";
>>>>>>> 30c065de98128c918f564c270614c79e13b8cfdc

foo();
