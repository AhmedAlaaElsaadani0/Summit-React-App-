import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { useTranslation } from 'react-i18next';

const ErrorPage = ({ errorCode }) => {
    const { t,i18n } = useTranslation();
    return (
        <div className={"error-container "+ (i18n.language=="ar"?"text-center":"")}>
            <div className="error-content">
                <h1 className="error-code">{t("Error")} {errorCode}</h1>
                <p className="error-message">{t("Error Message")}</p>
                <Link to="/" className="error-button ">{t('Error Button')}</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
