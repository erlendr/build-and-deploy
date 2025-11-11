import { getSecondsLeftOfYear, getTimeString } from "./clock";

test('getTimeString formats time string correctly', () => {
    const now = new Date(0, 0, 0, 10, 20, 30);
    const timeString = getTimeString(now);
    expect(timeString).toBe('10:20:30');
});

test('getTimeString formats time string correctly for single digits', () => {
    const now = new Date(0, 0, 0, 1, 2, 3);
    const timeString = getTimeString(now);
    expect(timeString).toBe('01:02:03');
});

test('getSecondsLeftOfYear returns the correct amount of seconds', () => {
    const now = new Date("2022-12-31T23:00:00.000Z");
    const timeString = getSecondsLeftOfYear(now);
    expect(timeString).toBe(3600);
});

test('getSecondsLeftOfYear returns the correct amount of seconds and two digit fractions', () => {
    const now = new Date("2022-12-31T23:00:00.120Z");
    const timeString = getSecondsLeftOfYear(now);
    expect(timeString).toBe(3599.88);
});
