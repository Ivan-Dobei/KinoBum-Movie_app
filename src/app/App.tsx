import React, {useState} from 'react';
import './styles/style.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from './providers/ThemeProvider/useTheme';
import {NavBar} from 'widgets/NavBar';
import {BurgerMenu} from 'widgets/BurgerMenu/ui/BurgerMenu';

const App = () => {

   const {theme, toggleTheme} = useTheme();
   const [collapsed, setCollapsed] = useState(false);

   const toggleBurger = () => {
      setCollapsed(prev => !prev);
   };

   return (
      <div className={`app ${theme}`}>
         <NavBar onToggle={toggleBurger}/>
         <button onClick={toggleTheme}>toggle</button>
         <BurgerMenu isOpen={collapsed}/>
         <AppRouter/>
      </div>
   );
};

export default App;
