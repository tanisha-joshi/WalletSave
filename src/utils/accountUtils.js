import { Wallet,ethers } from 'ethers';
import { CHAINS_CONFIG, goerli,Pegasus } from './Chains';


export async function generateAccount(seedPhrase= "", index = 0) {
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  let wallet;

  // If the seed phrase is not provided, generate a random mnemonic using a CSPRNG
  if (seedPhrase === "") {
    seedPhrase = Wallet.createRandom().mnemonic.phrase;
  }

  
  // If the seed phrase does not contain spaces, it is likely a mnemonic
  wallet = (seedPhrase.includes(" ")) ? Wallet.fromPhrase(seedPhrase) : 
  new Wallet(seedPhrase);

  const { address} = wallet;
  const bal = await  provider.getBalance(address)
  const etherValue = parseFloat(bal) / 1e18;
  const roundedValue = parseFloat(etherValue.toPrecision(2));
  const account = { address, privateKey: wallet.privateKey, balance: roundedValue };
  
  // If the seedphrase does not include spaces then it's actually a private key, so return a blank string.
  return { account, seedPhrase: seedPhrase.includes(" ")? seedPhrase : "" };
}

export function shortenAddress(str, numChars=4) {
  return `${str.substring(0, numChars)}...${str.substring(str.length - numChars)}`;
}


export function toFixedIfNecessary( value, decimalPlaces = 2 ){
  return +parseFloat(value).toFixed( decimalPlaces );
}