import React from 'react';
import css from './AppBackground.module.scss';

const AppBackground = () => {
    return (
        <div className={css.container}>
            <div className={css.circles}>
                <div className={[css.circle, css.center_leftOutside_blur_red].join(' ')}/>
                <div className={[css.circle, css.topOutside_center_blur_purple].join(' ')}/>
                <div className={[css.circle, css.top_center_blur_purpleGradient].join(' ')}/>
                <div className={[css.circle, css.top_center_noBlur_redGradient].join(' ')}/>
                <div className={[css.circle, css.center_center_blur_redGradient].join(' ')}/>
            </div>
        </div>
    );
};

export default AppBackground;