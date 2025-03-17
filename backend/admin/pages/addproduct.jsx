import React, { useState } from "react";
import "./addproduct.css";
import upload from "../Assets/upload.png";
import all_product from "../../../frontend/Assets/all_product";
const Addproduct = () => {
  const [product, setProduct] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "",
    image: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(upload); // Image preview

  function handler(event) {
    setProduct((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function imageHandler(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview
    }
  }

  async function showProduct(e) {
    const formData = new FormData();
    formData.append("product", image);

    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const imageUrl = data.imageUrl; 

    if (!imageUrl) {
      console.error("Failed to upload image");
      return;
    }

    const newProduct = {
      name: product.name,
      old_price: product.old_price,
      new_price: product.new_price,
      category: product.category,
      image: imageUrl,
      description: product.description,
    };

    console.log("Product Data:", newProduct);

    try {
      const response = await fetch("http://localhost:3000/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const result = await response.json();
      console.log("Product Added:", result);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="addproduct">
      <div className="addproduct-container">
        <div className="addproduct-container1">
          <div className="addproduct-title">
            <p className="addproduct-name">Product Name</p>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handler}
              placeholder="Type here"
            />
          </div>

          <div className="addproduct-eren">
            <div className="addproduct-oldprice">
              <p className="addproduct-name">Old Price</p>
              <input
                type="text"
                name="old_price"
                value={product.old_price}
                onChange={handler}
                placeholder="Type here"
              />
            </div>
            <div className="addproduct-newprice">
              <p className="addproduct-name">New Price</p>
              <input
                type="text"
                name="new_price"
                value={product.new_price}
                onChange={handler}
                placeholder="Type here"
              />
            </div>
          </div>

          <div className="addproduct-category">
            <p className="addproduct-name">Category</p>
            <select name="category" value={product.category} onChange={handler}>
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
            </select>
          </div>

          <div className="addproduct-file">
            <label htmlFor="file-input">
              <img className="previewimage" src={preview} alt="Upload" />
            </label>
            <input type="file" id="file-input" onChange={imageHandler} />
          </div>
          <div className="addproduct-description">
            <p className="addproduct-name">Description</p>
            <textarea className="allproduct-description"
              name="description"
              value={product.description}
              onChange={handler}
              placeholder="Enter product description"
              rows="5"
              
            />
          </div>

          <button onClick={showProduct} className="addproduct-add">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
