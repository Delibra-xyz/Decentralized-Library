import {Web3Storage} from "web3.storage";

const token = pprocess.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN

const client = new Web3Storage({token})

export async function storeFiles(files, name){
    const cid = await client.put(files, {
        name: name,
        maxRetries: 3,
        wrapWithDirectory:false
    })
    return cid;
}