import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const fmt = (x) => stdlib.formatCurrency(x, 4);

const accBob = await stdlib.newTestAccount(startingBalance);
const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(6000));
  
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

//const choiceArray = ["I'm not here", "I'm still here"]

const getBalance = async (who) => stdlib.formatCurrency((await stdlib.balanceOf(who)));

console.log(`Alice's account balance before is: ${await getBalance(accAlice)}`);
console.log(`Bob's account balance before is: ${await getBalance(accBob)}`);

const Shared = (who) => ({
  // showTime: (t) => {
  //   console.log(`Time is ${t}`)
  // },
  seeChoice: async (c) => {
    if (c) {
      console.log('Alice is still here!')
    }
    else console.log('Alice is not here!')
  },
  finalOutcome: async (final) => {
    if (final == 1) {
      console.log("Time's UP!");
      console.log("I'm here");
    }
    else {
      console.log("Time's UP!");
      console.log("I'm not here");
    }
  },
  balanceAlice: async () => {
    console.log(`Alice's token balance is ${await getBalance(accAlice)}`);
    console.log(`Bob's token balance is ${await getBalance(accBob)}`);
},
  setTimeout: () => {
    console.log(`${who} observed a timeout`);
  }
});

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Shared(),
    inherit: stdlib.parseCurrency(5000),
    getPrice: async () => {
    const isPrice = await ask(`How much do you want to put in the vault?`, stdlib.parseCurrency)
    return isPrice;
  },
  getAttendance: async () => {
    const isResponse = await ask(`Alice are you still there yes or no?`, yesno);
    return isResponse;
  },
  setDeadline: async () => {
    const isCount = await ask(`Alice enter the countdown limit: `, (i => i));
    return isCount;
  }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Shared(),
    acceptTerms: async() => {
      const terms = await ask(`Bob do you accept the terms of The Vault yes or no?`, yesno);
      if (terms) {
        return terms;
      }
      else {
        process.exit();
      }
    },
    balanceBob: async (x) => {
      if (x) {
        console.log(`Your token balance is ${fmt(await stdlib.balanceOf(accAlice))}`)
      }
      else {
        console.log(`Your current balance is ${fmt(await stdlib.balanceOf(accBob))}`)
      }
    // console.log(`Alice's token balance is ${await getBalance(accAlice)}`);
    // console.log(`Bob's token balance is ${await getBalance(accBob)}`);
},
  }),
]);

// console.log(`Alice's account balance after is: ${await getBalance(accAlice)}`);
// console.log(`Bob's account balance after is: ${await getBalance(accBob)}`);

// console.log('Goodbye, Alice and Bob!');

const startProgram = async () => {
  const isDeployer = await ask(
    `Are you the Deployer?`, yesno
  )

  let isAlice = null; 
  const who =  isDeployer? 'Alice' : 'Bob';
  console.log(`Starting as ${who}`);

 
  let ctc = null; 
  
  

  if(isDeployer){ //if deployer
    
    const getBalance = async () => fmt(await stdlib.balanceOf(acc));
    const before = await getBalance()
    console.log('Your current balance is: ' + before)
    ctc =  acc.contract(backend); 
    backend.Alice(ctc, {
      ...Alice,
    }); 

    const info = JSON.stringify(await ctc.getInfo()) 
    console.log('Contract Info: ', info);
  }
  else{
    
    const getBalance = async () => fmt(await stdlib.balanceOf(acc));
    const before = await getBalance()
    console.log('Your current balance is: ' + before)
    console.log(`Your address is ${acc.getAddress()}`)
    const info = await ask(
      `Please paste the contract address here:`, 
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    isAlice ? backend.Bob(ctc, Bob) : backend.Bob(ctc, Bob)
    console.log("Successfully attached");

  }
}
await startProgram();