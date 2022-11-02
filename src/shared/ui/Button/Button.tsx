import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ReactNode} from 'react';

export enum ButtonTheme {
   CLEAR = 'clear',
}

export enum ButtonSize {
   S = 'size_s',
   M = 'size_m',
   L = 'size_l'
}

interface ButtonProps {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {

   const {
      children,
      className,
      theme = ButtonTheme.CLEAR,
      size = ButtonSize.M,
      ...otherProps
   } = props;

   return (
      <button
         className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
         {...otherProps}
      >
         {children}
      </button>
   );
};
