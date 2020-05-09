import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();

describe(`UR 134 
3.1, Cho phép agent reject template đã được phê duyệt
3.4, Sửa tên trường “Ngày hiệu lực giấy tờ” thành “Ngày hết hiệu lực giấy tờ”.
`, () => {

    context("3.1, Cho phép Agent reject template đã được phê duyệt", () => {
        beforeEach(() => {
            agent
                .visitAgentPortal("http://10.84.70.164/AgentUI134/Home.aspx")
                .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");
        })
        specify("Kiem tra giao dien + checkable checkbox", () => {
            cy
                .contains("SỬA HỢP ĐỒNG")
                .click({ force: true })
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl03_btnEditTemplate")
                .click()
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject").as('rejectButton')
            cy.get('@rejectButton')
                .should('be.visible');
            //check
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr>td:nth-child(1)>input")
                .each(($el, index, $list) => {
                    cy.wrap($el).click()
                })
            //uncheck
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr>td:nth-child(1)>input")
                .each(($el, index, $list) => {
                    cy.wrap($el).click()
                })
        })
        specify("Kiểm tra text trên popup xác nhận", () => {
            //a way to deal with window confirm
            let stub = cy.stub();
            cy.on('window:confirm', stub);
            cy
                .contains("SỬA HỢP ĐỒNG")
                .click({ force: true })
                //Sua hop dong -> Template
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl04_btnEditTemplate")
                .click()
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject").as('rejectButton')
            cy.get('@rejectButton')
            //reject template thu 2
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr>td:nth-child(1):eq(1)").find('input')
                .each(($el) => {
                    cy.wrap($el).click()
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject").click().then(() => {
                            expect(stub.getCall(0)).to.be.calledWith('Bạn có chắc chắn muốn Reject không?');
                            cy.contains("Reject thành công").should('be.visible');
                        })
                })

        })

        specify("Chọn reject template rồi ấn hủy", () => {
            //dealing with windowm confirm, better
            cy.on('window:confirm', str => {
                expect(str === `Bạn có chắc chắn muốn Reject không?`).to.be.true;
                return false;
            });
            cy
                .contains("SỬA HỢP ĐỒNG")
                .click({ force: true })
                //Sua hop dong -> Template
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl04_btnEditTemplate")
                .click()
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject").as('rejectButton')
            cy.get('@rejectButton')
            //reject template thu 2
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr>td:nth-child(1):eq(3)").find('input').click()

        })

        specify("check all", () => {
            cy
                .contains("SỬA HỢP ĐỒNG")
                .click({ force: true })
                //Sua hop dong -> Template
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl04_btnEditTemplate")
                .click()
                .get("#chkAll").check().wait(500).uncheck()
        })
    })

    context(`3.4, Sửa tên trường “Ngày hiệu lực giấy tờ” thành “Ngày hết hiệu lực giấy tờ”.`, () => {

        context("Admin portal", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal("http://10.84.70.164:8098/Home.aspx")
                    .doLogin("test852017", "Admin@123");
            })
            specify(`Màn hình kiểm duyệt nhãn của admin`, () => {
                cy
                    .contains("DUYỆT NHÃN")
                    .click({ force: true })
                cy
                    .contains("Ngày hết hiệu lực giấy tờ")
                    .should('be.visible')
            })
        })
        context("Agent portal", () => {
            beforeEach(() => {
                agent
                    .visitAgentPortal("http://10.84.70.164/AgentUI134/Home.aspx")
                    .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123")
            })
            it("Màn hình sửa hợp đồng", () => {
                cy
                    .contains("SỬA HỢP ĐỒNG")
                    .click({ force: true })
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditLabel")
                    .click()
                cy
                    .contains("Ngày hết hiệu lực giấy tờ")
                    .scrollIntoView()
                    .should('be.visible');
            })
            it("Màn hình khai báo hợp đồng", () => {
                cy
                    .contains("KHAI BÁO HĐ")
                    .click({ force: true })
                    .get("#__tab_ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_tpLabel")
                    .click()
                cy
                    .contains("Ngày hết hiệu lực giấy tờ")
                    .scrollIntoView()
                    .should('be.visible')
            })
        })
    })
    context.only("FIx lỗi LBA không ghi nhận log", () => {
        context("Agent tao chien dich", () => {
            beforeEach(() => {
                agent
                    .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
                    .doLogin("accDL_testphuongQC", "Tr1@123")
            })
            it("Agent tao chien dich LBA", () => {
                agent
                    .createLBA("LBAPHUONG_6", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
            })
            it("Agent tao chien dich LBA", () => {
                agent
                    .createLBA("LBAPHUONG_7", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
            })
            it("Agent tao chien dich LBA", () => {
                agent
                    .createLBA("LBAPHUONG_8", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
            })
            it("Agent tao chien dich LBA", () => {
                agent
                    .createLBA("LBAPHUONG_9", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
            })
        })
        context("Admin resolve chien dich", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal("http://10.84.70.164:8098/Home.aspx")
                    .doLogin("test852017", "Admin@123")
            })
            it("Admin reject", () => {
                admin
                    .resolveLBA(["LBAPHUONG_6", "LBAPHUONG_7"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
            })
            it("Admin approve", () => {
                admin
                    .resolveLBA(["LBAPHUONG_8", "LBAPHUONG_9"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", true)
            })
        });
    })

})



