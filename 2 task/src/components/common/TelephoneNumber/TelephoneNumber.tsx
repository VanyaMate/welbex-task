import React from 'react';
import A from "../../UI/Links/A/A";
import {IDefaultComponent} from "../../IDefaultComponent";
import {getMobileFormat} from "../../../utils/helpers";

export interface ITelephoneNumber extends IDefaultComponent {
    number: string | number
}

const TelephoneNumber = (props: ITelephoneNumber) => {
    const { number, ...other } = props;

    return (
        <A href={`tel:+${number}`} target={'_self'} {...other}>{ getMobileFormat(`${number}`) }</A>
    );
};

export default TelephoneNumber;