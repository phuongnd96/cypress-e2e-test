let now = new Date();
//cần sửa lại hàm schedule time
let scheduleTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
let rnd = Math.floor(Math.random() * 10000000);
let count=1;
if (now.getDate() < 10 && now.getMonth() + 1 < 10) {
    scheduleTime = `0${now.getDate()}-0${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
} else if (now.getDate() > 10) {
    scheduleTime = `${now.getDate()}-0${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
} else if (now.getMonth() + 1 > 10) {
    scheduleTime = `0${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
}
let  invalidTime=`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} 23:${Math.floor(Math.random()*50+10)}`;
exports.scheduleTime=scheduleTime;
exports.rnd=rnd;
exports.count=count;
exports.invalidTime=invalidTime;
