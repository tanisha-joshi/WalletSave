import { ethers, Wallet } from 'ethers';
import { CHAINS_CONFIG, goerli,Pegasus } from './Chains';
import { contractAddress,abi } from '../constants';



export async function sendToken(
  amount,
  to,
  privateKey,
) {

  console.log("sending to.... ",to)
 try {
  const chain = CHAINS_CONFIG[Pegasus.chainId];


  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);

  // Create a wallet instance from the sender's private key
  const wallet = new ethers.Wallet(privateKey, provider);

  // Construct the transaction object
  const tx = {
    to,
    value: ethers.parseEther(amount.toString()),
  };

  // Sign the transaction with the sender's wallet
  const transaction = await wallet.sendTransaction(tx);

  // Wait for the transaction to be mined
  const receipt = await transaction.wait();

  return {transaction, receipt};
 } catch (error) {
   console.log(error)
   return error
 }
}



export async function startSave(privateKey){
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  const tx = {
    gasPrice: 0,
  };

const res1 = await contract.createChildContract(tx)
console.log("res1",res1)
return res1
}


export async function getMyAddress(privateKey){
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);

const res2 = await contract.getMySavingContract()
console.log("res2",res2)
 return res2

}


export async function deposit(privateKey,amount){
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);



  try {
    // Convert the amount to a BigNumber and provide the value parameter
    const valueInWei = ethers.parseEther(amount.toString());

    // Send the transaction with the value parameter
    const tx = await contract.depositToMyAccount({ value: valueInWei ,gasPrice:0});

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    return receipt
    console.log('Transaction Receipt:', receipt);
  } catch (error) {
    return error
    console.error('Error depositing to account:', error);
  }



}

export async function withdraw(privateKey, amount) {
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  
  try {
    // Convert the amount to a BigNumber and provide the value parameter
    const amountInWei = ethers.parseUnits(amount.toString(), 18);

    // Send the transaction with the value parameter
    const tx = await contract.withdrawFromMyAccount(amountInWei,{
      gasPrice:0
    });

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    console.log('Transaction Receipt:', receipt);
    return receipt
  } catch (error) {
    console.error('Error withdrawing from account:', error);
    return error
  }
}


export async function getMyBalance(privateKey){
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

 

  const contract = new ethers.Contract(contractAddress, abi, wallet);



const res2 = await contract.getMyBalance()

console.log("res2",res2)
return res2

}


export async function getWalletBalance(privateKey){
  const chain = CHAINS_CONFIG[Pegasus.chainId];

  // Create a provider using the Infura RPC URL for Goerli
  const provider = new ethers.JsonRpcProvider(chain.rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

 




const res2 = await wallet.getBalance()

console.log("wallet Balance",res2)
return res2

}
