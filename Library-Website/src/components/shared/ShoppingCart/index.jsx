import React from 'react';
import { IoClose } from 'react-icons/io5';
import {
  shoppingCart,
  shoppingCartWrap,
  Header,
  closeIcon,
  itemWrap,
  subTotal,
  itemDetailsWrap,
  itemQtyWrap,
  imgWrap,
  checkOutButton,
} from './styles';
import { Button } from 'components/UI';

const ShoppingCart = () => (
  <section css={shoppingCart}>
    <div css={shoppingCartWrap}>
      <div css={Header}>
        <h4>Your Cart</h4>
        <IoClose css={closeIcon} />
      </div>
      <div>
        <div css={itemWrap}>
          <div css={imgWrap}>
            <img src="assets/images/ShoppingCartBook.png" />
          </div>
          <div css={itemDetailsWrap}>
            <h6>Atomic One</h6>
            <p>$ 68.97 USD</p>
            <h6>Remove</h6>
          </div>
          <div css={itemQtyWrap}>1</div>
        </div>
      </div>
      <div>
        <div css={subTotal}>
          <h6>Sub-Total</h6>
          <h6>$68.97 USD</h6>
        </div>
        <div css={checkOutButton}>
          <Button type="secondary" fullWidth={true}>
            Continue To Checkout
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ShoppingCart;
