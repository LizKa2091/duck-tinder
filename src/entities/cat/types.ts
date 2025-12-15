export interface ICatItem {
   catData: ICatData;
   catImage: { url: string };
}

export interface ICatData {
   id: { value: string };
   gender: 'male' | 'female';
   name: { title: string; first: string; last: string };
}