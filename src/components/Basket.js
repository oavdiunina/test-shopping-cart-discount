import React from 'react';
import {getDiscounts} from './Discounts';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const discounts = [];
  const itemsPrice = cartItems.reduce((a, c) => {
    discounts.push(getDiscounts(c));
    return a + c.qty * c.price
  }, 0);
  const totalDiscounts = discounts.reduce((a,c) => a+c, 0);
  const totalPrice = itemsPrice - totalDiscounts;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              {/* {discount && <p>You've got discount</p>} */}
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>

          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            {totalDiscounts > 0 && (
              <div className="row">
                <div className="col-2">Items Discount</div>
                <div className="col-1 text-right">${totalDiscounts.toFixed(2)}</div>
              </div>
            )}

            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Discount Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}

            

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
