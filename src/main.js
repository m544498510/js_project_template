import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import Page from './view/page';
import store from './core/store';

const rootElement = document.getElementById('root');

renderPage(Page);

function renderPage(Component) {
  ReactDOM.render(
    (
      <AppContainer>
        <Provider store={store}>
          <Component/>
        </Provider>
      </AppContainer>
    ),
    rootElement
  );
}

//react hot loader
if (module.hot) {
  module.hot.accept('./view/page', () => {
    const NextPage = require('./view/page/index').default;
    renderPage(NextPage);
  });
}

