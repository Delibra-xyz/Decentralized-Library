
#  📚 OPEN BOOKS
A Decentralized Library  running on Polygon blockchain. Any User Can sign up as an Author or Reader to buy , sell and borrow a book

### 🏚 Structure
The directory is made up of two open source smart contracts written in solidity in the [contracts](https://github.com/Khadeeejah/Decentralized-Library/tree/main/hardhat-tutorial/contracts) folder, OpenBooks is currently deployed on the Polygon Mumbai testnet, you can find their addresses in [deployed_addresses.txt](). 
The [Ui-library](https://github.com/Khadeeejah/Decentralized-Library/tree/main/library-ui) directory holds the frontend of the dapp built using Reactjs.

##  🎉 Features
- ### Landing Page
  The Landing shows all your books with different sections for free and paid books. It also gives you buttons to withdraw proceeds made from selling books and connecting your wallet

- ### Author's Page
  For users coming in as authors, to sell, and also buy books
 
- ### Reader's page
  For users coming in to buy, borrow , and re-sell books
  
- ### Book page
  This page gives you the option to delete, list, delist, buy or change the price of a book. You'll see different options depending on if you are the book's owner and if it is listed.
 

## 🔖 How to Mint
If you have a book for sale and hold the rights to the book, you can elect to sell it. To do so, you must first create a book. When minting a book, you'll submit the title, cover image, and content of the book. They'll all be uploaded to Filecoin (for the time being), and you'll be instructed to mint by signing a mint transaction. This generates an ER721 token that represents the book that your address owns.


## 💰 How to Sell
After minting you'll see the wallet in your dashboard. Click on it for more information. You'll be able to list it for sale after entering a price. When a purchase is successfully made on your book, the balance on your dashboard is immediately updated and this can be withdrawn at anytime. When you withdraw, you empty your balance.

## 💳 How to Buy
To buy a user need to have a matic token for gas fee, 



## 📟 Technologies
- Filecoin: The token metatdata of the assets files are currently stored using ipfs.
- ERC721: The OpenBooks smart contract implements the ERC721 standard.
- Reactjs, Solidity, Chakra-ui ethersjs


## 🛠 Development



