// 18 - masala
// function countUpperLowerCase(str) {
//     let upperCaseCount = 0;
//     let lowerCaseCount = 0;

//     for (let char of str) {
//         if (char >= 'A' && char <= 'Z') {
//             upperCaseCount++;
//         } else if (char >= 'a' && char <= 'z') {
//             lowerCaseCount++;
//         }
//     }

//     return { upperCaseCount, lowerCaseCount };
// }
// let text = "Hello World!"
// let counts = countUpperLowerCase(text);
// console.log(`Katta harflar soni: ${counts.upperCaseCount}`);
// console.log(`Kichik harflar soni: ${counts.lowerCaseCount}`);




// 19 - masala
let evenIndexSum = 0
let oddIndexSum = 0
function evenOddIndexSums(arr) {
    arr.forEach((item, index)=> {
        if (index % 2 == 0) {
            evenIndexSum += item
        }else{
            oddIndexSum += item
        }
    });
    console.log(evenIndexSum);
    console.log(oddIndexSum);
}
// evenOddIndexSums([1, 2, 3, 4, 5, 6]);



// 20 - masala
let result = []
function rotateMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i]);
        let arr =[]
        for (let g = 0; g < matrix.length; g++) {
           arr.push(matrix[g][i])
        }
       result.push(arr)
    }
   console.log(result.reverse());
}
// rotateMatrix([
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]);
  



// 21 - masala
function removeSpaces(str) {
    let res = str.split("").join("")
    console.log(res.replace(/ +/g, ""));
   
}
// removeSpaces("Hello World! How are you?")



// 22 - masala
function areAnagram(str1,str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let sortStr1 = str1.split('').sort().join('');
    let sortStr2 = str2.split('').sort().join('');

    if (sortStr1 == sortStr2) {
        console.log(true);
    }else{
        console.log(false);
    }
}
// areAnagram("listen", "silent");



// 23 - masala

// const highest = arr => (arr || []).reduce( ( acc, el ) => {
//     acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1
//     acc.max = acc.max ? acc.max < acc.k[el] ? el : acc.max : el
//     return acc  
//   }, { k:{} }).max
  
//   const test = [1, 3, 2, 1, 4, 1, 3, 1, 5, 1]
//   console.log(highest(test))




// 24 - masala
let count = 0
function sumOfDigits(str) {
    str.split("").forEach((item) => {
        if (item >= 0 || item <= 9) {
            console.log(+item);
           count += (+item)
        }
    })
    console.log(count);
}
// sumOfDigits("abc123def45"); // 15 (1+2+3+4+5) 




// 25 - masala
function letterFrequency(str) {
let res = str.split("").reduce((a, c) => (a[c] = ++a[c] || 1) && a, {})  
    console.log(res);
}
// letterFrequency("hello world"); 




