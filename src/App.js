import './App.css';
import Home from "./pages/home";

function App() {

  return (
    <div className="App">
      <Home/>
    </div>
    
  );
}

export default App;

/*
import React, {useState, useEffect} from "react";
import firebase from "./firebase";

//import {firestore} from "../firebase";
//import {querySnapshot, collection} from "@firebase/firestore"; 

function Meh(){
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Sales"); //collection(firestore, "Sales");
        
    useEffect(() => {
      function getSales(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            items.push(doc.data());
          });        
          setSales(items);
          //console.log(sales);
          setLoading(false);
        });
      };

      getSales(); 
      //eslint-disable-next-line react-hooks/exhaustive-deps      
    }, []);

    if (loading){
       return (
        <h1>
            Loading
       </h1> 
       )
    };

    return(
        <div>
            <h1 style = {{textAlign: "center"}}>Meh sales tracker</h1>
            {sales.map((sale) =>(
                <div style={{width:250 + "px"}} key = {sale.id}>
                    <h3>
                        Date of sale {sale.Date}
                    </h3>
                    <h3>Paid? {sale.Paid}</h3>
                    <h3>Strain: {sale.Strain}</h3>
                    <hr></hr>
                </div>
            ))}
        </div>
        
    )

};

export default Meh;*/