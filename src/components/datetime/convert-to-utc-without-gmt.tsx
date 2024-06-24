export const ConvertToUTCStringWithoutGMT = (date: Date) => {
    let isoString = date.toISOString();
    let datePart = isoString.slice(0, 10);  // gets the date part in format yyyy-mm-dd
    let timePart = isoString.slice(11, 19); // gets the time part in format hh:mm:ss
    // Reformat the date part into format similar to what toUTCString provides ('dd Mon yyyy')
    let [year, month, day] = datePart.split('-');
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    datePart = `${day}-${months[Number(month)-1]}-${year}`;
    return `${datePart} ${timePart}`;
}