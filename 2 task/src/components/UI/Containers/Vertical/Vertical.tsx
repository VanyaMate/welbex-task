import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './Vertical.module.scss';


const Vertical = (props: IDefaultComponent) => {
    const { className, ...other } = props;
    return (
        <div className={[className, css.container].join(' ')} {...other}/>
    );
};

export default Vertical;