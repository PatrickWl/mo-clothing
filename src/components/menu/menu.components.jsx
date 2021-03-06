import React from 'react';
import './menu.styles.scss'

const Menu = ({title, imageUrl, size}) =>(
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className={`${size} menu`}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
)

export default Menu;