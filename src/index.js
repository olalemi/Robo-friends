import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card'




ReactDOM.render(
         <div>
             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
             <Card/>
             <Card/>
             <Card/>

         </div>
        

    ,document.getElementById('root'));
