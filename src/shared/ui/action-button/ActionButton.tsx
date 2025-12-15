import { type FC } from 'react';
import clsx from 'clsx';

import styles from './ActionButton.module.scss';

interface IActionButtonProps {
   text?: string;
   type?: 'match' | 'message';
   onClick: () => void;
}


export const ActionButton: FC<IActionButtonProps> = ({ text, type, onClick }) => {
   const buttonTitle = type === 'match' ? 'Мэтч' : type === 'message' ? 'Написать сообщение' : '';

   return (
      <button 
         onClick={onClick} 
         title={buttonTitle}
         className={clsx(
            styles.button, 
            type === 'match' && styles.match, 
            type === 'message' && styles.message
         )} 
      >
         {text}
      </button>
   )
}