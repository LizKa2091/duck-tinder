export const formatMessageDate = (timestamp: string | number): string => {
   const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
   const now = new Date();
   const isToday = date.toDateString() === now.toDateString();
   
   if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
   } 
   else {
      return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
   }
};