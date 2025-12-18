import { useMemo, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { DialogueItem } from '@entities/dialogue/ui/DialogueItem';
import { useAppSelector } from '@shared/store/hooks';
import type { IDialoguesStateItem } from '@entities/user/types';

import styles from './DialoguePage.module.scss';

export const DialoguePage: FC = () => {
   const { dialogues } = useAppSelector((state) => state.dialogues);
   const navigate = useNavigate();

   const sortedDialogues = useMemo(() => {
      return [...dialogues].sort((a, b) => {
         const getLastMessageTime = (dialogue: IDialoguesStateItem) => {
            if (!dialogue.messagesData.length) return 0;

            return Math.max(...dialogue.messagesData.map(msg => +msg.timeStamp));
         };
         
         const timeA = getLastMessageTime(a);
         const timeB = getLastMessageTime(b);
         
         return timeB - timeA;
      });
   }, [dialogues]);

   if (!sortedDialogues.length) {
      return <p>У вас пока нет диалогов</p>
   }

   return (
      <div className={styles.container}>
         {sortedDialogues.map((dialogue) => 
            <DialogueItem 
               key={dialogue.id}
               dialogueId={dialogue.id}
               dialogueWith={dialogue.dialogueWith}
               iconUrl={dialogue.dialogueWithIconUrl}
               onClick={() => navigate(`/dialogue/${dialogue.id}`)}
            />
         )}
      </div>
   )
}