import React from 'react';
import { Select, Button } from 'components';
import { isFunction } from 'lodash';
import './styles.css';

const types = {
  small: 'Small',
  regular: 'Regular',
  large: 'Large',
};

const rates = {
  Small: 0.8,
  Regular: 1,
  Large: 1.2,
};

const PizzaCard = ({ data, onChangePrice, onAdd }) => {
  const handleDescription = text => (text.length > 90 ? `${text.slice(0, 90)}...` : text);

  const sizeHandler = type => {
    onChangePrice(types[type], data.id);
  };

  const priceCalculation = () => (data?.type ? data?.price * rates[data?.type] : data?.price);

  const handleAdd = () => {
    isFunction(onAdd) && onAdd({ ...data, price: priceCalculation(), qty: 1 });
  };

  return (
    <>
      <article className="item-container">
        <img className="pizza-img" src={data?.image} alt="pizza" />
        <h2>{data?.title}</h2>
        <p className="description">{handleDescription(data?.description)}</p>
        <p className="price">${priceCalculation().toFixed(2)}</p>
        <Select onChange={sizeHandler} />
        <Button name={'ADD TO CARD'} size={'medium'} onClick={handleAdd} />
      </article>
    </>
  );
};

export default PizzaCard;
