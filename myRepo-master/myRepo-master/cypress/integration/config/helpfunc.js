let count=1;
let rnd = Math.floor(Math.random() * 10000000);
let now = new Date();
function makeTimeDayLessThan9(hour) {
    return `0${now.getDate() + 1}-0${now.getMonth() + 1}-${now.getFullYear()} ${hour}:${Math.floor(Math.random() * 50 + 10)}`;
}
function makeTimeDayMoreThan9(hour) {
    return `${now.getDate() + 1}-0${now.getMonth() + 1}-${now.getFullYear()} ${hour}:${Math.floor(Math.random() * 50 + 10)}`;
}
function makeTimeSpecial(hour) {
    return `01-0${now.getMonth() + 1}-${now.getFullYear()} ${hour}:${Math.floor(Math.random() * 50 + 10)}`;
}
function scheduleTime() {
    switch (now.getMonth()) {
        case 1:
        case 3:
        case 5:
        case 7:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("08:00");
            }
            else if (now.getDate() < 30) {
                return makeTimeDayMoreThan9("08:00");
            }
            else if (now.getDate() == 31) {
                return makeTimeSpecial("08:00");
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("08:00");
            }
            else if (now.getDate() < 29) {
                return makeTimeDayMoreThan9("08:00");
            }
            else if (now.getDate() == 30) {
                return makeTimeSpecial("08:00");
            }
            //code here
            break;
        case 2:

            if (now.getFullYear() % 100 && now.getFullYear() % 400) {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("08:00");
                }
                else if (now.getDate() < 28) {
                    return makeTimeDayMoreThan9("08:00");
                }
                makeTimeSpecial("08:00");
            }
            else {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("08:00");
                }
                else if (now.getDate() < 27) {
                    return makeTimeDayMoreThan9("08:00");
                }
                return makeTimeSpecial("08:00");
            }
            //code here
            break;
    }
}
function invalidTime(){
    switch (now.getMonth()) {
        case 1:
        case 3:
        case 5:
        case 7:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("07:00");
            }
            else if (now.getDate() < 30) {
                return makeTimeDayMoreThan9("07:00");
            }
            else if (now.getDate() == 31) {
                return makeTimeSpecial("07:00");
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("07:00");
            }
            else if (now.getDate() < 29) {
                return makeTimeDayMoreThan9("07:00");
            }
            else if (now.getDate() == 30) {
                return makeTimeSpecial("07:00");
            }
            //code here
            break;
        case 2:

            if (now.getFullYear() % 100 && now.getFullYear() % 400) {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("07:00");
                }
                else if (now.getDate() < 28) {
                    return makeTimeDayMoreThan9("07:00");
                }
                makeTimeSpecial("07:00");
            }
            else {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("07:00");
                }
                else if (now.getDate() < 27) {
                    return makeTimeDayMoreThan9("07:00");
                }
                return makeTimeSpecial("07:00");
            }
            //code here
            break;
    }
}
exports.scheduleTime=scheduleTime();
exports.rnd=rnd;
exports.count=count;
exports.invalidTime=invalidTime();
