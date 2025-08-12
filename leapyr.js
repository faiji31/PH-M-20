function isLeapyr(yrs){
    if (yrs %4===0){
        console.log("Leap Year!");
    }
    else{
        console.log("Not LeapYear!");
    }
    return yrs
}
const yr = isLeapyr(2021);
console.log(yr);
const yr1 = isLeapyr(2020);
console.log(yr1);