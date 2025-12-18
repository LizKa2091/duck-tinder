import { useAppDispatch } from "@shared/store/hooks";
import { addToMatches } from "@entities/user/model/matchesSlice";
import { createDialogue } from "@entities/user/model/dialoguesSlice";
import type { ICatItem } from "../types";
import { useQueryClient } from "@tanstack/react-query";

export const useCatActions = () => {
   const dispatch = useAppDispatch();
   const queryClient = useQueryClient();

   const handleMatch = (data: ICatItem) => {
      if (!data) return;

      dispatch(addToMatches({ cat: data }))
   }

   const handleDialogue = (data: ICatItem) => {
      if (!data) return;
      
      const { title, first, last } = data.catData.name;

      const dialogueData = {
         dialogueWith: title + first + last,
         dialogueWithIconUrl: data.catImage.url,
      }

      dispatch(createDialogue(dialogueData));
   }

   const handleSkip = () => {
      queryClient.invalidateQueries({ queryKey: ['catData'] })
   }

   return { handleMatch, handleDialogue, handleSkip }
}