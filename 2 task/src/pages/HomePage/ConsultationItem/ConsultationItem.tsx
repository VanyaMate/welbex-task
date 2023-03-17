import React from 'react';
import {IDefaultComponent} from "../../../components/IDefaultComponent";
import css from './ConsultationItem.module.scss';

export interface IConsultationItem extends IDefaultComponent {
    title: string
}

const ConsultationItem = (props: IConsultationItem) => {
    const { title, children, ...other } = props;

    return (
        <div {...other}>
            <div className={css.title}>{ title }</div>
            <div className={css.message}>{ children }</div>
        </div>
    );
};

export default ConsultationItem;