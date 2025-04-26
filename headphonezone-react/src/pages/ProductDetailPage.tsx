import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Get the productId from the URL

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Details for product ID: {productId}</p>
      {/* Product details will be fetched and displayed here based on productId */}
    </div>
  );
};

export default ProductDetailPage;
