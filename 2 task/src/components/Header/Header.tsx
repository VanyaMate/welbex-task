import React from 'react';
import Brand from "./Brand/Brand";
import Navigation from "./Navigation/Navigation";
import HeaderContacts from "./HeaderContacts/HeaderContacts";

import css from './Header.module.scss';

const Header = () => {
    return (
        <div className={css.headerFixStatic}>
            <div className={css.container}>
                <div className={css.menu}>
                    <Brand/>
                    <Navigation/>
                </div>
                <HeaderContacts/>
            </div>
        </div>
    );
};

export default Header;