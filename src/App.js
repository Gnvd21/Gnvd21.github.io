/*import './App.css';
import Meh from "./pages/Meh";

function App() {

  return (
    <div className="App">
      <Meh/>
    </div>
    
  );
}

export default App;
*/

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
            <h1>Sales</h1>
            {sales.map((sale) =>(
                <div key = {sale.id}>
                    <h2>
                        Date of sale {sale.Date}
                    </h2>
                    <p>Paid? {sale.Paid}</p>
                    <h3>Strain {sale.Strain}</h3>
                </div>
            ))}
        </div>
    )

};

export default Meh;