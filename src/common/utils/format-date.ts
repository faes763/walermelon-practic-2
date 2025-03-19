// import { format, isToday, parseISO } from 'date-fns';
// import { ru } from 'date-fns/locale';

// export const formatDate = (dateString: string): string => {
//     const date = parseISO(dateString).toString();
    
//     if (isToday(date == "Invalid Date" ? dateString : date) ) {
//         return 'Today';
//     }
//     return format(date == "Invalid Date" ? dateString : date, 'd MMMM', 
//         {locale: ru}
//     );
// };

// export const formatDateFull = (dateString: string): string => format(parseISO(dateString), 'HH:mm MMM d, yyyy', 
// // {locale: ru}
// );

// export const formatHHMinute = (dateString: string | Date): string => {
//     return format(parseISO(dateString.toString()).toString() == "Invalid Date" ? dateString : parseISO(dateString.toString()), 'HH:mm', 
//     // {locale: ru}
//     );
// }


// export const secondsToTime = (seconds: number) => {
//     const days = Math.floor(seconds / (24 * 3600));
//     seconds %= 24 * 3600;
//     const hours = Math.floor(seconds / 3600);
//     seconds %= 3600;
//     const minutes = Math.floor(seconds / 60);

//     let result = '';
//     if (days > 0) result += `${days}D `;
//     if (hours > 0) result += `${hours}ч `;
//     if (minutes > 0) result += `${minutes}м`;
//     if(seconds === 0) result += "0c";

//     return result.trim();
// };


// export function formatTime(value: number): string {
//     return value.toString().padStart(2, '0');
// }