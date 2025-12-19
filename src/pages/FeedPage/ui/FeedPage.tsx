import { useState, type FC } from 'react';
import { useSwipeable } from 'react-swipeable';

import { CatCard } from '@entities/cat/ui/cat-card/CatCard';
import { useCat } from '@entities/cat/model/useCat';
import { useCatActions } from '@entities/cat/model/useCatActions';
import { useStartDialogue } from '@entities/dialogue/model/useStartDialogue';

import styles from './FeedPage.module.scss';

export const FeedPage: FC = () => {
   const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

   const { data, isLoading, isError } = useCat();
   const { handleMatch, handleSkip } = useCatActions();
   const { startDialogue } = useStartDialogue();

   const swipeHandlers = useSwipeable({
      onSwipedLeft: () => {
         setSwipeDirection('left');

         setTimeout(() => {
            if (data) handleMatch(data);
            
            setSwipeDirection(null);
         }, 300);
      },
      onSwipedRight: () => {
         setSwipeDirection('right');

         setTimeout(() => {
            handleSkip();
            setSwipeDirection(null);
         }, 300)
      },
      trackMouse: true
   });

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return (
      <div {...swipeHandlers} className={styles.container}>
         <CatCard 
            key={data.catData.id.value}
            catItem={data} 
            onMatch={() => handleMatch(data)} 
            onMessage={() => startDialogue(data)}
            onSkip={handleSkip}
            swipeDirection={swipeDirection}
            {...swipeHandlers}
         />
      </div>
   )
}