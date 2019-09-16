import React from 'react';
import ReactDom from 'react-dom';


// import './style.css';
import Counter from './app';
// import Counter from './vacinp/counter';
// import CounterFucn from './counter/function';

//  import {kaka} from './counter/class'






ReactDom.render(
    <Counter min={10} max={15} />,
    document.getElementById('root'),
);
// ReactDom.render(
//     <CounterFucn />
//     ,
//     document.getElementById('app')
// );  
