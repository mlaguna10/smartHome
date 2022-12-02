import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { IntlProvider } from 'react-intl';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import localeEsMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Container>
        <Row>
            <IntlProvider messages= {localeEsMessages}>
                <App />
            </IntlProvider>
        </Row>
    </Container>
);

serviceWorkerRegistration.register();
