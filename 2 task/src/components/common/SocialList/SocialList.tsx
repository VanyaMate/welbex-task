import React from 'react';
import IconA from "../../UI/Links/IconA/IconA";
import {DEFAULT_TELEGRAM_LINK, DEFAULT_TELEPHONE_NUMBER, DEFAULT_WHATSAPP_LINK} from "../../../consts/contacts";
import {TELEGRAM_ICON, TELEPHONE_ICON, WHATSAPP_ICON} from "../../../consts/icons";

const SocialList = () => {
    return (
        <>
            <IconA href={DEFAULT_TELEGRAM_LINK} icon={TELEGRAM_ICON}/>
            <IconA href={`tel:+${DEFAULT_TELEPHONE_NUMBER}`} target={'_self'} icon={TELEPHONE_ICON}/>
            <IconA href={DEFAULT_WHATSAPP_LINK} icon={WHATSAPP_ICON}/>
        </>
    );
};

export default SocialList;