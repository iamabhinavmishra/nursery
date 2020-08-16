import React, {useState} from 'react';
import ImageHelper from "./helper.js/ImageHelper";
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from "./helper.js/cartHelper";
import { isAuthenticated } from "../auth/helper";
//deal 
//const isAuthenticated = true;

const Card = ({
    product, 
    addtoCart = true,
    removeFromCart = false,
    setReload = (f) => f,
    reload = undefined,
}) => {

      const [redirect, setRedirect] = useState(false);

      const cartTitle = product ? product.name : "A plant";
      const cartDescription = product ? product.description : "A plant detail";
      const cartPrice = product ? product.price : "A plant price";

      const addToCart = () => {
        if (isAuthenticated){
          addItemToCart(product, () => setRedirect(true));
          console.log("added")
        }else{
          console.log("please login")
        }
      };

      const getArederict = redirect => {
        if (redirect) {
          return <Redirect to="/cart"/>;
        }
      };

      const showAddToCart = (addToCart) => {
        return (
          addtoCart && (
            <button
              onClick={addToCart}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          )
        );
      };

      const showRemoveFromCart = (removeFromCart) => {
        return (
          removeFromCart && (
            <button
              onClick={() => {
                //TODO: handle this too
                removeItemFromCart(product.id);
                setReload(!reload);
    
                console.log("Product removed from cart");
              }}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          )
        );
      };

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
    <p className="btn btn-success rounded  btn-sm px-4">₹ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Card;