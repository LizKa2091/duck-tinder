import { type FC } from 'react';

import { CatCard } from '@entities/cat/ui/cat-card/CatCard';
import { useCat } from '@entities/cat/model/useCat';
import { useCatActions } from '@entities/cat/model/useCatActions';
import { useStartDialogue } from '@entities/dialogue/model/useStartDialogue';

export const FeedPage: FC = () => {
   const { data, isLoading, isError } = useCat();
   const { handleMatch, handleSkip } = useCatActions();
   const { startDialogue } = useStartDialogue();

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return (
      <CatCard 
         key={data.catData.id.value}
         catItem={data} 
         onMatch={() => handleMatch(data)} 
         onMessage={() => startDialogue(data)}
         onSkip={handleSkip}
      />
   )
}