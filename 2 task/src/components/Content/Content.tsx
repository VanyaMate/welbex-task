import React from 'react';
import css from './Content.module.scss';
import { Routes, Route } from "react-router-dom";
import {CASES_LINK, CERTIFICATES_LINK, INTEGRATIONS_LINK, SERVICE_LINK, WIDGETS_LINK} from "../../consts/pages";
import HomePage from "../../pages/HomePage/HomePage";
import ServicePage from "../../pages/ServicePage/ServicePage";
import WidgetsPage from "../../pages/WidgetsPage/WidgetsPage";
import IntegrationsPage from "../../pages/IntegrationsPage/IntegrationsPage";
import CasesPage from "../../pages/CasesPage/CasesPage";
import CertificatesPage from "../../pages/CertificatesPage/CertificatesPage";
import Page404 from "../../pages/Page404/Page404";

const Content = () => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={SERVICE_LINK} element={<ServicePage/>}/>
                <Route path={WIDGETS_LINK} element={<WidgetsPage/>}/>
                <Route path={INTEGRATIONS_LINK} element={<IntegrationsPage/>}/>
                <Route path={CASES_LINK} element={<CasesPage/>}/>
                <Route path={CERTIFICATES_LINK} element={<CertificatesPage/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Routes>
        </div>
    );
};

export default Content;