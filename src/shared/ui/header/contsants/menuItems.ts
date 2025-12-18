interface IMenuItems {
   id: string;
   label: string;
   path: string;
}

export const menuItems: IMenuItems[] = [
   {
      id: 'main',
      label: 'Главная',
      path: '/'
   },
   {
      id: 'messages',
      label: 'Сообщения',
      path: '/dialogue'
   },
   {
      id: 'matches',
      label: 'Мэтчи',
      path: '/matches'
   }
]