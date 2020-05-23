const fs = require('fs');
// Require library
var excel = require('excel4node');
function createXLSX(sheetIndex, A1,B1,C1,A2,B2,C2,fileName) {
    var workbook = new excel.Workbook();
    var worksheet = workbook.addWorksheet(sheetIndex);
    //Set value of cell A1
    worksheet.cell(1, 1).string(A1);
    // Set value of cell B1
    worksheet.cell(1, 2).string(B1);
    // Set value of cell C1
    worksheet.cell(1, 3).string(C1);
    // Set value of cell A2
    worksheet.cell(2, 1).number(A2);
    worksheet.cell(2, 2).string(B2);
    worksheet.cell(2, 3).string(C2);
    workbook.write(`auto${fileName}.xlsx`);
}
createXLSX('Sheet 1','ID BRN','Template','Tin nhắn mẫu',100248,'t {D}','t 1 á !*','Dsuccess');
// Create a new instance of a Workbook class
// var workbook = new excel.Workbook();
// // Add Worksheets to the workbook
// var worksheet = workbook.addWorksheet('Sheet 1');
// // Set value of cell A1
// worksheet.cell(1, 1).string('ID BRN');
// // Set value of cell B1
// worksheet.cell(1, 2).string('Template');
// // Set value of cell C1
// worksheet.cell(1, 3).string('Tin nhắn mẫu');
// // Set value of cell A2
// worksheet.cell(2, 1).number('100264');
// worksheet.cell(2, 2).string('abc {B,10}');
// worksheet.cell(2, 3).string('abc a1kk');
// workbook.write('abcB10.xlsx');


// const path = './file.xls'
// //  fs.unlink(path, (err) => {
// //     if (err) {
// //       console.error(err)
// //       return
// //     }
// //     console.log('success');
// //   })



