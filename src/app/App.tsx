import React, {useState} from 'react';
import './styles/style.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from './providers/ThemeProvider/useTheme';
import {NavBar} from 'widgets/NavBar';

const App = () => {

   const {theme, toggleTheme} = useTheme();

   return (
      <div className={`app ${theme}`}>
         <NavBar/>
         <button onClick={toggleTheme}>toggle</button>
         <AppRouter/>
      </div>
   );
};

export default App;
