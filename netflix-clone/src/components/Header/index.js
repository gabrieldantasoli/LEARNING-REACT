import React from 'react';

//IMPORTANDO O CSS
import './Header.css'

export default (props) => {

    return (
        <header className={props.black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://www.bing.com/th?id=OIP.gAoBZTchuV06h2zGCGTsPgAAAA&w=183&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" />
                </a>
            </div>
        </header>
    )
}