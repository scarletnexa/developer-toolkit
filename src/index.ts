export function fDate(date: Date): string {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day} ${year}`;
}


export function fTime(date: Date, seconds: boolean = false): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secs = date.getSeconds();

    return `${hours}:${minutes}${seconds ? `:${secs}` : ''}`;
}

export function dateAmmount(date: Date): string {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    const diffDays = Math.round(Math.abs((today.getTime() - date.getTime()) / oneDayMs));
    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Yesterday";
    } else {
        return `${diffDays} days ago`;
    }
}


export function fNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}