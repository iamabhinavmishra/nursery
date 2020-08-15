import React, {useState, useEffect} from'react'
import {getProducts} from "./helper.js/coreapicalls"
export default function Home(){
    cost[products, setProducts] = useState([]);
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
        <div>
            <h1>Home Component</h1>
            <div className="row">
                {products.map( (product, index)=> {
                    return(
                        <div key={index}>
                            <h1>{product.name}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
 