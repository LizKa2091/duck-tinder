import { type FC } from 'react';

import { DialogueItem } from '@entities/dialogue/ui/DialogueItem';
import { useAppSelector } from '@shared/store/hooks';

import styles from './DialoguePage.module.scss';

export const DialoguePage: FC = () => {
   const { messages } = useAppSelector((state) => state.messages)

   if (!messages.length) {
      return <p>У вас пока нет диалогов</p>
   }

   return (
      <div className={styles.container}>
         {messages.map((dialogue) => 
            <DialogueItem 
               key={dialogue.id}
               dialogueId={dialogue.id}
               dialogueWith={dialogue.dialogueWith}
               iconUrl={dialogue.dialogueWithIconUrl}
               onClick={() => {}}
            />
         )}
      </div>
   )
}