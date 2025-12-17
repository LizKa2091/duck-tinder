import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@shared/store/hooks';
import { MessageItem } from '@entities/message/ui/MessageItem';
import { MessageInput } from '@entities/message/ui/MessageInput';

import styles from './MessagesPage.module.scss';

export const MessagesPage: FC = () => {
   const { id } =  useParams();
   const { messages } = useAppSelector((state) => state.messages);

   const currDialogue = messages.find((msg) => msg.id === id);

   if (!id) {
      return <p>Выберите диалог</p>
   }

   if (!currDialogue) {
      return <p>Диалог не найден</p>
   }

   return (
      <div className={styles.container}>
         {currDialogue?.messagesData.length === 0 ? (
            <p>Сообщений пока нет</p>
         ) : (
            currDialogue.messagesData.map((msg) =>
               <MessageItem 
                  key={msg.id} 
                  messageData={msg} 
                  buddyImgUrl={currDialogue.dialogueWithIconUrl}
               />
            )
         )}
         <MessageInput 
            receiver={currDialogue.dialogueWith} 
            receiverIconUrl={currDialogue.dialogueWithIconUrl}
         />
      </div>
   )
}