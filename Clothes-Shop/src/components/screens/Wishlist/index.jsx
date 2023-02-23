import React, { useState, useEffect } from 'react';
import { ProductCard, ProductsFilter, Pagination } from 'components';
import { getProducts } from '/services/products';
import { getCategories } from '/services/categories';
import './styles.css';

const Wish = () => {
  const [data, setData] = useState({});
  const [category, setCategory] = useState({});
  const [filter, setFilter] = useState();

  useEffect(() => {
    fetchData({ filter: '(liked = True)' });
    fetchCategories();
  }, []);

  const fetchData = async data => {
    const [result] = await getProducts(data);
    setData(result);
  };

  const fetchCategories = async () => {
    const [result] = await getCategories();
    setCategory(result);
  };

  const onRemoveHandler = () => {
    pageHandler(data?.page);
  };

  const filterHandler = id => {
    setFilter(id);
    fetchData({
      ...(id ? { filter: `(fk_category = '${id}' && liked = True)` } : { filter: '(liked = True)' }),
    });
  };

  const pageHandler = page => {
    fetchData({
      page,
      ...(filter ? { filter: `(fk_category = '${filter}' && liked = True)` } : { filter: '(liked = True)' }),
    });
  };

  return (
    <div className="container">
      <h2 className="wishlist-title">Wishlist</h2>
      <ProductsFilter active={filter} categories={category?.items} onFilter={filterHandler} />
      <div className="products-container">
        {data?.items?.map((product, i) => (
          <ProductCard onRemove={onRemoveHandler} key={i} product={product} />
        ))}
      </div>
      <Pagination data={data} onPage={pageHandler} />
    </div>
  );
};
export default Wish;
