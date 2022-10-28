import cls from './Logo.module.scss';
import {Link} from "react-router-dom";
import {RoutePath} from "shared/lib/routerConfig/routerConfig";
import {classNames} from "shared/lib/classNames/classNames";

interface LogoProps {
    className?: string
}

export const Logo = ({className}: LogoProps) => {
    return (
        <Link
           className={classNames(cls.Logo, {}, [className])}
           to={RoutePath.main}
        >
            Kino<span className={cls.logo__blue}>Bum</span>
        </Link>
    );
};
