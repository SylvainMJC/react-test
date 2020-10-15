import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { render } from 'react-dom';

//IMPORT COMPONENTS
import MTGcards from "./MTGcards";
import MTGbuilder from "./MTGbuilder";

//IMPORT STYLES
import '../scss/style.scss';

render(
    <MTGbuilder />,
    document.getElementById('MTGform')
  )



