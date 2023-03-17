import React from 'react';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppBackground from "./components/AppBackground/AppBackground";
import css from './App.module.scss';

const App = () => {
    return (
        <div className={css.container}>
            <AppBackground/>
            <div className={css.content}>
                <div className={css.top}>
                    <Header/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default App;