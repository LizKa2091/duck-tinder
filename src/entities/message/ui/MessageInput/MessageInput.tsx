import { useState, type FC } from 'react';
import { useAppDispatch } from '@shared/store/hooks';
import { sendMessage } from '@entities/user/model/messagesSlice';

import styles from './MessageInput.module.scss';

interface IMessageInputProps {
   receiver: string;
   receiverIconUrl: string;
}

export const MessageInput: FC<IMessageInputProps> = ({ receiver, receiverIconUrl }) => {
   const dispatch = useAppDispatch();
   const [inputValue, setInputValue] = useState<string>('');

   const handleSendMessage = () => {
      if (!inputValue.trim()) return;

      const messageData = {
         sender: 'you',
         receiver,
         message: inputValue,
         receiverIconUrl
      }

      dispatch(sendMessage(messageData));
   }

   return (
      <div className={styles.container}>
         <input 
            name='message' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Введите сообщение' 
            className={styles.input} 
         />
         <button onClick={handleSendMessage} className={styles.button}>
            &gt;
         </button>
      </div>
   )
}