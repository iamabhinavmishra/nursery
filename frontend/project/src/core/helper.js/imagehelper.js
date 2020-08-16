import React from 'react';
const ImageHelper = ({product}) =>{
     const imageurl = product ? product.image
     :`https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`
     return (
         <div className="rounded border border-success p-2">
            <img src={imageurl} 
            style={{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded"
            alt=""
            />
         </div>
     );
}

export default ImageHelper;