export const dateCalculator = (created) => {
    const currentDate = Date.now();
    const postDate = new Date(created * 1000);

    const dateDifferenceInTime = currentDate - postDate;

    const dateDifferenceInMonths = dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
    const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
    const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
    const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);

    if (dateDifferenceInMonths > 12) {
        return "more than a year ago";
    } else if (dateDifferenceInMonths >= 1) {
        return Math.round(dateDifferenceInMonths) + " months ago";
    } else if (dateDifferenceInDays >= 1) {
        return Math.round(dateDifferenceInDays) + " days ago";
    } else if (dateDifferenceInHours >= 1) {
        return Math.round(dateDifferenceInHours) + " hours ago";
    } else if (dateDifferenceInMinutes >= 1) {
        return Math.round(dateDifferenceInMinutes) + " minutes ago";
    } else {
        return "less than a minute ago";
    }
}