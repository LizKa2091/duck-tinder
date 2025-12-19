import { type FC } from 'react';

import { useAppSelector } from '@shared/store/hooks';
import { MatchItem } from '@entities/cat/ui/match-item';

import styles from './MatchesPage.module.scss';

export const MatchesPage: FC = () => {
   const { matches } = useAppSelector((state) => state.matches);

   return (
      <div className={styles.container}>
         <p className={styles.containerTitle}>Мои мэтчи:</p>
         <div className={styles.itemsContainer}>
            {matches.map((match) => 
               <MatchItem 
                  key={match.cat.catData.id.value} 
                  catImage={match.cat.catImage.url}
                  catData={match.cat}
               />
            )}
         </div>
      </div>
   )
}