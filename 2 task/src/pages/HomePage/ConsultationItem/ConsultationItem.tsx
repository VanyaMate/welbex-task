import React from 'react';
import {IDefaultComponent} from "../../../components/IDefaultComponent";
import css from './ConsultationItem.module.scss';

export interface IConsultationItem extends IDefaultComponent {
    title: string,
    mobileTitle?: string,
}

const ConsultationItem = (props: IConsultationItem) => {
    const { title, children, mobileTitle, ...other } = props;

    return (
        <div {...other}>
            <div className={css.desktop}>
                <div className={css.title}>{ title }</div>
                <div className={css.message}>{ children }</div>
            </div>
            <div className={css.mobile}>
                { mobileTitle ?? title }
            </div>
        </div>
    );
};

export default ConsultationItem;