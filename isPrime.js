// Return number is prime or not
function checkPrime(num) {
    if(num <=1) {
        return false;
    }else {
        for(let i = 2; i< num; i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
// array containing number
let arr = [0,1,4,6,8,9,10,13];
let check = [];
// Getting each element of array and push to new array that element
arr.forEach(function(ele) {
    const isPrime = checkPrime(ele);
    if(isPrime) {
        check.push(ele);
    }
});
// Returning that number which is Prime otherwise zero.
function getNumber() {
    if(check.length > 0) {
        return check[0];
    }else {
        return 0;
    }
}
console.log(getNumber())