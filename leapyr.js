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



function isLeap(yr){
    if (yr%100!==0 && yr%4===0){
        return true;
    }
    else if (yr%400===0 && yr%100===0){
        return true;
    }
    else{
        return false;
    }
}
const liam = isLeap(2024);
console.log(liam);
const siam = isLeap(2043);
console.log(siam);
const jubu = isLeap(3031);
console.log(jubu)
