import { ethers } from "ethers";
import abi from "../contracts/User/abi.json"
import contractAddress from "../contracts/User/contract_address.json"

const getProvider = async (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    await provider.send("eth_requestAccounts", []);
    return provider;
}

const getSigner = async (ethereum) => {
    const provider = await getProvider(ethereum)
    return provider.getSigner()
}

const getContract = async (ethereum) => {
    const signer = await getSigner(ethereum)
    const contract = new ethers.Contract(contractAddress.contractAddress, abi, signer)
    return contract;
}

export const isDelibraUser = async (ethereum, account) => {
    try {
        const contract = await getContract(ethereum)
        const txnResult = contract.isDelibraUser(account)
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

export const getUser = async (ethereum) => {
    try {
        const contract = await getContract(ethereum)
        const txnResult = contract.getUserInfo()
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

export const setUser = async (ethereum, username, onboarded, type, url) => {
    try {
        const contract = await getContract(ethereum)
        const txnResult = contract.setUserInfo(username, onboarded, type, url)
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

