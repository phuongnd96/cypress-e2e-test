const fs = require('fs')
let readFileByCreatedDate = (dir) => {
    function createdDate(file) {
        const { birthtime } = fs.statSync(file)
        return birthtime.toLocaleDateString() + " " + birthtime.toLocaleTimeString();
    }
    let dirList = [];
    return new Promise (function(resolve,reject){
        fs.readdir(dir, function (e, files) {
           if (e) {
               reject(e);
           }
           files.forEach(function (file) {
               if (/template_uploaded/.test(file) === true) {
                   dirList.push({
                       fileName: dir + file
                       , createdDate: createdDate(dir + file)
                   });
               }
           });
           const byDate = dirList.slice(0);
           byDate.sort(function (a, b) {
               return b.createdDate.localeCompare(a.createdDate);
           });
            resolve(byDate[0]);
       })
    })
}
let dirName = "C:\\Users\\LapTop\\Downloads\\";
readFileByCreatedDate(dirName).then((res)=>{
    console.log(res);
})
