import React, {useState, useEffect} from "react";
import firebase from "../firebase";
//import {firestore} from "../firebase";
//import {querySnapshot, collection} from "@firebase/firestore"; 

export default function Meh(){
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Sales"); //collection(firestore, "Sales");
    
    function getSales(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setSales(items);
            setLoading(false);
        })
    }; 

    useEffect(() => {
        getSales();
    }, []);

    if(loading){
       return
        <h1>
            Loading.,.,
       </h1> ;
    }

    return(
        <div>
            <h1>
                Sales
            </h1>
            {sales.map((sale) =>(
                <div key = {sale.Strain}>
                    <h2>
                        {sale.date}
                    </h2>
                    <p>{sale.stat}</p>
                </div>
            ))}
        </div>
    );

};