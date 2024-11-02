import React from "react";
import "../assets/css/product.css";
import { useNavigate } from "react-router-dom";
const Product = ({ product }) => {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();
    return (
        <div className="card">
            <img src={image} width={150} height={170} alt="image" className="image" />
            <div>
                <p className="title">{title}</p>
                <h3 className="price">{price} $</h3>
            </div>

            <div>
                <button
                    onClick={() => navigate("/product-details/" + id)}
                    className="btn"
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default Product;
