import React, { useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Slider, Typography } from "@mui/material";
import { useAlert } from "react-alert";
import MetaData from "../layout/Metadata";
const marks = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];
const priceRange = [
  { value: 10000, label: "10K" },
  { value: 50000, label: "50K" },
  { value: 100000, label: "100K" },
  { value: 150000, label: "150K" },
  { value: 200000, label: "200K" },
  { value: 250000, label: "250K" },
];
const categories = ["All", "Adidas", "Nike", "Puma"];
const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const { products, loading, error, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const { keyword } = useParams();

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Products -> DreamStore" />
          <h2 className="productsHeading">Products</h2>
          <div className="containerBox">
            <div className="filterBox">
              <Typography fontFamily={"NikeTg"}>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={250000}
                marks={priceRange}
              />
              <Typography fontFamily={"NikeTg"}>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <fieldset>
                <Typography component="legend">Ratings above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                  marks={marks}
                />
              </fieldset>
            </div>
            <div className="products">
              {console.log(products)}
              {products.length ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="noProducts">No products found</div>
              )}
            </div>
          </div>

          <div className="paginationBox">
            <Pagination
              count={Math.ceil(productCount / resultPerPage)}
              page={currentPage}
              shape="rounded"
              variant="outlined"
              size="large"
              onChange={(e, value) => {
                setCurrentPage(value);
                console.log(currentPage);
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
