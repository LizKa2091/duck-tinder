export const catUserApi = async () => {
   return (await fetch('https://randomuser.me/api')).json();
}