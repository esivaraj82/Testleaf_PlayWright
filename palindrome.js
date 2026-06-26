function palindrome(inputString) {
  inputChar = inputString.split("");
  stringLength = inputChar.length;
  let reverseString = "";
  for (i = stringLength - 1; i >= 0; i--) {
    reverseString += inputChar[i];
  }
  console.log(`The Input string is ${inputString}`);
  console.log(`The reversed string is ${reverseString}`);
  if (reverseString === inputString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

palindrome("madam");