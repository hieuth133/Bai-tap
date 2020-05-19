// 1. Variable swap
function varSwap1(a,b,method){
    console.clear();
    console.log(a,b);
    switch(method){
        case 1: //recommend
            [a,b] = [b,a]; 
        case 2: //use temporary memory
            let temp;
            temp = a;
            a = b;
            b = temp;
        case 3: //integer only
            a = a + b;
            b = a - b; // a+b - b = a
            a = a - b; // a+b - a = b
        case 4: //int only (same)
            a = a ^ b;
            b = a ^ b;
            a = a ^ b;

    }
    console.log(a,b);
}
// 2. Split String into Array
function strSplit(str){
    let a = str.split(" ");
    console.log(a);
}
// strSplit(window.prompt("Enter a string: "))
// 3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of
// these tasks is to log (print out) an array without using loops, try it:

function testThreeDot(){
    let a = [1,3,5,9];
    console.log(...a);
}
// testThreeDot();

// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users

let items = ['Phi Yến','Hiền Nhi','Thảo baby'];
function simulate(){
    // console.clear();
    // alert(...items + '\n');
    tasks = String(window.prompt('Hi there, welcome to shop admin panel, what do you want (R, C, U, D):'));
    switch (tasks){
        case 'r':
            alert(`The current items are:\n ${items.join("\n")}`);
            // for (var i = 0; i < items.length; i++){console.log(i, items[i]);}

            break;
        case 'c':
            var newItem = window.prompt("Enter the name of new item:");
            items.push(newItem);
            alert("Done");
            break;
        case 'u':
            let updateItemNum = Number(window.prompt("Enter the position of item you want to update:"));
            let updateItem = window.prompt("Enter the item you want to update:");
            items[updateItemNum] = updateItem;
            alert("Done");
            break;
        case 'd':
            let delItemNum = Number(window.prompt("Enter the position of item you want to delete:"));
            items.splice(delItemNum,1);
            alert("Done");
            break;
        default:
            alert("This command is not supported.")
    }
}
// 5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by
// commas, calculate the sum of the numbers and show it to users

function sumSequence(){
    function arraySum(array){
        let a = 0;
        for (var i = 0; i < array.length; i++){a += array[i];}
        return a;
    }
    let sequence = window.prompt("Enter a sequence of number, split by comma: ");
    let array = sequence.split(',').map(Number);
    alert(`Sum of your array is: ${arraySum(array)}`);
}

//7. Create an array containing at least 5 numbers, then ask users enter a number, perform a
// search to look for the number in the array, if the number is found, tell user that with the
// index of it in the array, if not, also tell them so

function searchNumber(){
    const array = [1,2,3,4,5,6,7,8,9];
    let number = Number(window.prompt("Enter a number: "));
    let answer = array.indexOf(number);
    if (answer == -1){alert(`${number} is NOT found in the array.`);}
    else{alert(`${number} is FOUND in the array at index ${answer}`);}
}

//8. You are a shepherd who owns a flock of sheep
//Each of your sheep of your flock has varied size
function shepherd(){
    function add50(num){return (num + 50);}
    function sumArray(arr){
        let a = 0;
        for(var i = 0;i<arr.length;i++){a += arr[i];}
        return a;
    }
    const defaultValue = 8;
    let sheep = [8,10,56,23,77,23,11];
    console.clear();
    for (i = 0; i < 5; i++){
        if (i==0){console.log("Hello, day la dan cuu cua bo may: ")}
        if (i > 0){console.log(`\nMonth ${i} \nSau 1 thang thi dan cuu lon len`)}
        console.log(`Dan cuu be con: \n ${sheep.join(' ')}`)
        // console.log(...sheep);
        let max = Math.max(...sheep);
        let indexMax = sheep.indexOf(max);
        console.log(`Biggest cuu has size ${max}, let shave it.`);
        sheep[indexMax] = defaultValue;
        console.log(`After shaving, dan cuu is:\n${sheep.join(' ')}`)
        // console.log(...sheep);
        sheep = sheep.map(add50);
    }

    console.log(`\nSang thang moi, chan lam viec, dan cuu: \n ${sheep.join(' ')}`)
    console.log(`\nMy flock has size in total: ${(sumArray(sheep))}`);
    console.log(`I would get ${sumArray(sheep)} *2$ = ${sumArray(sheep) * 2}$`)
}
// 10. (Optional) Write a script asking users to enter a sequence of names, separated by
// commas (,), Create a new array containing the names, each surrounded with <>. If you
// need hints, find them at the end of this homework

function sequenceName(){
    function surroundedString(str){return `<${str}>`;}
    let array = (window.prompt("Enter a sequence of name, separated by commas: ")).split(',');
    alert( array.map(surroundedString));
}

function oddSequenceNumber(){
    let array = (window.prompt("Enter a sequence of name, separated by commas: ")).split(',');
    let newArray = [];
    for (var i =0;i<array.length;i++){
        if (Number(array[i]) % 2 == 1){
            newArray.push(Number(array[i]));
        }
    }
    alert(`${array.join(',')} => ${newArray.join(',')}`);
}