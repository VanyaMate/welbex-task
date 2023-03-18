import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './Button.module.scss';

export interface IButton extends IDefaultComponent {
    active?: boolean,
    always?: boolean,
    onClick: () => void
}

const Button = (props: IButton) => {
    const { active, always, className, ...other } = props;

    return (
        <button
            className={[
                css.button,
                active ? css.active : '',
                always ? css.always : '',
                className ?? ''
            ].join(' ')}
            {...other}
        />
    );
};

export default Button;