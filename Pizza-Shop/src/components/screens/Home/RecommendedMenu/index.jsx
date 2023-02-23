import React, { useState, useEffect } from 'react';
import { PizzaCard, OrderBox } from 'components';
import { getAll } from 'services/index';
import './styles.css';

const RecommendedMenu = () => {
  const [data, setData] = useState({
    page: 1,
    perPage: 3,
    totalPages: 0,
    items: [],
  });
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchData(data.page);
  }, []);

  const fetchData = async page => {
    const [result] = await getAll({ page, perPage: data.perPage });
    setData(result);
  };

  
  const handleSizeChange = (type, id) => {
    setData(prev => ({
      ...prev,
      items: prev?.items?.map(el => (el?.id !== id ? el : { ...el, type })),
    }));
  };

  const handleAddToCard = newProduct => {
    setOrder(prev => {
      const hasItem = prev?.find(el => el?.id === newProduct?.id && el?.price === newProduct?.price);

      return hasItem
        ? prev.map(pizza =>
            hasItem?.id === pizza?.id && hasItem?.price === pizza?.price ? { ...pizza, qty: pizza?.qty + 1 } : pizza,
          )
        : [...prev, { ...newProduct }];
    });
  };

  const total = order.reduce((acc, el) => (acc += el.price * el.qty), 0).toFixed(2);

  return (
    <>
      {order?.length > 0 && <OrderBox order={order} total={total} />}
      <section className="section-items">
        <h2 className="recommended-menu">Recommended menu</h2>
        <div className="items">
          {data?.items?.map(pizza => (
            <PizzaCard key={pizza?.id} data={pizza} onChangePrice={handleSizeChange} onAdd={handleAddToCard} />
          ))}
        </div>
        <div className="paging-wrap">
          {[...Array(data?.totalPages)].map((_, i) => (
            <button key={i} className="btn" onClick={() => fetchData(i + 1)} data-active={i + 1 === data?.page} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RecommendedMenu;
