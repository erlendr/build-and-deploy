const pad = (num) => num.toString().padStart(2, '0');

export const getTimeString = (now) => {
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    return `${pad(hour)}:${pad(minute)}:${pad(seconds)}`
}

const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}
