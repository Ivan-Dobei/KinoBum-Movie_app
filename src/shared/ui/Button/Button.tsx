import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, ReactNode} from 'react';

export enum ButtonTheme {
   CLEAR = 'clear',
   ROUND_CLEAR = 'round_clear',
}

export enum ButtonSize {
   S = 'size_s',
   M = 'size_m',
   L = 'size_l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      size,
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
