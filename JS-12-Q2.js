// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function outerFunction(a,b) {
    function innerFuction(c,d) {
        return c*d
    }
    return innerFuction(a,b)
}


console.log(outerFunction(2,5));
