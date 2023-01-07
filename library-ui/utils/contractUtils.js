import { ethers } from "ethers";
import abi from "../contracts/User/abi.json"
import contractAddress from "../contracts/User/contract_address.json"
import marketContractAddress from "../contracts/Marketplace/contract_address.json"
import marketAbi from "../contracts/Marketplace/abi.json"

const getProvider = async (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    await provider.send("eth_requestAccounts", []);
    return provider;
}

const getSigner = async (ethereum) => {
    const provider = await getProvider(ethereum)
    return provider.getSigner()
}

export const getContract = async (ethereum) => {
    const signer = await getSigner(ethereum)
    const contract = new ethers.Contract(contractAddress.contractAddress, abi.abi, signer)
    return contract;
}

export const getMarketPlaceContract = async (ethereum) => {
    const signer = await getSigner(ethereum)
    const contract = new ethers.Contract(marketContractAddress.contractAddress, marketAbi.abi, signer)
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

export const listBook = async (ethereum, uri, price, quantity, fee) => {
    try {
        const contract = await getMarketPlaceContract(ethereum)
        const txnResult = contract.listNft(uri, price,quantity, {value: ethers.utils.parseEther(fee)})
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

export const getNftOwners = async (ethereum, tokenId) => {
    try {
        const contract = await getMarketPlaceContract(ethereum)
        const txnResult = contract.getNftOwners(tokenId)
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

export const buyBook = async (ethereum, amount,tokenId) => {
    try {
        const contract = await getMarketPlaceContract(ethereum)
        const txnResult = contract.buyNft(tokenId, {value: ethers.utils.parseEther(amount)})
        return txnResult;
    } catch(error) {
        console.log("Error: ", error)
    }
}

