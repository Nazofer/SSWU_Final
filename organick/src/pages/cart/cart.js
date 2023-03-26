import React from 'react'; 
import Order from '../../components/sections/order-confirmation/order-confirmation';

 const CartBody = ({name, discount, price}) => {
  return (
    <>
      <Order name={name} discount={discount} price={price}></Order>
    </>
  );
 } 

 export default CartBody;