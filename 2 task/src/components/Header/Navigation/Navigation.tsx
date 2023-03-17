import React from 'react';
import css from './Navigation.module.scss';
import {Link} from "react-router-dom";
import {CASES_LINK, CERTIFICATES_LINK, INTEGRATIONS_LINK, SERVICE_LINK, WIDGETS_LINK} from "../../../consts/pages";

const Navigation = () => {


    return (
        <div className={css.container}>
            <Link to={SERVICE_LINK} className={css.link}>Услуги</Link>
            <Link to={WIDGETS_LINK} className={css.link}>Виджеты</Link>
            <Link to={INTEGRATIONS_LINK} className={css.link}>Интеграции</Link>
            <Link to={CASES_LINK} className={css.link}>Кейсы</Link>
            <Link to={CERTIFICATES_LINK} className={css.link}>Сертификаты</Link>
        </div>
    );
};

export default Navigation;