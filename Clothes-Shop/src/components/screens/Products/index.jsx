import React, { useState, useEffect } from 'react';
import { ProductCard, ProductsFilter, Pagination } from 'components';
import { getProducts } from '/services/products';
import { getCategories } from '/services/categories';
import './styles.css';

const productsInitial = {
  page: 1,
  perPage: 4,
  totalPages: 0,
  items: [],
};

const ProductAdds = () => {
  const [data, setData] = useState(productsInitial);
  const [category, setCategory] = useState({});
  const [filter, setFilter] = useState();

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const pageHandler = page => {
    fetchData({ page, ...(filter && { filter: `(fk_category = '${filter}')` }) });
  };

  const filterHandler = id => {
    setFilter(id);
    fetchData({ ...(id && { filter: `(fk_category = '${id}')` }) });
  };

  const fetchData = async data => {
    const [result] = await getProducts(data);
    setData(result);
  };

  const fetchCategories = async () => {
    const [result] = await getCategories();
    setCategory(result);
  };

  const handleWishlist = productData => {
    setData(prev => ({ ...prev, items: prev?.items?.map(el => (el?.id === productData?.id ? productData : el)) }));
  };

  return (
    <div className="container">
      <h2 className="products-title">Products</h2>
      <ProductsFilter active={filter} categories={category?.items} onFilter={filterHandler} />
      <div className="products-container">
        {data?.items?.map((product, i) => (
          <ProductCard key={i} product={product} onWishlist={handleWishlist} />
        ))}
      </div>
      <Pagination data={data} onPage={pageHandler} />
    </div>
  );
};
export default ProductAdds;
