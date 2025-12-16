import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@shared/store/hooks';
import { MessageItem } from '@entities/message/ui';

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

   if (currDialogue?.messagesData.length === 0) {
      return <p>Сообщений пока нет</p>
   }

   return (
      <div>
         {currDialogue.messagesData.map((msg) =>
            <MessageItem 
               key={msg.id} 
               messageData={msg} 
               buddyImgUrl={currDialogue.dialogueWithIconUrl}
            />
         )}
      </div>
   )
}