function reverseObj(){
    function reverseObject(obj){
        let values = [];
        let newObj = {};
        keys = Object.keys(obj);
        for (i in keys){
            values.push(obj[keys[i]]);
            newObj[values[i]] = keys[i];
        };
        return newObj;
    }
    console.clear();
    let obj = {'Nguyen Minh Huy': 'name',
                'MindX C4E': 'class'};
    let newObj = reverseObject(obj)
    console.log(obj);
    console.log(newObj);
} //pass

function keysAndValues(){
    function keysAndValues(obj){
        let values = [];
        let arr = [];
        keys = Object.keys(obj);
        for (i in keys){
            values.push(obj[keys[i]]);
        }
        arr = keys.concat(values);
        return arr;
    }
    newArr = keysAndValues({ a: 1, b: 2, c: 3 });
    console.log(newArr);
}//pass

function getFrequencies(arr){
    let obj = {};
    for (i in arr){
        if (!obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]] += 1;
        }
    }
    return obj;
}//pass

function mapLetters(str){
    let obj = {};
    for (i in str){
        if (!obj.hasOwnProperty(str[i])){
            obj[str[i]] = [Number(i)];
        }
        else{
            obj[str[i]].push(Number(i));
        }
    }
    return obj;
}//pass


function khaBanh(str){
    let arr = [];
    let c = true;
    for (var i = 0; i < str.length; i++){
        if (str[i] === ' '){
            arr.push(str[i])
        }
        else if (c == true){
            arr.push(str[i].toUpperCase());
            c = false
        }
        else if (c == false){
            arr.push(str[i].toLowerCase());
            c = true
        }
    }
    return arr.join('');
}//pass

function censoredString(str){
    let arr = [];
    lowerStr = str.toLowerCase()
    for (var i = 0; i < lowerStr.length; i++){
        if ( lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u'){
            arr.push('*');
        }
        else{arr.push(str[i])}
    }
    return arr.join('');
}
//pass
console.log(censoredString("hello world"))