import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './TitleRowsContainer.module.scss';


export interface ITitleRowsContainer extends IDefaultComponent {
    title: string
}

const TitleRowsContainer = (props: ITitleRowsContainer) => {
    const { title, className, children, ...other } = props;

    return (
        <div className={[className, css.container].join(' ')} {...other}>
            <div className={css.title}>{ title }</div>
            <div className={css.columns}>{ children }</div>
        </div>
    );
};

export default TitleRowsContainer;