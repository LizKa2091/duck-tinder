import { type FC } from 'react';

import { ActionButton } from '@shared/ui/action-button';
import { useStartDialogue } from '@entities/dialogue/model/useStartDialogue';
import type { ICatItem } from '@entities/cat/types';

import styles from './MatchItem.module.scss';

interface IMatchItemProps {
   catImage: string;
   catData: ICatItem;
}

export const MatchItem: FC<IMatchItemProps> = ({ catImage, catData }) => {
   const { startDialogue } = useStartDialogue();
   const { title, first, last } = catData.catData.name;
   const fullCatName: string = title + ' ' + first + ' ' + last;

   return (
      <div className={styles.container}>
         <div className={styles.imgWrapper}>
            <img src={catImage} alt={`${fullCatName} image`} className={styles.img} />
         </div>
         <div className={styles.catName}>
            <p>{fullCatName}</p>
         </div>
         <ActionButton type='message' onClick={() => startDialogue(catData)} />
      </div>
   )
}