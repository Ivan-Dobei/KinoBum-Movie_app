import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Menu.module.scss';
import {Link} from 'react-router-dom';
import {RoutePath} from 'shared/lib/routerConfig/routerConfig';


interface MenuProps {
    className?: string;
    isOpen: boolean;
    onChange: () => void;
}

export const Menu = (props: MenuProps) => {
   const {
      className,
      isOpen,
      onChange,
   } = props;

   return (
      <div className={classNames(cls.Menu, {[cls.open]: isOpen}, [className])}>
         <Link
            className={cls.menuItem}
            to={RoutePath.main}
            onClick={onChange}
         >
            Main Page
         </Link>
         <Link
            className={cls.menuItem}
            to={RoutePath.movies}
            onClick={onChange}
         >
            Movie Page
         </Link>
      </div>
   );
};
