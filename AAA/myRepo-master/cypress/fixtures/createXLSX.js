const fs = require('fs');
var excel = require('excel4node');
createXLSXFile() {
    function createXLSX(sheetIndex, SDT, Nộidung,fileName) {
      var workbook = new excel.Workbook();
      var worksheet = workbook.addWorksheet(sheetIndex);
      //Set value of cell A1
      worksheet.cell(1, 1).string("SĐT");
      // Set value of cell B1
      worksheet.cell(1, 2).string("Nội dung");
      // Set value of cell A2
      worksheet.cell(2, 1).number(SDT);
      //Set value of cell B2
      worksheet.cell(2, 2).string(Nộidung);
      workbook.write(`auto${fileName}.xlsx`);
    }
    createXLSX('Sheet 1', 'ID BRN', 'Template', 'Tin nhắn mẫu', 100248, 't {D}', 't 1 á !*', 'Dsuccess');
  }

  