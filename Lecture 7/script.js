function sumAndDifference(a, b){
    const sum = a + b;
    const difference = a - b;
    return {sum , difference};
}

const result= sumAndDifference(10 , 5);
console.log("sum",result.sum);
console.log("sum",result.difference);