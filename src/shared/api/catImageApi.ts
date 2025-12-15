export const catImageApi = async () => {
   return (await fetch('https://api.thecatapi.com/v1/images/search')).json();
}