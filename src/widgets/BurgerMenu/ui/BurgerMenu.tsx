import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BurgerMenu.module.scss';
import {Link} from 'react-router-dom';
import {RoutePath} from 'shared/lib/routerConfig/routerConfig';

interface BurgerMenuProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenu = (props: BurgerMenuProps) => {

   const {className, isOpen, onClose} = props;

   return (
      <nav className={classNames(cls.BurgerMenu, {[cls.open]: isOpen}, [className])}>
         <ul className={cls.nav}>
            <li className={cls.navItems}>
               <Link
                  to={RoutePath.main}
                  className={cls.links}
                  onClick={onClose}
               >
                  Main Page
               </Link>
            </li>
            <li className={cls.navItems}>
               <Link
                  to={RoutePath.movies}
                  className={cls.links}
                  onClick={onClose}
               >
                  Movie Page
               </Link>
            </li>
         </ul>
      </nav>
   );
};
