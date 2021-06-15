export function toDateTime(secs) {
    let t = new Date(secs*1000);
    return t;
}

export function getDate(secs) {
    const t=toDateTime(secs);
    const options = {month: 'short', day: '2-digit'};
    const res=new Intl.DateTimeFormat('en-GB',options).format(t);
    return res;
}

export function getLongDate(secs) {
    const t=toDateTime(secs);
    const options = {month: 'short', day: '2-digit',year:'numeric'};
    const res=new Intl.DateTimeFormat('en-GB',options).format(t);
    return res;
}

export function getTime(secs) {
    const date=toDateTime(secs);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}