import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBarForm.module.scss';
import {Input, InputSize, InputTheme} from 'shared/ui/Input/Input';
import SearchIcon from 'shared/assets/icons/Search.svg';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';

interface NavBaFormProps {
    className?: string;
}

export const NavBaForm = ({className}: NavBaFormProps) => {
   return (
      <div className={classNames(cls.NavBaForm, {}, [className])}>
         <Input
            className={cls.input}
            type="text"
            theme={InputTheme.PRIMARY}
            size={InputSize.L}
            placeholder="Search..."
         />
         <Button
            size={ButtonSize.S}
            theme={ButtonTheme.CLEAR}
         >
            <SearchIcon/>
         </Button>
      </div>
   );
};
