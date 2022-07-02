import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            {/* left */}
            <div className>
                <Image src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg"
                layout = "fill"
                // objectFit='contain'
                // objectPosition='left'
                />
            </div>
            {/* middle */}
            <div >
            </div>
            {/* right */}
            <div></div>
        </header>
    );
};

export default Header;


