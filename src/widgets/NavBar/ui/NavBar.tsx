import cls from './NavBar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Logo} from 'shared/ui/Logo/Logo';
import {NavBaForm} from 'widgets/NavBarForm/NavBaForm';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';

interface NavBarProps {
    className?: string;
    onToggle?: () => void;
}

export const NavBar = (props: NavBarProps) => {

   const {className, onToggle} = props;

   return (
      <div
         data-testid={'navbar'}
         className={classNames(cls.NavBar, {}, [className])}
      >
         <div className={classNames(cls.content, {}, ['container'])}>
            <div className={cls.logoBock}>
               <Button
                  className={cls.burger}
                  theme={ButtonTheme.CLEAR}
                  onClick={onToggle}
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

