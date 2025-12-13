export interface IDuckUser {
   id: string;
   name: string;
   gender: Gender;
   url: string;
   country: string;
}

export interface IMatch {
   id: string;
   duck: IDuckUser;
   matchDate: Date;
}

export interface IMatchesState {
   matches: IMatch[];
}

export type Gender = 'male' | 'female';

export interface IUserData {
   name: string;
   gender: Gender;
   country: string;
}