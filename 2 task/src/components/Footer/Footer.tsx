import React from 'react';
import css from './Footer.module.scss';
import TitleRowsContainer from "../UI/Containers/TitleRowsContainer/TitleRowsContainer";
import {Link} from "react-router-dom";
import TelephoneNumber from "../common/TelephoneNumber/TelephoneNumber";
import {DEFAULT_TELEPHONE_NUMBER} from "../../consts/contacts";
import Vertical from "../UI/Containers/Vertical/Vertical";
import SocialList from "../common/SocialList/SocialList";

const Footer = () => {
    return (
        <div className={css.container}>
            <div className={css.nav}>
                <TitleRowsContainer title={'О компании'}>
                    <Vertical className={css.column}>
                        <Link to={'#'}>Партнерская программа</Link>
                        <Link to={'#'}>Вакансии</Link>
                    </Vertical>
                </TitleRowsContainer>
                <TitleRowsContainer title={'Меню'}>
                    <Vertical className={css.column}>
                        <Link to={'#'}>Расчёт стоимости</Link>
                        <Link to={'#'}>Услуги</Link>
                        <Link to={'#'}>Виджеты</Link>
                        <Link to={'#'}>Интеграции</Link>
                        <Link to={'#'}>Наши клиенты</Link>
                    </Vertical>
                    <Vertical  className={css.column}>
                        <Link to={'#'}>Кейсы</Link>
                        <Link to={'#'}>Благодарственные письма</Link>
                        <Link to={'#'}>Сертификаты</Link>
                        <Link to={'#'}>Блог на Youtube</Link>
                        <Link to={'#'}>Вопрос / Ответ</Link>
                    </Vertical>
                </TitleRowsContainer>
            </div>
            <TitleRowsContainer className={css.contacts} title={'Контакты'}>
                <Vertical className={css.contacts_rows}>
                    <TelephoneNumber number={DEFAULT_TELEPHONE_NUMBER}/>
                    <div className={css.social}>
                        <SocialList/>
                    </div>
                    <div className={css.address}>Москва, Путевой проезд 3с1, к 902</div>
                    <div className={css.rights}>
                        <p>©WELBEX 2022. Все права защищены.</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </Vertical>
            </TitleRowsContainer>
        </div>
    );
};

export default Footer;