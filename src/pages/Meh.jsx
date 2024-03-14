import React, {useState, useEffect} from "react";
import firebase from "../firebase";

//import {firestore} from "../firebase";
//import {querySnapshot, collection} from "@firebase/firestore"; 

function Meh(){
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Sales");
        
    useEffect(() => {
      function getSales(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });        
          setSales(items);
          setLoading(false);
        });
      };

      getSales();     
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer>
            To-Do:
                <h5>
                    Realtime stocks update<br></br>
                    Payment security<br></br>
                    Pre-order option when stocks are low<br></br>
                    Drone logistics<br></br>
                    Name change<br></br>
                    Customer loyalty (number of purchases)<br></br>
                    Diversify products<br></br>
                    UI/UX<br></br>
                </h5>
        </footer>
        </div>        
    )

};

export default Meh;