// // SPDX-License-Identifier: MIT
// // pragma solidity ^0.8.4;
// // import "@openzeppelin/contracts@4.5.0/token/ERC20/ERC20.sol";
// // import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
// // import "@openzeppelin/contracts@4.5.0/token/ERC20/extensions/ERC20Burnable.sol";
// // import "@openzeppelin/contracts@4.5.0/security/Pausable.sol";
// // import "@openzeppelin/contracts@4.5.0/access/Ownable.sol";

//   contract Abubakkar is ERC20, ERC20Burnable, Pausable, Ownable {    
//        uint256 public standardEthers;
//        IERC20 public TokenBuy;
//         using SafeMath for uint256;
//        uint256 public valueNeeded;
//        uint256 public defaultValue;
//     // uint256 public endTime;
//     constructor(string memory name, string memory token, uint256  rate) ERC20(name, token) {
//       standardEthers=rate;
//     //   totalQuantiity=_totalQuantiity;  
//     }
//       function pause() public onlyOwner {
//         _pause();
//     }
//     function unpause() public onlyOwner {
//         _unpause();
//     }
//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }
//     function _beforeTokenTransfer(address from, address to, uint256 amount)
//         internal
//         whenNotPaused
//         override
//     {
//         super._beforeTokenTransfer(from, to, amount);
//     }
//     function buyToken(uint value) public payable returns (bool){
//        uint256 neededvalue = value * standardEthers;
//        require(neededvalue<=msg.value,"Insufficient balance to buy this token");
//        _transfer(address(this),msg.sender,value*1e18);
//        return true;
//     }
//       function sellToken(uint amount) public returns(bool){
//       uint256 priceRequired= amount* standardEthers;
//       require(priceRequired<=address(this).balance, "contract dont have enough money yet");
//        _transfer(msg.sender, address(this), amount*1e18); // get tokens from user
//       payable(msg.sender).transfer(priceRequired); // return them the ether amount of tokens.
//     }
//     function withdraw() public onlyOwner {
//         payable(msg.sender).transfer(address(this).balance);
//     }
// }
// // 1000000000000000
