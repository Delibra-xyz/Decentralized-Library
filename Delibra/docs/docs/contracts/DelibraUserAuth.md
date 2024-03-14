﻿## DelibraUserAuth


### UserType

```solidity
enum UserType {
  Reader,
  Author,
  Admin
}
```
### User

```solidity
struct User {
  string userName;
  bool onboarded;
  enum DelibraUserAuth.UserType userType;
  string profileUrl;
}
```
### users

```solidity
mapping(address => struct DelibraUserAuth.User) users
```

### UsersAddress

```solidity
address[] UsersAddress
```

### UserCreated

```solidity
event UserCreated(address _addr, uint256 timestamp)
```

### UserUpdated

```solidity
event UserUpdated(address _addr, uint256 timestamp)
```

### getUserInfo

```solidity
function getUserInfo() public view returns (struct DelibraUserAuth.User)
```







### isDelibraUser

```solidity
function isDelibraUser(address _addr) public view returns (bool)
```







### setUserInfo

```solidity
function setUserInfo(string _username, bool _onboarded, enum DelibraUserAuth.UserType _usertype, string _profileUrl) public returns (bool)
```







