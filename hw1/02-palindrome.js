const elem = document.querySelector('input');
const result = document.querySelector('div > div');

elem.addEventListener('input', handleInput);

function handleInput() {
    const inValue = elem.value;
    const isNegative = inValue < 0;
    const isPalindrome = isNumPalindrome(inValue);

    if (isNegative) {
        result.textContent = 'Negative';
        result.style.color = 'red';
    } else if (isPalindrome) {
        result.textContent = 'Palindrome';
        result.style.color = 'green';
    } else {
        result.textContent = 'Not a palindrome';
        result.style.color = 'red';
    }
}

function isNumPalindrome(num) {
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
    //split the string into an array
    //reverse the array
    //join array into string
    return numStr === reversedNumStr; //are they the same?
}