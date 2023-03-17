import React, {useMemo} from 'react';
import {IDefaultComponent} from "../../../IDefaultComponent";
import css from './GradientText.module.scss';


export interface IGradient {
    color: string,
    length: number
}

export interface IGradientText extends IDefaultComponent {
    deg: number,
    endColor: string,
    gradients: IGradient[],
}

const GradientText = (props: IGradientText) => {
    const { gradients, deg, endColor, style, className, ...other } = props;

    const gradient = useMemo(() => {
        const gradientProps = props.gradients.map((gradient) => {
            return `${ gradient.color } ${ gradient.length }%`
        }).join(',')

        const gradientValue = `linear-gradient(${ deg }deg, ${gradientProps}, ${ endColor })`;

        return gradientValue;
    }, [props.gradients, props.deg, props.endColor])

    return (
        <span {...other} style={{...style, background: gradient}} className={[className, css.text].join(' ')}/>
    );
};

export default GradientText;