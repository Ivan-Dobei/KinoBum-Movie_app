import cls from './NavBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Logo} from "shared/ui/Logo/Logo";
import {NavBaForm} from "widgets/NavBarForm/NavBaForm";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={classNames(cls.content, {}, ['container'])}>
               <Logo/>
               <NavBaForm/>
               <Button
                  theme={ButtonTheme.CLEAR}
                  size={ButtonSize.S}
               >
                  click
               </Button>
            </div>
        </div>
    );
};

