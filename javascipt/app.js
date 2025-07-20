let person = {
    name: "John",
    age: 30,
    occupation: "Developer",
    isEmployee:true,
};
console.log(person);
function checkPrime(){
    let i, check = true;
    const number1=parseInt(inputfirst.value);
    for (i = 2; i <= number1 - 1; i++) {
        if (number1 % i == 0) {
            check = false;
            break;
        }
    }
    if (check == true)
        console.log(number1 + " is prime");
    else
        console.log(number1 + " is not prime");
}



