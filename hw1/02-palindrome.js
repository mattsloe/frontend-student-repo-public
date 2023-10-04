const elem = document.querySelector('input');
const result = document.querySelector('div > div');

elem.addEventListener('input', handleInput);

function handleInput(){
    const inValue = elem.value;
    const isNegative = inValue < 0;
    const isPalindrome = isNumPalindrome(inValue);

    if(isNegative){
        result.textContent = 'Negative';
    } else if(isPalindrome){
        result.textContent = 'Palindrome';
    } else {
        result.textContent = 'Not a palindrome';
    }
}

function isNumPalindrome(num){
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
        //split the string into an array
        //reverse the array
        //join array into string
    return numStr === reversedNumStr; //are they the same?
}