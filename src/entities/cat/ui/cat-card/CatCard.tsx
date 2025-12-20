import { useState, type FC } from 'react';
import clsx from 'clsx';

import { ActionButton } from '@shared/ui/action-button';
import type { ICatItem } from '../../types';

import styles from './CatCard.module.scss';

interface ICatCardProps {
   catItem: ICatItem;
   onMatch: () => void;
   onMessage: () => void;
   onSkip: () => void;
   swipeDirection?: 'left' | 'right' | null;
}

export const CatCard: FC<ICatCardProps> = ({ catItem, onMatch, onMessage, onSkip, swipeDirection }) => {
   const [isMatched, setIsMatched] = useState<boolean>(false);

   const { title, first, last } = catItem.catData.name;
   const catFullName: string = title + ' ' + first + ' ' + last;
   const isAnimating = !!swipeDirection;

   const handleMatch = () => {
      onMatch();
      setIsMatched(true);
   }

   return (
      <div className={clsx(
         styles.card,
         isAnimating && swipeDirection === 'left' && styles.swipeLeft,
         isAnimating && swipeDirection === 'right' && styles.swipeRight
      )}>
         <div className={styles.cardData}>
            <div className={styles.imgContainer}>
               <img 
                  src={catItem.catImage.url} 
                  alt={catFullName} 
                  className={styles.img}
               />
            </div>
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