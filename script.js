const input = document.getElementById("text-input");

const button = document.getElementById("check-btn");

const resultBox = document.getElementById("result");



button.addEventListener("click", () => {
  if (input.value === "") {
  //input.placeholder = 
  alert("Please input a value");
  } else {
    input.placeholder = "Enter text here";

    const strInput = input.value;
    const inputIsPalindrome = isPalindrome(strInput);
  
  

    if (inputIsPalindrome) {
      resultBox.textContent = strInput + " is a palindrome";
    } else {
      resultBox.textContent = strInput + " is not a palindrome";
    }
  }


 
});


// returns true if str is palindrome
// false if not

function isPalindrome(str) {
 
  const lowerCaseString = str.toLowerCase();
 
  const regex = /\W|_/g
  const cleanedUpString = lowerCaseString.replace(regex, "");
 
  const splitString = cleanedUpString.split("");

  const reversedLetters = splitString.reverse();

  const reversedString = reversedLetters.join("");

  const isSame = reversedString === cleanedUpString;
  
  console.log(isSame);
return isSame;


  
}





isPalindrome("A")
console.log(isPalindrome("A"));
