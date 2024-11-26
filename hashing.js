// const crypto= require('crypto');
// const { isNullOrUndefined } = require('util');
// const input='100xdevs';
// const hash= crypto.createHash('sha256').update(input).digest('hex');
// console.log(hash);




// const crypto=require('crypto');

// function findhash(prefix){
//     let input=1;
//     while(true){
//         let inputstr='100xdevs'+input.toString();
//         let hash=crypto.createHash('sha256').update(inputstr).digest('hex');
//         if(hash.startsWith(prefix)){
//             return { input:inputstr,hash:hash};
//         }
//         input++;
//     }
// }

// const result= findhash('00000');
// console.log(`input: ${result.input}`);
// console.log(`hash: ${result.hash}`);



                           // prefix+nonce - sha256 --> eb12n3 4n4 whatever


const crypto=require('crypto');

function findhash(prefix){
    let input=0;
    while(true){
        let inputstr='1Ram => Ankit | Rs 10'+input.toString();
        let hash=crypto.createHash('sha256').update(inputstr).digest('hex');
        if(hash.startsWith(prefix)){
            return { input:inputstr,hash:hash};
        }
        input++;
    }
}
const result= findhash('00000');
console.log(`input: ${result.input}`);
console.log(`hash: ${result.hash}`);

