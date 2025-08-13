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



const num =[1,2,2,3,2,1,4,5,4];
 function dup(array){
    unq=[];
    for(const j of array){
        if (unq.includes(j)===false){
            unq.push(j);
        }

    }return unq
 }

const siam = dup(num);
console.log(siam);



