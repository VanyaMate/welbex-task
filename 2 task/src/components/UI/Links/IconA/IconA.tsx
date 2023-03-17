import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import A from "../A/A";

export interface IIconA extends IDefaultComponent {
    href: string,
    target?: React.HTMLAttributeAnchorTarget
    icon: string,
    alt?: string
}

const IconA = (props: IIconA) => {
    const { icon, alt, ...other } = props;

    return (
        <A {...other}>
            <img src={icon} alt={alt || ''}/>
        </A>
    );
};

export default IconA;