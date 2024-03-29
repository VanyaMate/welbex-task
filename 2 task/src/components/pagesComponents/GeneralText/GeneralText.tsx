import React from 'react';
import GradientText from "../../UI/Text/GradientText/GradientText";
import css from './GeneralText.module.scss';
import {IDefaultComponent} from "../../IDefaultComponent";

const GeneralText = (props: IDefaultComponent) => {
    const { className, ...other } = props;

    return (
        <div className={[css.text, className ?? ''].join(' ')} {...other}>
            Зарабатывайте<br/>больше<br/>
            <GradientText
                className={css.gradient}
                deg={95}
                endColor={'#E4E5EA'}
                gradients={[ { color: '#FCB045', length: 27.14 }, { color: '#FF3F78', length: 121.36 } ]}
            >с WELBEX</GradientText>
        </div>
    );
};

export default GeneralText;