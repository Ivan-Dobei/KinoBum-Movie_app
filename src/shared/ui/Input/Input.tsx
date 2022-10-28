import {classNames} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';
import {InputHTMLAttributes} from "react";

export enum InputTheme {
   PRIMARY = 'primary',
}

export enum InputSize {
   M = 'size_m',
   L = 'size_l'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends HTMLInputProps{
    className?: string;
    type?: string;
    theme?: InputTheme;
    size?: InputSize;
}

export const Input = (props: InputProps) => {

   const {
      type = 'text',
      className,
      theme = InputTheme.PRIMARY,
      size = InputSize.M,
      ...otherProps
   } = props;

   return (
      <input
         type={type}
         className={classNames(cls.Input, {}, [className, cls[theme], cls[size]])}
         {...otherProps}
      />
   );
};
