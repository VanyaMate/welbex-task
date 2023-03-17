import React from 'react';
import css from './HeaderContacts.module.scss';
import TelephoneNumber from "../../common/TelephoneNumber/TelephoneNumber";
import {DEFAULT_TELEGRAM_LINK, DEFAULT_TELEPHONE_NUMBER, DEFAULT_WHATSAPP_LINK} from "../../../consts/contacts";
import IconA from "../../UI/Links/IconA/IconA";
import {TELEGRAM_ICON, TELEPHONE_ICON, WHATSAPP_ICON} from "../../../consts/icons";
import SocialList from "../../common/SocialList/SocialList";

const HeaderContacts = () => {
    return (
        <div className={css.container}>
            <TelephoneNumber number={DEFAULT_TELEPHONE_NUMBER} className={css.number}/>
            <div className={css.links}>
                <SocialList/>
            </div>
        </div>
    );
};

export default HeaderContacts;