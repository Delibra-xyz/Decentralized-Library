const { expect } = require("chai");
// const { describe } = require("mocha");

describe("User", function() {
    let UserAuth;
    let userAuth;

    let username;
    let onboarded;
    let userType;
    let profileUrl;
    
    beforeEach(async function() {
        UserAuth = await ethers.getContractFactory("DelibraUserAuth");
        userAuth = await UserAuth.deploy();

        username = "Delibra"
        onboarded = true
        userType = 0    // Reader
        profileUrl = ""

        await userAuth.setUserInfo(username, onboarded, userType, profileUrl)
    })

    it("should set and get correct user info", async function() {
        
        let userInfo = await userAuth.getUserInfo();
        
        expect(userInfo.userName).to.equal(username)
        expect(userInfo.onboarded).to.equal(onboarded)
        expect(userInfo.userType).to.equal(0)
        expect(userInfo.profileUrl).to.equal(profileUrl)

    })

    it("should only set user once", async function() {
        // updating a user info should increase the user count.
        
        let oldUsercount = await userAuth.userCount()

        let newUsername = "Delibra V2"
        let onboarded = true
        let userType = 1    // Author
        let profileUrl = ""
        userAuth.setUserInfo(newUsername, onboarded, userType, profileUrl)

        let newUsercount = await userAuth.userCount()
        expect(Number(oldUsercount)).to.equal(Number(newUsercount))
    })

})