const frd = ["jubu","liam","mustaq","liam","mustaq"];
function duplicate(ary){
    const unique=[];
    for (const i of ary){
        if(unique.includes(i)===false){
            unique.push(i);
        }
    }return unique;
}
const liam = duplicate(frd);
console.log(liam);





