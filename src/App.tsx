import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import './styles/style.scss'
import {AppRouter} from "./components/AppRouter";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./utils/classNames/classNames";

const App = () => {

   const {theme, toggleTheme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <Link style={{marginRight: 15}} to="/">main</Link>
         <Link to="/movies">movie</Link>
         <button onClick={toggleTheme}>toggle</button>
         <button
            className={classNames('mainClass', {modsTrue: true, modsFalse: false, mods3: true}, ['additional1', 'additional2'])}
         >
            test classNames</button>
         <AppRouter/>
      </div>
   );
};

export default App;
