import React from 'react';
import GeneralText from "../../components/pagesComponents/GeneralText/GeneralText";
import css from './HomePage.module.scss';
import ConsultationItem from "./ConsultationItem/ConsultationItem";

const HomePage = () => {
    return (
        <div className={css.container}>
            <div className={css.text}>
                <GeneralText className={css.generalText}/>
                <div className={css.desc}>
                    Развиваем и контролируем продажи за вас
                </div>
            </div>
            <div className={css.consultation}>
                <div className={css.title}>
                    <span>Вместе с</span> бесплатной консультацией <span>мы дарим:</span>
                </div>
                <div className={css.row}>
                    <ConsultationItem className={css.col} title={'виджеты'}>30 готовых решений</ConsultationItem>
                    <ConsultationItem className={css.col} title={'Dashboard'}>с показателями вашего бизнеса</ConsultationItem>
                </div>
                <div className={css.row}>
                    <ConsultationItem className={css.col} title={'Skype Аудит'}>отдела продаж и CRM системы</ConsultationItem>
                    <ConsultationItem className={css.col} title={'35 дней'}>использования CRM</ConsultationItem>
                </div>
            </div>
        </div>
    );
};

export default HomePage;