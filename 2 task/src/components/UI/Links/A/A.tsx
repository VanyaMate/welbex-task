import React from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";

export interface IA extends IDefaultComponent {
    href: string,
    target?: React.HTMLAttributeAnchorTarget
}

const A = (props: IA) => {
    return (
        <a {...props} target={props.target ?? '_blank'}/>
    );
};

export default A;