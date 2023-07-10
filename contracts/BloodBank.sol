// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract BloodBank {

    address public admin;
    uint private uniqueID ;
    uint private tID ;
     constructor () public {

        admin=msg.sender;
        uniqueID=100001;
        tID=10001;
    }
   
    struct transact{
        uint tId;
        uint uniqueID;
        address senderAddress;
        string recieverName;
        string recieverAdhar;
        uint amount;
        string bType;
        bool tType;

    }
    struct bloodBank{
        uint uid;
        address bankAdd;
        string name;
        string contact;
        uint a_pos;
        uint a_neg;
        uint b_pos;
        uint b_neg;
        uint o_pos;
        uint o_neg;
        uint ab_pos;
        uint ab_neg;
    }
    // This is a mapping of accounts and the products owned by the account (stroes unique ID)
    mapping (uint => uint[]) public  tList; //uid-> list of tid
    mapping (string => uint) public  bankName; //uid-> list of tid
    mapping (uint => transact) public transactionList;// tid-> transaction
    mapping ( uint => bloodBank ) public bankData; // uid->blood bank data
    string[] public bank_name;
    // // array for user's owned product names
    // bytes32[] public OwnedNames;
    
   
    
    function addBank(string memory name,string memory  contact,  uint a_pos,
        uint a_neg,uint b_pos,uint b_neg,uint o_pos, uint o_neg,
        uint ab_pos,uint ab_neg) public returns(uint){
             uniqueID=uniqueID+1;
            
            bloodBank memory b=bloodBank(uniqueID,msg.sender,name,contact
             ,a_pos,a_neg,b_pos,b_neg,o_pos,o_neg,ab_pos,ab_neg
             );
            // BloodBank b = BloodBank(uniqueID, name, contact, a_pos, a_neg, b_pos, b_neg, o_pos, o_neg, ab_pos, ab_neg);
            bankName[name]=uniqueID;
             bankData[uniqueID]=b;
             bank_name.push(name);
             tList[uniqueID]=new uint[](0);
             return uniqueID;
        
        }
    function addTransaction(uint uniqueId,string memory recieverName,string memory recieverAdhar,
        uint amount,string memory bType,bool tType) public returns(uint){
            tID=tID+1;
            transact memory t=transact(tID,uniqueId,msg.sender,recieverName,recieverAdhar,amount,bType,tType);
            tList[uniqueID].push(tID);
            return tID;
        
        }
    function changeData(uint uniqueId,bool tType,string memory bType,uint amount) public returns(bool){
        if(msg.sender == bankData[uniqueId].bankAdd){
         if(tType==true){ // recieving blood
            // string var s=bType;
            if( keccak256(abi.encodePacked('a_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].a_pos=bankData[uniqueId].a_pos+amount;
            if(keccak256(abi.encodePacked('a_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].a_neg=bankData[uniqueId].a_neg+amount;
            if(keccak256(abi.encodePacked('b_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].b_pos=bankData[uniqueId].b_pos+amount;
            if(keccak256(abi.encodePacked('b_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].b_neg=bankData[uniqueId].b_neg+amount;
            if(keccak256(abi.encodePacked('o_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].o_pos=bankData[uniqueId].o_pos+amount;
            if(keccak256(abi.encodePacked('o_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].o_neg=bankData[uniqueId].o_neg+amount;
            if(keccak256(abi.encodePacked('ab_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].ab_pos=bankData[uniqueId].ab_pos+amount;
            if(keccak256(abi.encodePacked('ab_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueId].ab_neg=bankData[uniqueId].ab_neg+amount;
         }
         else{
             if( keccak256(abi.encodePacked('a_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].a_pos=bankData[uniqueID].a_pos-amount;
            if(keccak256(abi.encodePacked('a_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].a_neg=bankData[uniqueID].a_neg-amount;
            if(keccak256(abi.encodePacked('b_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].b_pos=bankData[uniqueID].b_pos-amount;
            if(keccak256(abi.encodePacked('b_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].b_neg=bankData[uniqueID].b_neg-amount;
            if(keccak256(abi.encodePacked('o_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].o_pos=bankData[uniqueID].o_pos-amount;
            if(keccak256(abi.encodePacked('o_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].o_neg=bankData[uniqueID].o_neg-amount;
            if(keccak256(abi.encodePacked('ab_pos')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].ab_pos=bankData[uniqueID].ab_pos-amount;
            if(keccak256(abi.encodePacked('ab_neg')) == keccak256(abi.encodePacked(bType)))
            bankData[uniqueID].ab_neg=bankData[uniqueID].ab_neg-amount;
         }
         return true;
         }
         else{
             return false;
         }
    }
    function check() public view returns (bool){
        if(msg.sender==admin){
            return true;
        }
        else{
            return false;
        }

    }
    

    
}
