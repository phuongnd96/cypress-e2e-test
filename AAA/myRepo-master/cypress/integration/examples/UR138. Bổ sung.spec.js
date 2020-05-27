import ADMIN from '../PageObjects/Admin';
import * as db from '../config/config';
const admin = new ADMIN();
let dstkadmin = "phuongnd";
let dstkpw = "Tr1@123";
let agentName = "VNPTTEST-DH-qc";
describe("", () => {
    context("Thêm mới người dùng HT", () => {
        beforeEach(() => {
            admin.visitAdminPortal(db.url.portal.admin).doLogin(db.account.admin.username, db.account.admin.pw);
        })
        specify("Thêm mới người dùng ĐSTK thành công", () => {
            let status = true;
            cy.contains('NGƯỜI DÙNG HT').click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlRoleID").select("DSTKADMIN");
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtNewUserNameNew").type(dstkadmin);
            cy.get(`#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPassword`).type(dstkpw).then(() => {
                if (status == true) {
                    cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus").check();
                }
            });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add").click();
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo").invoke('text').then((text) => {
                expect(text).to.contains('thành công.');
            })
        })
    })
    context("Kiểm tra tính năng ĐSTK", () => {
        describe("Màn hình trang chủ", () => {
            beforeEach(() => {
                admin.visitAdminPortal(db.url.portal.admin).doLogin(dstkadmin, dstkpw);
                cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
                    .type(agentName)
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch").as('Tìm kiếm đại lý')
                cy.get("@Tìm kiếm đại lý").click();
            })
            it("Tìm kiếm đại lý", () => {
                cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_txtAgentName").invoke('text').then((text) => {
                    expect(text).to.contains(agentName)
                })
                cy.contains(agentName).parent().parent().within(() => {
                    cy.contains('Mô tả').should('be.visible');
                })
            })
            it("Xem chi tiết đại lý", () => {
                cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand").as("Xem chi tiết");
                cy.get("@Xem chi tiết").click();
            })
            it("Không hiển thị nút Thêm", () => {
                cy.contains("Thêm").should('not.be.visible');
            })
            it("Không hiển thị link thêm người dùng", () => {
                cy.contains('Thêm người dùng').should('not.be.visible');
            })
            it("Không hiển thị nút cập nhật", () => {
                cy.contains('Cập nhật').should('not.be.visible');
            })
            it("Không hiển thị nút Xóa", () => {
                cy.contains('Xóa').should('not.be.visible');
            })

        })
    })
    context("Màn hình gói tin đại lý", () => {
        beforeEach(() => {
            admin.visitAdminPortal(db.url.portal.admin).doLogin(dstkadmin, dstkpw);
        })
        it("Màn hình gói tin đại lý", () => {
            cy.contains("GÓI TIN ĐẠI LÝ").click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAgent").as("Select Agent");
            cy.get("@Select Agent").select(agentName);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdsType").select("QC LBA");
            cy.wait(100); //100ms
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLableType").select('QC-Khác');
            // cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPackageName").type("test9999lba")
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch").as('searchBtn');
            cy.get("@searchBtn").click();
            cy.contains("test9999lba").should('be.visible');
            cy.contains("test9999lba").parent().parent().within(() => {
                cy.contains("Cập nhật").should('not.be.visible');
                cy.contains("Thêm").should('not.be.visible');
                cy.contains("Xóa").should('not.be.visible');
            })
        })
        it("Màn hình gói tin KH thường", () => {
            cy.contains("GÓI TIN KH THƯỜNG").click({ force: true });
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAgent").select(agentName);
            cy.wait(100);
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLableType").select("QC-Khác");
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch").click();
            cy.contains("test9999lba").parent().parent().within(() => {
                cy.contains("Cập nhật").should('not.be.visible');
                cy.contains("Thêm").should('not.be.visible');
                cy.contains("Xóa").should('not.be.visible');
            })
        })
        it("Bổ sung trường mô tả đại lý", () => {
            cy.contains("Mô tả").parent().parent().within(() => {
                cy.get('.txt').should('be.visible');
                cy.contains('(*)').should('not.be.visible');
                cy.get('.txt').type("áadsaasasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssáadsaasasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssáadsaasasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssáadsaasasdasdsssssssssssáadsaasasdasdsssssssssssssssss");
            })
        })
    })
})
describe("Bổ sung tìm kiếm BRN ngoại mạng theo ID", () => {
    beforeEach(() => {
        admin.visitAdminPortal(db.url.portal.admin).doLogin(db.account.admin.username, db.account.admin.pw);
        cy.contains("TRA CỨU NHÃN").click({force:true});
    })
    it("Tìm kiếm BRN ngoại mạng theo ID", () => {
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAgent").select(agentName);
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus").select("Actived");
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnFindLabel").as('Find Label');
        cy.get("@Find Label").click();
    })
})
