
function formattedDate(date: Date){
   let day, month: string;
   let year: number;

    day = String(date.getDate()).padStart(2, '0');
    month = date.toLocaleDateString('default', {month: 'short'});
    year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export default formattedDate;