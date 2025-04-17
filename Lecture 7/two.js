function multiplyAndDivision(a , b){
    const product =  a*b;
    const quotient = b !==0 ? a/b : "Division by zero not allowed"
    return {product , quotient};
}
const result = multiplyAndDivision(10,20);
console.log("pro",result.product);
console.log("div",result.quotient);



