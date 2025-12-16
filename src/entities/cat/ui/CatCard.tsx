import { type FC } from 'react';

import { ActionButton } from '@shared/ui/action-button';
import type { ICatItem } from '../types';

import styles from './CardCard.module.scss';

interface ICatCardProps {
   catItem: ICatItem;
   onMatch: () => void;
   onMessage: () => void;
   onSkip: () => void;
}

const CatCard: FC<ICatCardProps> = ({ catItem, onMatch, onMessage, onSkip }) => {
   const { title, first, last } = catItem.catData.name;
   const catFullName: string = title + ' ' + first + ' ' + last;
   
   return (
      <div className={styles.card}>
         <div className={styles.cardData}>
            <img 
               src={catItem.catImage.url} 
               alt={catFullName} 
               className={styles.img}
            />
            <p>{catFullName}</p>
         </div>
         <div className={styles.cardActions}>
            <ActionButton type='match' onClick={onMatch} />
            <ActionButton type='message' onClick={onMessage} />
            <ActionButton text='Пропустить' onClick={onSkip} />
         </div>
      </div>
   )
}

export default CatCard;