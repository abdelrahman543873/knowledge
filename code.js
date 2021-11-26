const inputText = "something is something but something is nothing pls check nothing";
const lineSplitter = (text, textSize) => {
  const resultSplitText = [];
  let counter = 0;
  const textSplitArray = text.split(" ");
  for (let i = 0; i < textSplitArray.length; i++) {
    if (!resultSplitText[counter]) {
      if (textSplitArray[i].length > textSize) {
        resultSplitText.push(textSplitArray[i].substring(0, textSize));
        resultSplitText.push(textSplitArray[i].substring(textSize));
        counter += 2;
      } else {
        resultSplitText.push(textSplitArray[i]);
      }
    } else if (
      textSplitArray[i].length > textSize &&
      resultSplitText[counter].length < textSize
    ) {
      resultSplitText[counter] = resultSplitText[counter] += ` ${textSplitArray[
        i
      ].substring(0, textSize - resultSplitText[counter].length)}`;
      resultSplitText.push(
        textSplitArray[i].substring(textSize - resultSplitText[counter].length)
      );
      counter += 1;
    } else if (
      textSplitArray[i].length > textSize &&
      resultSplitText[counter].length === textSize
    ) {
      resultSplitText.push(textSplitArray[i].substring(0, textSize));
      resultSplitText.push(textSplitArray[i].substring(textSize));
      counter += 2;
    } else if (
      // one extra character for the space
      resultSplitText[counter].length + textSplitArray[i].length + 1 <=
      textSize
    ) {
      resultSplitText[counter] = resultSplitText[
        counter
      ] += ` ${textSplitArray[i]}`;
    } else {
      counter += 1;
      resultSplitText.push(textSplitArray[i]);
    }
  }
  return resultSplitText;
};
console.log(lineSplitter(inputText, 8));
