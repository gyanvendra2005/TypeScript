// let gretings: string ="hello gyani"
function isLegal(user) {
    if (user.Age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var x = isLegal({
    FirstName: "Gyanvendra",
    LastName: "Singh",
    Age: 2,
});
console.log(x);
