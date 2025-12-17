import { type FC } from 'react';
import clsx from 'clsx';

import { formatMessageDate } from '@shared/lib/dateFormatter';
import type { IMessageData } from '@entities/user/types';

import styles from './MessageItem.module.scss';
import profileIcon from '@shared/assets/profileIcon.png';

interface IMessageItemProps {
   messageData: IMessageData;
   buddyImgUrl: string;
}

export const MessageItem: FC<IMessageItemProps> = ({ messageData, buddyImgUrl }) => {
   const { message, sender, timeStamp } = messageData;
   const isSentFromYou = sender === 'you';
   
   return (
      <div className={clsx(styles.messageContainer, isSentFromYou ? styles.you : styles.buddy)}>
         <img src={isSentFromYou ? profileIcon : buddyImgUrl} alt='avatar' className={styles.avatar} />
         <div className={styles.messageData}>
            <p>{sender}</p>
            <p>{message}</p>
            <p>{formatMessageDate(timeStamp)}</p>
         </div>
      </div>
   )
}