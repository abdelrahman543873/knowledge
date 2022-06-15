function biggerIsGreater(w) {
  var vals = w.split("");
  var largestI = -1;
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] < vals[i + 1]) {
      largestI = i;
    }
  }
  if (largestI === -1) {
    return "no answer";
  }
  var largestJ = -1;
  for (let j = 0; j < vals.length; j++) {
    if (vals[largestI] < vals[j]) {
      largestJ = j;
    }
  }
  let temp = vals[largestI];
  vals[largestI] = vals[largestJ];
  vals[largestJ] = temp;
  var endArray = vals.splice(largestI + 1);
  endArray.reverse();
  vals = vals.concat(endArray);
  return vals.join("");
}
biggerIsGreater("hkdc");
