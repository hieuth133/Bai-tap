/*
1. Let vs var vs const
a) var
    var declarations are globally scoped or function/locally scoped.
    var variables can be re-declared and updated
    
    var has a problem of re-declared, that is when your code is getting bigger and bigger,
    re-declare variable name can cause lots of bugs.

    
b) let
    let is block scoped  - {} - means what stays inside scope stay inside scope.
    let can be updated but not re-declared
    let is much better than var

c) const
    const is block scoped
    const cannot be updated or re-declared

    we cannot update the whole const variable but when const is objects, we can upgrade value inside.
    the same with array.
2. Boolean
True of False
*/

// 3. Write a program to print out
// a. 7 numbers, starting from 0 (no user input)
function cauA(){
    console.clear();
    for(var i = 0; i < 7; i++) {
        console.log(i);
    }
}
// cau_a();
// b. n numbers, starting from 0, n entered by user
function cauB(){
    console.clear();
    alert("Print n numbers start from 0, n entered by user.")
    var number = window.prompt("Enter a number: ");
    if (!isNaN(number)){
        if (parseInt(number,10) < 0){
            console.log('Lon hon 0 bro oi.');
            return cauB();
        }
        else{
            for(var i = 0; i < number; i++){
                console.log(i)
            }
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cauB();
    }
}
// c. A sequence of numbers, starting from 3, ending before n, n entered by user
function cauC(){
    console.clear();
    alert("A sequence of numbers, starting from 3, ending before n, n entered by user")
    var number = window.prompt("Enter a number: ");
    if (!isNaN(number)){
        if (parseInt(number,10) < 3){
            console.log('Lon hon 3 bro oi.');
            return cauC();
        }
        else{
            for(var i = 3; i < number; i++){
                console.log(i)
            }
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cauC();
    }
}
//d. A sequence of numbers, starting from c, ending before n, c and n entered by user
function cauD(){
    console.clear();
    alert("A sequence of numbers, starting from c, ending before n, c and n entered by user");
    var c = window.prompt("Enter starting number: ");
    var n = window.prompt("Enter ending number: ");
    if (!isNaN(c) & !isNaN(n)){
        if (parseInt(c,10) > parseInt(n,10)){
            console.log('Oc cho.');
            return cauD();
        }
        else{
            for(var i = c; i < n; i++){
                console.log(i)
            }
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cauD();
    }
}
// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
function cauE(){
    console.clear();
    alert("A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user")
    var c = window.prompt("Enter starting number: ");
    var n = window.prompt("Enter ending number: ");

    if (!isNaN(c) & !isNaN(n)){
        if (parseInt(c,10) > parseInt(n,10)){
            console.log('Oc cho.');
            return cauE();
        }
        else{
            var i = parseInt(c,10);
            while (i < n){
                console.log(i);
                i += 3;
            }
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cauE();
    }
}
// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user
function cauF(){
    console.clear();
    alert("A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user")
    var c = window.prompt("Enter starting number: ");
    var n = window.prompt("Enter ending number: ");
    var s = window.prompt("Enter stepping number: ");

    if (!isNaN(c) & !isNaN(n) &!isNaN(s)){
        if (parseInt(c,10) > parseInt(n,10)){
            console.log('Oc cho.');
            return cauF();
        }
        else{
            c = parseInt(c,10);
            n = parseInt(n,10);
            s = parseInt(s,10);
            while (c < n){
                console.log(c);
                c += s;
            }
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cauF();
    }
}

//4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
function cau4(){
    console.clear();
    alert("Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user")
    var n = window.prompt("Enter a number");
    var answer = 1;
    if (!isNaN(n)){
        n = parseInt(n);
        if (n <= 0){
            return 0;
        }
        else{
            for (var i = 1; i <= n;i++){
                answer *= i;
            }
        return alert(`The factorial of your number is ${answer.toString()}`);
        }
    }
    else {
        console.log('Deo biet tieng anh.');
        return cau4();
    }
}
//5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
function cau5(){
    console.clear();
    alert("Write a program asking users their age, and then decide if they are old enough to view a 14+ content");
    var n = window.prompt("Enter a number");
    if (!isNaN(n)){
        n = parseInt(n);
        if (n < 14){
            return alert(`You are not old enough to view this content`);
        }
        else{
            return alert(`Enjoy!`);
            }
        }
    else {
        console.log('Deo biet tieng anh.');
        return cau5();
    }
}
// 6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
function cau6(){
    console.clear();
    alert("Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range");
    var n = window.prompt("Enter a number from 0 to 9");
    if(isNaN(n)){
        alert("You should write a number!")
        return cau6();
    }
    else{
        n = parseFloat(n);
        if (n < 4.5){alert("Lower half of 9");}
        else{alert("Higher half of 9");}
    }
}
// 7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
function cau7(){
    console.clear();
    alert("Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n")
    var n = window.prompt("Enter a number: ");
    var x = window.prompt("Enter x: ");
    if(isNaN(n) | isNaN(x)){
        alert("You should write a number!")
        return cau7();
    }
    else{
        n = parseFloat(n);
        x = parseFloat(x);
        if (x < n/2) {alert(`Lower half of ${n}`);}
        else{alert(`Higher half of ${n}`);}
    }
}
// 8. Write a script to check if a number is even (divisible by 2) or odd number
function cau8(){
    console.clear();
    alert("Write a script to check if a number is even (divisible by 2) or odd number")
    var n = window.prompt("Enter a number");
    if(isNaN(n)){
        alert("You should write a number!")
        return cau8();
    }
    else{
        n = parseFloat(n);
        if (n % 2 == 0){alert(`${n} is an even number`);}
        else{alert(`${n} is an odd number`);}
    }
}
// 9. Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high) (CHIU)
// b. n L’s and H’s in total, n entered by user (CHIU)
function cau9d(){
    console.clear();
    alert("Print out sequence 0,1,0,1,... has n numbers, n inputed by user")
    var n = window.prompt("Enter a number");
    if(isNaN(n)){
        alert("You should write a number!")
        return cau9d();
    }
    else{
        n = parseInt(n);
        for (var i = 0; i < n; i++){
            console.log(i%2);   
        }
    }
}

//10. Write a script to calculate the BMI (Body Mass Index) of a person
// Severely underweight if BMI < 16
// ● Underweight if BMI is between 16 and 18.5
// ● Normal if BMI is between 18.5 and 25
// ● Overweight if BMI is between 25 and 30
// ● Obese if BMI is more than 30
function cau10(){
    console.clear();
    alert("BMI calculator")
    var w = window.prompt("Enter your weight (kg):");
    var h = window.prompt("Enter your height (m):");
    if(isNaN(w) | isNaN(h)){
        alert("You should write a number!")
        return cau10();
    }
    else{
        w = parseFloat(w);
        h = parseFloat(h);
        var BMI = w/(h**2);
        alert(`Your BMI is ${BMI}`);
        if(BMI < 16){alert("You are severely underweight");}
        else if(16 < BMI & BMI < 18.5) { alert("You are underweight");}
        else if(18.5 < BMI & BMI < 25) { alert("You are normal");}
        else if(25 < BMI & BMI < 30) { alert("You are overweight");}
        else {alert("You are obese")}
    }
}
