import React, {useState, useEffect} from'react';
import {getProducts} from "./helper.js/coreapicalls";
import  "../styles.css";
import Base from "./Base";
import Card from "./Card";


export default function Home(){
    const[products, setProducts] = useState([]);
    const[error, setError] = useState(false);

    const loadallProducts = () =>{
        getProducts()
        .then(data => {
            if(data.error){
                setError(data.error);
                console.log(error);
            }else{
                setProducts(data);
            }
        });
    };

    useEffect(()=>{
        loadallProducts();
    }, []);

    return (
        <Base title="Home Page" description="Welcome to Nursery">
            <h1>Home Component</h1>
            <div className="row">
                {products.map( (product, index)=> {
                    return(
                        <div key={index} className="col-4 mb-4">
                            <Card product={product}/>
                        </div>
                    );
                })}
            </div>
            </Base>
    );
}
 