function expression(exp) {
  for (let i = 1; i < exp.length; i++) {
    if (exp[i] === ")" && exp[i - 1] !== "(") {
      return false;
    } else if (exp[i] === "}") {
      const substring = exp.substring(0, i).indexOf("{");
      if (substring === -1) return false;
      const arrayString = exp.split("");
      arrayString[substring] = "0";
      exp = arrayString.join("");
    } else if (exp[i] === "]") {
      const substring = exp.substring(0, i).indexOf("[");
      if (substring === -1) return false;
      const arrayString = exp.split("");
      arrayString[substring] = "0";
      exp = arrayString.join("");
    }
  }
  return true;
}

console.log(expression("[()][}{()()}"));
