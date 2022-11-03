import cls from './NavBar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Logo} from 'shared/ui/Logo/Logo';
import {NavBaForm} from 'widgets/NavBarForm/NavBaForm';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {BurgerMenu} from 'widgets/BurgerMenu/ui/BurgerMenu';
import {useState} from 'react';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {

   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

   const toggleBurger = () => {
      setIsBurgerOpen(prev => !prev);
   };

   return (
      <div
         data-testid={'navbar'}
         className={classNames(cls.NavBar, {}, [className])}
      >
         <BurgerMenu
            isOpen={isBurgerOpen}
            onClose={toggleBurger}
         />
         <div className={classNames(cls.content, {}, ['fluid-container'])}>
            <div className={cls.logoBock}>
               <Button
                  className={classNames(cls.burger, {[cls.burgerActive]: isBurgerOpen}, [])}
                  theme={ButtonTheme.ROUND_CLEAR}
                  onClick={toggleBurger}
               >
                  <span className={cls.burgerLine}/>
               </Button>
               <Logo/>
            </div>
            <NavBaForm/>
            <Button
               theme={ButtonTheme.CLEAR}
               size={ButtonSize.M}
            >
               click
            </Button>
         </div>
      </div>
   );
};

