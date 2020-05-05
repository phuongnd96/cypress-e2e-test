class Admin {

    visitAdminPortal(url) {
        cy
            .visit(url);
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
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtKeyword")
            .type(brn)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox')
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
                return text;
            })

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
                return text;
            })
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
                return text;
            })

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
                return text;
            })

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
                return text;
            })
    };
    cancel_order() {

    };
    approveLBA(campaignname) {
        cy
            .contains("DUYỆT CHIẾN DỊCH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnCampaignName")
            .invoke('text').then((text) => {
                expect(text).to.equals(campaignname);
            })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnApproveCampaign")
            .click();
        return this
    };
    change_agent_status_toLimited(agentName) {
        return cy
            //nhập tên đại lý
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
            //tìm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearchctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //đợi query từ database
            .wait(2000)
            //chọn chi tiết
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand")
            .click()
            //Đổi từ không giới hạn sang 4mt
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rbCharacterLimit_0")
            .check()
            //confirm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text')
    };
    change_agent_status_toUnLimited(agentName) {
        return cy
            //nhập tên đại lý
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAgentName")
            .type(agentName)
            //tìm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearchctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //đợi query từ database
            .wait(2000)
            //chọn chi tiết
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditCommand")
            .click()
            //Đổi từ không giới hạn sang 4mt
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rbCharacterLimit_0")
            .check()
            //confirm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text')
    };

    //--------------------------------------------------------//
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
            .contains("NGƯỜI DÙNG ĐẠI LÝ")
            .click({ force: true });
        //dont chain commands here
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAG")
            .select(agentName);
    //cần interact với table ở đây. Nếu tên agentuseraccount trùng thì sẽ edit

            
    };

    changeAgentUserAccountPassword(){

    };

    changeAgentUserAccountName(){

    };
    

    deleteAgentUserAccount() {

    };
    addSystemUser() {

    };
    editSystemUser() {

    };
    deleteSystemUser() {

    };
    addProviderUser() {

    };
    editProviderUser() {

    };
    deleteProviderUser() {

    };
    addAgentAPI() {

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