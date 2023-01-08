export const getNftsOwnedByAccount = (account, amount) => {
    const token = process.env.NEXT_PUBLIC_NFT_PORT_KEY
    const options = {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            authorization: token
        }
    };

    return fetch(`https://api.nftport.xyz/v0/accounts/${account}?chain=polygon&page_size=${amount}&include=metadata`, options)
      .then(response => response.json())
}