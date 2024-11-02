import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import "../assets/css/productDetails.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct, loading } = useSelector(
    (store) => store.product
  );
  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  console.log(products);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((product) => product.id == id);
      if (product) {
        dispatch(setSelectedProduct(product));
      }
    }
  }, [products, id, dispatch]);

  // const getProductById = () => {
  //     products &&
  //         products.map((product) => {
  //             if (product.id == id) {
  //                 dispatch(setSelectedProduct(product));
  //             }
  //         });
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-row" style={{ marginTop: "30px" }}>
      <div style={{ marginRight: "40px" }}>
        <img src={image} alt="image" width={300} />
      </div>
      <div>
        <h2 className="title_details">{title}</h2>
        <h3 className="desc_details">{description}</h3>
        <h3 className="price_details">{price} $</h3>

        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCircleMinus
            onClick={decrement}
            style={{ fontSize: "40px", marginRight: "25px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "30px" }}>{count}</span>
          <CiCirclePlus
            onClick={increment}
            style={{ fontSize: "40px", marginLeft: "25px", cursor: "pointer" }}
          />
        </div>

        <div>
          <button className="add_btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
