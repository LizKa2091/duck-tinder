import { useQuery } from "@tanstack/react-query";
import { catImageApi } from "@shared/api/catImageApi";
import { catUserApi } from "@shared/api/catUserApi";
import type { ICatItem } from "../types";

export const useCat = () => useQuery({
   queryKey: ['catData'],
   queryFn: async (): Promise<ICatItem> => {
      const [image, catData] = await Promise.all([
         catImageApi(),
         catUserApi()
      ]);

      return { catImage: image[0], catData: catData.results[0] }
   },
   retry: 1
})