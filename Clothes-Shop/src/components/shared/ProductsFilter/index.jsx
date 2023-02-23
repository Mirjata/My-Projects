import React from 'react';
import './styles.css';

const ProductsFilter = ({ active, categories, onFilter }) => {
  const clickHander = id => {
    onFilter(id);
  };

  return (
    <div className="container">
      <ul className="filter-types">
        <li className={!active ? 'filter-type-active' : 'filter-type'} onClick={() => clickHander(null)}>
          All Products
        </li>
        {categories?.map(category => (
          <li
            title={category?.name}
            key={category?.id}
            className={category?.id === active ? 'filter-type-active' : 'filter-type'}
            onClick={() => clickHander(category?.id)}
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
