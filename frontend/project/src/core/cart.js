import React, { useState, useEffect } from "react";
import Base from "./Base";
import { createOrder } from "./helper.js/OrderHelper";
import Card from "./Card";
import { loadCart } from "./helper.js/cartHelper";
import { Redirect } from "react-router-dom";


const Cart = () => {
  const [reload, setReload] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((product, index) => (
          <Card
            id= {index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    );
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + parseInt(p.price);
    });
    return amount;
  };

  let product_names = "";
            products.forEach(function (item) {
              product_names += item.name + ", ";
            });
  
            const orderData = {
              products: product_names,
              amount: getAmount,
              transaction_id: "0"
            };
            createOrder(orderData)
              .then((response) => {
                if (response.error) {
                  if (response.code == "1") {
                    console.log("Order Failed!");
                    
                      return <Redirect to="/" />;
                    };
                  }
                 else {
                  if (response.success == true) {
                    console.log("ORDER PLACED!!");
                  }
                }
              })
              .catch((error) => {
                //setInfo({ loading: false, success: false });
                console.log("Order FAILED", error);
              });
  /*const loadCheckout = () => {
    return (
      <div>
        <h1>Checkout</h1>
      </div>
    );
  };*/

  return (
    <Base title="Cart page" description="Welcome to checkout">
      <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (loadAllProducts(products)) : (
            <h4>No products</h4>
          )}
        </div>
        <div>
        <h1>Checkout</h1>
        <div>
      <h3>Your bill is ₹ {getAmount()}</h3>
      
    </div>
      </div>
      <button
                //onClick={()}
                className="btn btn-block btn-success"
              >
                Buy Now
              </button>   
      </div>
    </Base>
  );
};

export default Cart;
