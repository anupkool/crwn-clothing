import React from 'react';

import './card-item.styles.scss';

const CardItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} × ${price};
            </span>

        </div>

    </div>
)

export default CardItem;