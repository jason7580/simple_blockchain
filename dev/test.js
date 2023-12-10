const Blockchain = require("./Blockchain");

const chain = new Blockchain();

console.log(chain);

// const previousHash = "8364a1bf3f24cfa460117bc230aaaed231854ac53eac9c41a85af5ae24432a1b";

// const currentBlockData = [
//     {
//         amount: 20,
//         sender: "Kenneth",
//         recipient: "Jen"

//     },
//     {
//         amount: 5345354,
//         sender: "Jason",
//         recipient: "Kenneth"

//     }
    
// ];

// const nonce = 2000;

// console.log(chain.hashBlock(previousHash, currentBlockData, 94335));


// console.log(chain.proofOfWork(previousHash, currentBlockData));

// chain.createNewBlock(124, "fdghjkluikhjcnfghj", "fgyoipghfjkiugy");

// chain.createNewTransaction(20, "Kenneth", "Jen");

// chain.createNewBlock(124, "fgyoipghfjkiugy", "dsfsghjkhfsdg");

// chain.createNewTransaction(20, "Kenneth", "Jen");
// chain.createNewTransaction(5345354, "Jason", "Kenneth");
// chain.createNewTransaction(75275325, "Dash", "Kenneth");


// chain.createNewBlock(124, "dsfsghjkhfsdg", "hjkkutrhng");


// console.log(chain);