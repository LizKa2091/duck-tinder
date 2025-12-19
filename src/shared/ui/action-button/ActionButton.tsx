import { type FC } from 'react';
import clsx from 'clsx';

import styles from './ActionButton.module.scss';

interface IActionButtonProps {
   text?: string;
   type?: 'match' | 'message';
   disabled?: boolean;
   onClick: () => void;
}


export const ActionButton: FC<IActionButtonProps> = ({ text, type, disabled, onClick }) => {
   const buttonTitle = type === 'match' ? 'Мэтч' : type === 'message' ? 'Написать сообщение' : '';

   return (
      <button 
         onClick={onClick} 
         title={buttonTitle}
         disabled={disabled}
         className={clsx(
            styles.button, 
            type === 'match' && styles.match, 
            disabled && styles.disabled,
            type === 'message' && styles.message
         )} 
      >
         {text}
      </button>
   )
}