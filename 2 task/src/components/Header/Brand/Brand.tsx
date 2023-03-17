import React from 'react';
import css from "./Brand.module.scss";
import {Link} from "react-router-dom";
import {BRAND_LOGO, BRAND_NAME} from "../../../consts/icons";

const Brand = () => {
    return (
        <Link to={'/'} className={css.container}>
            <img src={BRAND_LOGO} className={css.logo}/>
            <span className={css.nameContainer}>
                <img src={BRAND_NAME} className={css.name}/>
            </span>

            <div className={css.desc}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
        </Link>
    );
};

export default Brand;