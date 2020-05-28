import AGENT from '../PageObjects/Agent';
const user = new AGENT();
import * as db from '../config/config';
let userAddTemplate = (templateContent, sampleMessage, expectedError) => {
    cy.contains('Tải tài liệu hướng dẫn khai báo template theo mẫu mới Tại đây')
        .should('be.visible');
    cy.get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_idFileTemplateNew>a')
        .should('have.attr', 'href', "/AgentUI12/media.ashx?f=/SMS Marketing_Tài liệu HDSD khai báo và quản lý template - Dành cho ĐL.docx");
    cy.contains('Thêm Template').parent().prev().prev().prev().type(templateContent, { parseSpecialCharSequences: false });
    cy.contains('Thêm Template').parent().prev().prev().type(sampleMessage, { parseSpecialCharSequences: false });
    cy.contains('Thêm Template').click();
    cy.contains(`Độ dài template là 0 ký tự.`).should('be.visible');
    cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo").invoke('text').then((text) => {
        console.log(text);
        expect(text).to.equal(expectedError);
    })
    
}
describe("Thêm template mới trên portal", () => {
    context("Khai template khi tạo mới hợp đồng", () => {
        beforeEach(() => {
            let adserName = "Nguyễn Duy Phương";
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
            cy
                .contains("KHAI BÁO HĐ").click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpContract_txtContractNumber").type(db.rnd);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpContract_txtContractName").type(`Test ${db.rnd}`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpContract_txtContractDate").type(db.scheduleTime("/").slice(0, 10));
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpContract_txtStartValidDate").type(db.scheduleTime("/").slice(0, 10));
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpContract_txtEndValidDate").type(db.scheduleTime("/").slice(0, 10));
            cy.get("#__tab_ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpAdser>span").click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpAdser_ddlAdser").select(adserName);
            cy.wait(1000);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpAdser_txtAdserPaper").type(db.rnd);
            cy.get("#__tab_ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel>span").click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_txtLabel").type(`test${db.rnd}`);
            /*
            //Nhóm tin default
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlLabelType").select(`YTE,GD`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlLabelTypeMobifone").select(`YTE, GD`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlLabelTypeViettel").select(`YTE, GD`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlLabelTypeGtel").select(`CSKH`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlLabelTypeVnm").select(`CSKH`);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ddlFooterLabelTypeITel").select(`CSKH`);
            */
            let adserNameAlias = "phuongQA";
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_txtCustomer").type(adserNameAlias);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_txtTaxCode").scrollIntoView().type(db.rnd);
            cy.fixture("shiba.png", 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then(fileContent => {
                    cy
                        .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_fileUploadFooterHoSo')
                        .attachFile({
                            fileContent,
                            fileName: "shiba.png",
                            mimeType: 'image/png'
                        });
                    cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_txtExpiredDate").type(db.scheduleTime("/").slice(0, 10));
                    cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel_grvLabel_ctl03_ButtonAddLabel").scrollIntoView().click();
                    cy.get("#__tab_ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpTemplate > span").click()
                })
        })
        it("Thêm template thành công", () => {
            userAddTemplate("{A,10} test", "phuong test", "");
            userAddTemplate("{A,10} test", "H1 !_lo test", "");
            userAddTemplate(`\\{qa\\} test {B,10}`, `{qa} test 1.3.5`, "");
            userAddTemplate("{C,10} test", "1.a3!* test ", "");
            userAddTemplate(`\\\\{qa\\\\} test {D,10}`, `\\{qa\\} test ár135!*`, "");
            userAddTemplate("{D,20} test", "Hello á 1@*! test", "");
            cy.contains("Thêm mới hợp đồng").click({force:true});
        })
    });
    context("Khai template khi sửa hợp đồng", () => {
        beforeEach(() => {
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        })
        it("Thêm mới template loại A thành công", () => {
            user.addTemplate('{A,30} test123', 'p1!@#$%^&*( ),/`" test123', 'Thêm mới template thành công.');
        })
        it("Thêm mới template loại B thành công", () => {
            user.addTemplate('{B,30} test123', '1.2 test123', "Thêm mới template thành công.");
        })
        it("Thêm mới template loại C thành công", () => {
            user.addTemplate('{C,30} test123', 'p1!@#$%^&*(.),/`" test123', 'Thêm mới template thành công.');
        })
        it("Thêm mới template loại D thành công", () => {
            user.addTemplate('{D,20} test123', 'p1!@#$%^&*(á),/`" test123', 'Thêm mới template thành công.');
        })
        it("5 tham số mỗi loại", () => {
            user.addTemplate('{A,10}test{A,10}test{A,10}test{A,10}test{A,10}test {B,10}test{B,10}test{B,10}test{B,10}test{B,10}test {C,10}test{C,10}test{C,10}test{C,10}test{C,10}test {D,10}test{D,10}test{D,10}test{D,10}test{D,10}test', 'a12!testa12!testa12!testa12!testa12!test1.2.3test1.2.3test1.2.3test1.2.3test1.2.3test1a.2!test1a.2!test1a.2!test1a.2!test1a.2!testa. 12testa. 12testa. 12testa. 12testa. 12testa.', 'Thêm mới template thành công.');
        })
        it("Template chứa từ khóa chặn", () => {
            user.addTemplate('{D,10} Acetorphine', 'test123 Acetorphine', 'Từ khóa Etorphine không được sử dụng');
        })
    })
})
