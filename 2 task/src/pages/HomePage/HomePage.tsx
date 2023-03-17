import React from 'react';
import GeneralText from "../../components/pagesComponents/GeneralText/GeneralText";
import css from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={css.container}>
            <GeneralText/>
        </div>
    );
};

export default HomePage;