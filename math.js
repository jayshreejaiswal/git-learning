//this modulr is going to contain add ,mul,sub,div function
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result
 */
 function add(a,b){
    return a+b;
 }
 
 /**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result
 */
function divide(a,b){
    return a/b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result
 */
function multiply(a,b){
    return a*b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns result
 */
 function subtract(a,b){
    return a-b;
 }
function fun(){
    return"hello";
}

function arithmetic(a,b)
{
    print(a+b);
    print(a-b);
    print(a*b);
    print(a/b);
}

// code by himanshu.

/**pythagoras theorem function
 * This theorem will only work for right angle triangles.
 * @param {number} base 
 * @param {number} height 
 * @returns number(hypotenuse)
 */


function pythagorasTheoremFunction(base, height){
    return Math.sqrt((base*base)+(height*height));
}