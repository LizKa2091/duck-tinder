import { useState, type FC } from 'react';

import { ActionButton } from '@shared/ui/action-button';
import type { ICatItem } from '../../types';

import styles from './CatCard.module.scss';

interface ICatCardProps {
   catItem: ICatItem;
   onMatch: () => void;
   onMessage: () => void;
   onSkip: () => void;
}

export const CatCard: FC<ICatCardProps> = ({ catItem, onMatch, onMessage, onSkip }) => {
   const [isMatched, setIsMatched] = useState<boolean>(false);
   const { title, first, last } = catItem.catData.name;
   const catFullName: string = title + ' ' + first + ' ' + last;

   const handleMatch = () => {
      onMatch();
      setIsMatched(true);
   }

   return (
      <div className={styles.card}>
         <div className={styles.cardData}>
            <img 
               src={catItem.catImage.url} 
               alt={catFullName} 
               className={styles.img}
            />
            <p className={styles.name}>{catFullName}</p>
         </div>
         <div className={styles.cardActions}>
            <ActionButton type='match' onClick={handleMatch} disabled={isMatched} />
            <ActionButton type='message' onClick={onMessage} />
            <ActionButton text='Дальше' onClick={onSkip} />
         </div>
         <div className={styles.swipeTips}>
            <p>Свайп вправо для перехода дальше</p>
            <p>Свайп влево для мэтча</p>
         </div>
      </div>
   )
}