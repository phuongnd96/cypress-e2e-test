class Admin {

    visitAdminPortal(url) {
        cy
            .visit(url, { retryOnNetworkFailure: true });
        return this;

    };
    doLogin(username, password) {
        cy
            .get("#ctl00_ContentPlaceHolder2_usrname")
            .type(username)
            .get("#ctl00_ContentPlaceHolder2_pass")
            .type(password)
            .get("#ctl00_ContentPlaceHolder2_submit")
            .click()
        return this;

    };

    approveBrandName(brn) {
        cy
            .contains("DUYỆT NHÃN").click({ force: true })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtKeyword")
            .as("brnTextbox")
        cy
            .get("@brnTextbox")
            .type(brn)
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch").as("searchBtn")
        cy
            .get("@searchBtn")
            .click()
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox').as('chooseThisBrn')
        cy
            .get("@chooseThisBrn")
            .click()
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnApprove')
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
        return this;

    };

    approveTemplate(templateID) {
        cy
            .contains("DUYỆT TEMPLATE")
            .click({ force: true })
            //nhập template
            .get("ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtIDTemplate")
            .type(templateID)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select("Rejected")
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnApprove")
            .click();
        return this
    };
    rejectBrandNameVinaphone(brn) {
        cy
            .contains("DUYỆT NHÃN")
            .click({ force: true })
            //điền tên nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtKeyword")
            .type(brn)
            //Trạng thái nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select("Actived")
            //Tìm nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_txtLabelName")
            .invoke('text').then((text) => {
                if (text === brn) {
                    cy
                        .get("[type='button'][value='Reject']")
                        .click();
                }
            })
        return this
    };

    rejectTemplate(templateID) {
        cy
            .contains("DUYỆT TEMPLATE")
            .click({ force: true })
            //nhập template
            .get("ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtIDTemplate")
            .type(templateID)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select("Actived")
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject")
            .click();
        return this;
    };

    create_vinaphone_keyword(vinaphoneKeyword) {
        cy
            .contains("QL TỪ KHÓA NỘI MẠNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAddKeyword")
            .type(vinaphoneKeyword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnAddKeyword")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.contains("Thêm từ khóa thành công");
            })
        return this;
    };

    edit_vinaphone_keyword(vinaphoneKeyword) {
        cy
            .contains("QL TỪ KHÓA NỘI MẠNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtSearchKeyword")
            .type(vinaphoneKeyword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditKeyword")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_txtKeyword")
            .type(" auto edited")
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnOK > img")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.contains("Cập nhật thành công")
            })
        return this;
    };

    delete_vinaphone_keyword(vinaphoneKeyword) {
        cy
            .contains("QL TỪ KHÓA NỘI MẠNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtSearchKeyword")
            .type(vinaphoneKeyword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnDeleteKeyword")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.contains("Xóa thành công 1 từ khóa.")
            })
        return this
    };

    create_foreign_keyword(foreignKeyword) {
        cy
            .contains("QL TỪ KHÓA NGOẠI MẠNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtKeyword")
            .type(foreignKeyword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnAddKeyword")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbError")
            .invoke('text').then((text) => {
                expect(text).to.contains("Thêm thành công từ khóa.");
            })
        return this
    };

    delete_foreign_keyword(foreignKeyword) {
        cy
            .contains("QL TỪ KHÓA NGOẠI MẠNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtSearchKeyword")
            .type(foreignKeyword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnGrDeleteKeyword")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbError")
            .invoke('text').then((text) => {
                expect(text).to.contains("Xóa thành công 1 từ khóa.")
            })
        return this
    };

    cancel_order() {
    };

    approveOrRejectLBA(campaignname, agentName, beginCreatedDate, endCreatedDate, status, beginScheduleDate, endScheduleDate, isApproved) {
        //de xu ly truong hop co nhieu ban ghi thi can them code search o day
        cy
            .contains("DUYỆT CHIẾN DỊCH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_tbName")
            .type(campaignname)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAgent")
            .select(agentName)
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtBeginCreatedDate")
            .type(beginCreatedDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtEndCreatedDate")
            .type(endCreatedDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select(status)
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtBeginScheduleDate")
            .clear()
            .type(beginScheduleDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtEndScheduleDate")
            .clear()
            .type(endScheduleDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnView")
            .click()
        cy
            .contains(campaignname)
            .parent()
            .parent()
            .within(() => {
                //alert sau khi confirm tu choi chien dich
                const stub = cy.stub()
                //---------------------------------//
                cy.on('window:alert', stub)
                if (isApproved == true) {
                    cy.get(`[alt="Duyệt"]`).click().then(() => {
                        expect(stub.getCall(0)).to.be.calledWith('Phê duyệt chiến dịch thành công.');
                        // cy.on('window:alert', (str) => {
                        //     expect(str).to.equal(`Phê duyệt chiến dịch thành công.`)
                        // })
                    })
                } else {
                    cy.get(`[alt="Từ chối"]`).click().then(() => {
                        const inputForm = Cypress.$('#myModal1 > div > div.modal-body>input');
                        const okButton = Cypress.$("#myModal1 > div > div.modal-footer>div>button[onclick='reject_ok_popup()']");
                        cy
                            .wrap(inputForm).type('abc')
                        cy
                            .wrap(okButton).click().then(() => {
                                expect(stub.getCall(0)).to.be.calledWith('Từ chối chiến dịch thành công.');
                                // cy.on('window:alert', (str) => {
                                //     expect(str).to.equal(`Từ chối chiến dịch thành công.`)
                                // })
                            })
                        //co the them assert text trong alert box o day
                    })
                    //cy.focus()
                }
            })
        return this
    };


    resolveLBA(campaignname, beginCreatedDate, endCreatedDate, status, beginScheduleDate, endScheduleDate, isApproved) {
        //campaigname là 1 mảng
        cy
            .contains("DUYỆT CHIẾN DỊCH")
            .click({ force: true })
            //tìm kiêm theo ngày tạo và ngày gửi tin
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtBeginCreatedDate")
            .type(beginCreatedDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtEndCreatedDate")
            .type(endCreatedDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select(status)
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtBeginScheduleDate")
            .clear()
            .type(beginScheduleDate)
            //tìm kiếm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtEndScheduleDate")
            .clear()
            .type(endScheduleDate)
        //click nút tìm kiếm
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnView").as('searchBtn')
        cy
            .get('@searchBtn')
            .click()
        campaignname.forEach((name) => {
            //Logic check
            cy.contains(name).should('be.visible');
            cy
                .contains(name)
                .parent()
                .parent()
                .within(() => {
                    cy.get(`[type="checkbox"]`).check();
                })
        })
        //alert sau khi confirm tu choi chien dich
        const stub = cy.stub()
        //---------------------------------//
        cy.on('window:alert', stub)
        //--------------------------//
        if (isApproved == true) {
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnApprove").as('approveBtn')
            cy.get("@approveBtn")
                .click().then(() => {
                    expect(stub.getCall(0)).to.be.calledWith(`Phê duyệt thành công ${campaignname.length} chiến dịch.`);
                })
        } else {
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject").as('rejectBtn')
            cy.get("@rejectBtn")
                .click().then(() => {
                    //#myModal1 khong chi locate duoc khi dung jquery
                    const inputForm = Cypress.$('#myModal1 > div > div.modal-body>input');
                    cy
                        .wrap(inputForm).type('abc')
                    const okButton = Cypress.$("#myModal1 > div > div.modal-footer>div>button[onclick='reject_ok_popup()']");
                    cy
                        .wrap(okButton).click().then(() => {
                            expect(stub.getCall(0)).to.be.calledWith(`Từ chối thành công ${campaignname.length} chiến dịch.`);
                            // cy.on('window:alert', (str) => {
                            //     expect(str).to.equal(`Từ chối chiến dịch thành công.`)
                            // })
                        })
                    //co the them assert text trong alert box o day
                })
        }
    };

    changeAgentStatus(agentName, status) {
        cy
            //nhập tên đại lý
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
            //tìm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //đợi query từ database
            .wait(2000)
            //chọn chi tiết
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand").as("Chi tiết")
            .get("@Chi tiết")
            .click()
            .then(() => {
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus")
                    .as("statusBtn")
                if (status == true) { //Kích hoạt agent
                    cy.get("@statusBtn").check();
                } else {
                    cy.get("@statusBtn").uncheck();
                }
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
                    .click()
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
                    .invoke('text').then((text) => {
                        expect(text).to.equal("Cập nhật thành công đại lý.");
                    })

            })
            return this;
    }

    change_agent_status_toLimited(agentName) {
        cy
            //nhập tên đại lý
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
            //tìm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //đợi query từ database
            .wait(2000)
            //chọn chi tiết
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand").as("Chi tiết")
            .get("@Chi tiết")
            .click()
            //Đổi từ không giới hạn sang 4mt
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rbCharacterLimit_0")
            .check()
            //confirm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.equal("Cập nhật thành công đại lý.");
            })
        return this;
    };

    change_agent_status_toUnLimited(agentName) {
        cy
            //nhập tên đại lý
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
            //tìm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //đợi query từ database
            .wait(2000)
            //chọn chi tiết
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand").as("Chi tiết")
            .get("@Chi tiết")
            .click()
            //Đổi từ không giới hạn sang 4mt
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rbCharacterLimit_0")
            .check()
            //confirm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.equal("Cập nhật thành công đại lý.")
            })

    };
    //-------------------------------------------------------------------------------------------------------------------------------------//
    //-------------------------------------------------------In Progress-------------------------------------------------------------------//
    addAgent(agentName, agentType, sendType, region, paymentsMethod, address, agentPaper, mobilelist, email, contractNumber, deposits, isLimitedVinaphone, isTemplateApprovance, status) {
        //loại đại lý
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAGType")
            .select(agentType);
        //tên đại lý
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
        //Gửi tin QC hay cskh
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlContractType")
            .select(sendType)
        //Hình thức thanh toán
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlPaymentType")
            .select(paymentsMethod);
        //Địa chỉ
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentAddr")
            .type(address);
        //Số giấy tờ
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentPaper")
            .type(agentPaper);
        //Số điện thoại
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentMobile")
            .type(mobilelist);
        //Email
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentEmail")
            .type(email);
        //Số HĐ đại lý
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtContract")
            .type(contractNumber);
        //Tiền đặt cọc
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtDeposit")
            .type(deposits);
        if (agentType === "Đại lý VTT") {
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlCity")
                .select(region);
        }
        if (isLimitedVinaphone == false) {
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rbCharacterLimit_1")
                .check();
        }
        if (isTemplateApprovance == true) {
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatusApprove")
                .check();
        }
        if (status == true) {
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus")
                .check();
        }
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click();
        //bổ sung trả ra text để assert
        return this

    };

    addAgentUserAccount(agentName, agentUserAccountName) {
        cy
            .contains("NGƯỜI DÙNG ĐL")
            .click({ force: true });
        //dont chain commands here 
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAG")
            .select(agentName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtUserName")
            .type(agentUserAccountName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPassword")
            .type(agentUserAccountPassword)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click();
        return this;
    };

    editAgentUserAccount(agentName) {
        cy
            .contains("NGƯỜI DÙNG ĐL")
            .click({ force: true });
        //dont chain commands here
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAG")
            .select(agentName);
        //cần interact với table ở đây. Nếu tên agentuseraccount trùng thì sẽ edit


    };

    changeAgentUserAccountPassword() {

    };

    changeAgentUserAccountName() {

    };

    deleteAgentUserAccount() {

    };

    addSystemUser(role, userName, password) {
        cy
            .contains("NGƯỜI DÙNG HT")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlRoleID")
            .select(role)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtNewUserNameNew")
            .type(userName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPassword")
            .type(password)
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add')
            .click()
        cy
            .contains("Thêm mới người dùng thành công.").should('be.visible');
    };

    editSystemUser() {

    };

    deleteSystemUser() {

    };

    addVendorUserAccount(vendor, userName, password, status) {
        cy
            .contains("NHÀ CUNG CẤP")
            .click({ force: true })
        cy
            .contains(vendor)
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtUserName")
            .type(userName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPassword")
            .type(password).then(() => {
                if (status == false) {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus")
                        .uncheck()
                } else {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus")
                        .should('be.checked');
                }
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
                    .click()
                cy
                    .contains("Thêm mới tài khoản nhà cung cấp thành công")
                    .should('be.visible');
            })


    };

    editProviderUser() {

    };
    deleteProviderUser() {

    };

    addAgentAPI(agentName, adserName, userName, password, IPlist, status) {
        cy
            .contains("QL API")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAgentSearch")
            .select(agentName)
        cy
            .reload()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdserSearch")
            .select(adserName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1>tbody>tr:last-child')
            .within(() => {
                cy
                    .get(".list:eq(0)")
                    .select(agentName)
                cy
                    .wait(3000);
                cy
                    .contains("Nguyễn Duy Phương")


                ///////////////////////////////////////////////////////////////////////////////////////////////
                cy.wait(3000)
                cy
                    .get("[type='text']:eq(0)");
                cy
                    .type(userName);
                cy
                    .get("[type='text']:eq(1)")
                    .type(password)
                    .get("[type='text']:eq(2)")
                    .type(IPlist)
            })
            .then(() => {
                if (status == true) {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl06_chkPub")
                        .check()
                }
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
                    .click()
            })

    };

    editAgentAPI() {

    };

    deleteAgentAPI() {

    };

    searchEMSCustomerInfo() {

    };
    addPriviledgedBrandName() {

    };

    deletePriviledgedBrandName() {

    };

    addPrviledgedKeyword() {

    };

    deletePriviledgedKeyword() {

    };

    addEMSDepositLimit() {

    };

    deleteEMSDepositLimit() {

    };

    findTPS() {

    };

    addTPS() {

    };

    editTPS() {

    };

    deleteTPS() {

    };
    searchAnnouncement() {

    };
    addAnnouncement() {

    };
    deleteAnoucement() {

    };
    searchAgentOrder() {

    };
    addAgentOrder() {

    };
    editAgentOrder() {

    };
    deleteAgentOrder() {

    };
    searchCustomerOrder() {

    };
    addCustomerOrder() {

    };
    editCustomerOrder() {

    };
    deleteCustomerOrder() {

    };
    addESMSCustomerOrder() {

    };
    editEMSCustomerOrder() {

    };
    addProvider() {

    };
    searchProvider() {

    };
    editProvider() {

    };
    deleteProvider() {

    };
    addGateway() {

    };
    searchGateway() {

    };
    editGateway() {

    };
    deleteGateway() {

    };
    searchSendingHistory() {

    };
    searchOrderHistory() {

    };
    approveCustomer() {

    };
    rejectCustomer() {

    };
    approveContract() {

    };
    rejectContract() {

    };
    approveCustomerGroupTelcoList() {

    };
    rejectCustomerGroupTelcoList() {

    };
    approveForeignNetworkBrandName() { //not vinaphone

    };
    rejectForeignNetworkBrandName() {

    };
    editGatewayForForeignNetworkBrandName() {

    };
    approveItelBrandName() {

    };
    rejectItelBrandName() {

    };
    changePassword() {

    };
}

export default Admin;