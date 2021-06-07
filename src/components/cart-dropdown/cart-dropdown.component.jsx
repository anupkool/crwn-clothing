import React from 'react';
import { connect } from 'react-redux';
import CardItem from '../card-item/card-item.component'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='class-item'> 
            {
                cartItems.map(cartItem => <CardItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);