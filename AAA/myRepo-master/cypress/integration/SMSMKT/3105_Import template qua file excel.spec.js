import AGENT from '../PageObjects/Agent';
import * as db from '../config/config';
const user = new AGENT();
function userImportFiledNCheckResult(contractName, fileName, filePath, brnID, brn, templateContent, sampleMessage, expectedResult, expectError) {
    user.importTemplate(
        contractName
        , fileName
        , filePath
    );
    user.findResultFile('C:\\Users\\LapTop\\Downloads\\').then((fileName) => {
        console.log(fileName);
        let content = [];
        user.checkUploadResult(fileName)
        .then((fileContent) => {
            fileContent.Strings.forEach(el => {
                content.push(el.raw.replace(/<t>|<\/t>/g, ""));
            });
            return content;
        }).then((fileContent) => {
            console.log(fileContent);
            expect(fileContent[0]).to.equal('ID Nhãn');
            expect(fileContent[1]).to.equal('Nhãn');
            expect(fileContent[2]).to.equal('ID template');
            expect(fileContent[3]).to.equal('Template');
            expect(fileContent[4]).to.equal('Tin nhắn mẫu');
            expect(fileContent[5]).to.equal('Kết quả import');
            expect(fileContent[6]).to.equal('Lỗi');
            expect(fileContent[7]).to.equal(brnID);
            console.log(fileContent[8])
            if (expectedResult == "Thành công") {
                expect(fileContent[8]).to.equal(brn);
                expect(fileContent[9]%1).to.equal(0);
                expect(fileContent[10]).to.equal(templateContent);
                expect(fileContent[11]).to.equal(sampleMessage);
                expect(fileContent[12]).to.equal(expectedResult);
                expect(fileContent[13]).to.equal("");
            }
            else if (expectError == "ID Nhãn không hợp lệ") {
                expect(fileContent[8]).to.equal("");
                expect(fileContent[10]).to.equal(sampleMessage);
                expect(fileContent[11]).to.equal(expectedResult);
                expect(fileContent[12]).to.equal(expectError);
            }
            else if (expectError == "Vui lòng nhập đúng định dạng tham biến.") {
                expect(fileContent[8]).to.equal(brn);
                expect(fileContent[9]).to.equal("");
                expect(fileContent[10]).to.equal(templateContent);
                expect(fileContent[11]).to.equal(sampleMessage);
                expect(fileContent[12]).to.equal(expectedResult);
                expect(fileContent[13]).to.equal(expectError);
            }
            else if(expectError=="Tin nhắn mẫu không đúng định dạng tham biến."){
                expect(fileContent[8]).to.equal(brn);
                expect(fileContent[9]).to.equal("");
                expect(fileContent[10]).to.equal(templateContent);
                expect(fileContent[11]).to.equal(sampleMessage);
                expect(fileContent[12]).to.equal(expectedResult);
                expect(fileContent[13]).to.equal(expectError);
            }
            else if (expectError == "Số tham biến vượt quá số lượng quy định") {

            }
            else if (expectError == "Thiếu thông tin ") {

            }
            else if (expectError == "Template và tin nhắn mẫu không khớp nhau.") {
                expect(fileContent[8]).to.equal(brn);
                expect(fileContent[9]).to.equal("");
                expect(fileContent[10]).to.equal(templateContent);
                expect(fileContent[11]).to.equal(sampleMessage);
                expect(fileContent[12]).to.equal(expectedResult)
                expect(fileContent[13]).to.equal(expectError);
            }
            else if (expectError=="Từ khóa Etorphine không được sử dụng"){
                expect(fileContent[8]).to.equal(brn);
                expect(fileContent[9]).to.equal("");
                expect(fileContent[10]).to.equal(templateContent);
                expect(fileContent[11]).to.equal(sampleMessage);
                expect(fileContent[12]).to.equal(expectedResult)
                expect(fileContent[13]).to.equal(expectError);
            }

        })
    })
    user.findResultFile('C:\\Users\\LapTop\\Downloads\\').then((file)=>{
        cy.task('deleteFile',file);
    })
}
describe("Import template qua file excel", () => {
    context("Đại lý VTTP import template qua file excel", () => {
        beforeEach(() => {
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        })
        it("sai BRN", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "invalidBRN.xlsx"
                , "invalidBRN.xlsx"
                , "131887"
                , "TEST2020"
                , "{A,-10}"
                , "testA1"
                , "Thất bại"
                , "ID Nhãn không hợp lệ"
            );
        });
        it("{A,-10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{A,-10}.xlsx"
                , "{A,-10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{A,-10}"
                , "testA1"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{B,-10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{B,-10}.xlsx"
                , "{B,-10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{B,-10}"
                , "testB1"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{C,-10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{C,-10}.xlsx"
                , "{C,-10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{C,-10}"
                , "testC1"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{D,-10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{D,-10}.xlsx"
                , "{D,-10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{D,-10}"
                , "testD1"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{D}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{D}.xlsx"
                , "{D}.xlsx"
                , "131887"
                , "TEST2020"
                , "{D}"
                , "á 1!(a^{"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{A.10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{A.10}.xlsx"
                , "{A.10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{A.10}"
                , "testA2"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{B.10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{B.10}.xlsx"
                , "{B.10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{B.10}"
                , "testB2"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{C.10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{C.10}.xlsx"
                , "{C.10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{C.10}"
                , "testC2"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{D.10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{D.10}.xlsx"
                , "{D.10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{D.10}"
                , "testD2"
                , "Thất bại"
                , "Vui lòng nhập đúng định dạng tham biến."
            );
        })
        it("{A,10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{A,10}.xlsx"
                , "{A,10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{A,10}"
                , "a.b.c"
                , "Thất bại"
                , "Tin nhắn mẫu không đúng định dạng tham biến."
            );
        })
        it("{B,10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{B,10}.xlsx"
                , "{B,10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{B,10}"
                , "aaa"
                , "Thất bại"
                , "Tin nhắn mẫu không đúng định dạng tham biến."
            );
        })
        it("{C,10}", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "{C,10}.xlsx"
                , "{C,10}.xlsx"
                , "131887"
                , "TEST2020"
                , "{C,10}"
                , "a bc"
                , "Thất bại"
                , "Tin nhắn mẫu không đúng định dạng tham biến."
            );
        });
        it("Sai số lượng kí tự truyền vào tham biến thứ 2", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "2ndparamswrong.xlsx"
                , "2ndparamswrong.xlsx"
                , "131887"
                , "TEST2020"
                , "Xin chao {A,10} test {B,10} def"
                , "Xin chao 1a3 test abc def"
                , "Thất bại"
                , "Tin nhắn mẫu không đúng định dạng tham biến."
            );
        });
        it("Tin nhắn mẫu không khớp với template", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "auto58.xlsx"
                , "auto58.xlsx"
                , "131887"
                , "TEST2020"
                , "đây là tin nhắn {A,10} của {C,10}"
                , "Xin chào, đây là tin nhắn test của phương"
                , "Thất bại"
                , "Template và tin nhắn mẫu không khớp nhau."
            );
        });
        it("Template chứa từ khóa chặn", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "autotemplatekeyword.xlsx"
                , "autotemplatekeyword.xlsx"
                , "131887"
                , "TEST2020"
                , "Acetorphine {A,10}"
                , "Acetorphine t"
                , "Thất bại"
                , "Từ khóa Etorphine không được sử dụng"
            );
        });
        it("A thành công", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "autoAsuccess.xlsx"
                , "autoAsuccess.xlsx"
                , "131887"
                , "TEST2020"
                , "{A,10}"
                , "Test !á"
                , "Thành công"
                , ""
            );
        });
        it("B thành công", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "autoBsuccess.xlsx"
                , "autoBsuccess.xlsx"
                , "131887"
                , "TEST2020"
                , "test {B,10}"
                , "test .12"
                , "Thành công"
                , ""
            );
        });
        it("C thành công", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "autoCsuccess.xlsx"
                , "autoCsuccess.xlsx"
                , "131887"
                , "TEST2020"
                , "t {C,10}"
                , "t 1.2!á"
                , "Thành công"
                , ""
            );
            
        });
        it("D thành công", () => {
            userImportFiledNCheckResult(
                "26082014/VNPT-DH-test"
                , "autoDsuccess.xlsx"
                , "autoDsuccess.xlsx"
                , "131887"
                , "TEST2020"
                , "t {D,10}"
                , "t 1!* á"
                , "Thành công"
                , ""
            );
            
        });
    })
})
