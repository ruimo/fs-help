import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from "react-intl";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import messages_ja from "./translations/ja.json";
import messages_en from "./translations/en.json";
import "./bulmaswatch.min.css";

const messages = {
  'ja': messages_ja,
  'en': messages_en
};

const lang = navigator.language.split(/[-_]/)[0];  // language without region code
const language = lang === 'ja' ? lang : 'en'

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}><App/></IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
