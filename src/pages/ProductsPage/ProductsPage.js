import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductsPage = () => {
  // API Url: https://fakestoreapi.com/products
  const [products, setProducts] = useState([]); // positive state
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        // console.log(response);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    addToCart([...cartItems, product]);
  };

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <div className="row">
        <h1>Shop our Products</h1>

        {products.map((product) => {
          return (
            <div className="col-md-3" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="300"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title} | {product.category}
                  </h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price ${product.price}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
