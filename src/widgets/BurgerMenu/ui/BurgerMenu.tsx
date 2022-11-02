import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BurgerMenu.module.scss';

interface BurgerMenuProps {
    className?: string;
    isOpen: boolean
}

export const BurgerMenu = (props: BurgerMenuProps) => {

   const {className, isOpen} = props;

   return (
      <div className={classNames(cls.BurgerMenu, {[cls.open]: isOpen}, [className])}>

      </div>
   );
};
