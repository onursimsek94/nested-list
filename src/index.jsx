import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './resource/style/style.scss'
import Main from './containers/Main'

ReactDom.render((
  <BrowserRouter>
    <Route exact path='/' component={Main} />
  </BrowserRouter>
), document.getElementById('app'))
