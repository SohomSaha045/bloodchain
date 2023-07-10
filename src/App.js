// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login";
import Register from "./Pages/register";
import DashboardAdmin from "./Pages/dashboard-admin";
import Web3 from "web3";
import { useState, useEffect } from "react";
import BloodBank from "./build/BloodBank.json";
import { DemoContext } from "./contexts/democontext";
// import { contractsContext } from "./contexts/contractsContext";

 function App() {
  const [account, setAccount] = useState();
  // const [web3,setWeb3]=useState();
  // const [contactList, setContactList] = useState();
  const [contracts, setContacts] = useState([]);

  useEffect(() => {
    async function load() {
      var acc = await window.ethereum.send("eth_requestAccounts");
      console.log(acc)
      
      var web3 = new Web3(window.ethereum);
      // console.log(account[0]);
      // let contractAddress=0xeB642012C1a168B2eaF6837cbe85056E45C757eC;

      // var ABI =await $.getJSON("../build/contracts/vote.json");
      // const contract=new web3.eth.Contract(ABI.abi,contractAddress);
      // Use web3 to get the user's accounts.
      var acco = await web3.eth.getAccounts();
      console.log(acco)
      setAccount(acco);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = BloodBank.networks[networkId];
      var cont = new web3.eth.Contract(
        BloodBank.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContacts(cont);
      console.log(cont);
    }

    load();
  }, []);
  
  // <Router>
  //   </Router>
  return (
    // <contractsContext.Provider value={{ contracts, account }}>
    <div className="App">
    <DemoContext.Provider value={{contracts, setContacts,account,setAccount}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<DashboardAdmin />}></Route>
      </Routes>
      </Router>
      </DemoContext.Provider>
      
    </div>
    // </contractsContext.Provider>
  );
}

export default App;
