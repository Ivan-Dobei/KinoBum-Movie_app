import cls from './NavBar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Logo} from 'shared/ui/Logo/Logo';
import {NavBaForm} from 'widgets/NavBarForm/NavBaForm';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {useState} from 'react';
import {Menu} from 'shared/ui/Menu/Menu';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
   };

   return (
      <div
         data-testid={'navbar'}
         className={classNames(cls.NavBar, {}, [className])}
      >
         <div className={classNames(cls.content, {}, ['fluid-container'])}>
            <div className={cls.logoBock}>
               <Menu isOpen={isMenuOpen} onChange={toggleMenu}/>
               <Button
                  className={classNames(cls.burger, {[cls.burgerActive]: isMenuOpen}, [])}
                  theme={ButtonTheme.ROUND_CLEAR}
                  onClick={toggleMenu}
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

