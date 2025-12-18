import { useAppSelector } from "@shared/store/hooks";

export const useLastMessageDate = (dialogueId: string): string | null => {
   const { dialogues } = useAppSelector((state) => state.dialogues);

   const currDialogueData = dialogues.find((dialogue) => dialogue.id === dialogueId);

   if (!currDialogueData || currDialogueData.messagesData.length === 0) {
      return null
   }

   const lastMsg = currDialogueData.messagesData.reduce((latest, curr) => {
      const currTime = +curr.timeStamp;
      const latestTime = +latest.timeStamp;

      return currTime > latestTime ? curr : latest;
   });

   return lastMsg.timeStamp;
}