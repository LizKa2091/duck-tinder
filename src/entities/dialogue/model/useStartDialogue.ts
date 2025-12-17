import { useNavigate } from "react-router-dom";
import { useCatActions } from "@entities/cat/model/useCatActions";
import type { ICatItem } from "@entities/cat/types";

export const useStartDialogue = () => {
   const navigate = useNavigate();
   const { handleDialogue } = useCatActions();

   const startDialogue = (cat: ICatItem) => {
      handleDialogue(cat);

      const { title, first, last } = cat.catData.name;

      navigate(`/dialogue/${title + first + last}`);
   }

   return { startDialogue }
}