function odd(num){
    const odds=[];
    for (const i of num){
        if (i%2===1){
            // console.log(i);
            odds.push(i);
        }
    // }console.log(odds);
    let sum=0;
    for (const j of odds){
        sum+=j;
    }console.log(sum);
} 
}
const num =[32,11,23,134,22,12,67,54];
const avg =odd(num);
console.log(avg); 