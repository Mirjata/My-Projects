import React from 'react';
import { Button, Label } from 'components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { isFunction } from 'lodash';
import { updateCategory } from '/services/products';
import './styles.css';

const ProductCard = ({ onRemove, product, onWishlist, onShopNow }) => {
  const updateLiked = async () => {
    const [result] = await updateCategory(product?.id, {
      liked: !product?.liked,
    });
    isFunction(onWishlist) && onWishlist(result);
  };

  const removeHandler = async () => {
    await updateLiked();
    onRemove();
  };

  return (
    <section className="card">
      <div className="img-container">
        <img src={product?.image} className="image" />
        <div className="label-container">
          {product?.sale > 0 && <Label type="sale" text="SALE" />}
          {product?.hot && <Label type="hot" text="HOT" />}
        </div>
        {(onWishlist || onShopNow) && (
          <div className="hover-container">
            {isFunction(onWishlist) && (
              <button className="hover-like" onClick={updateLiked}>
                {product?.liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            )}
            {isFunction(onWishlist) && <button className="hover-shop">Shop Now</button>}
          </div>
        )}
      </div>
      <div className={isFunction(onRemove) ? 'btn-container' : 'non-btn-container'}>
        <h4 className="product-title">{product?.title}</h4>
        {isFunction(onRemove) ? (
          <Button name={'REMOVE'} color={'orange'} onClick={removeHandler} />
        ) : (
          <div className="type-price-container">
            <p className="product-type">{product?.description}</p>
            <div className="product-price">
              {product?.sale > 0 ? (
                <div className="sale-container">
                  <div className="new-price">
                    ${(product?.price - (product?.sale / product?.price) * 100).toFixed(2)}
                  </div>
                  <div className="old-price">${product?.price?.toFixed(2)}</div>
                </div>
              ) : (
                <div>${product?.price?.toFixed(2)}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
