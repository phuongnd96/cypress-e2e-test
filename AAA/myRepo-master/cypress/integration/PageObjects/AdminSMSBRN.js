class AdminSMSBRN {
    visitAdminPortal(url) {
        cy
            .visit(url, { retryOnNetworkFailure: true });
        return this;

    };
    doLogin(username, password) {
        cy
            .get(`[name="username"]`).as("usernameTxtBox")
        cy
            .get("@usernameTxtBox").type(username)
        cy
            .get(`[name="password"]`).as("pwTxtBox")
        cy
            .get("@pwTxtBox").type(password)
        cy
            .get(`[name="submit"]`).as("submitBtn")
        cy
            .get("@submitBtn").click();
        //assert login success
        cy.contains(`Xin chào, ${username.toLowerCase()}`).should('be.visible');
    }
    viewReport(mobileNumber,profileID,mạng,sentTime) {
        cy
            .get("#report").as('viewReportBtn')
        cy
            .get("@viewReportBtn").click()
            .get("input#mobileNumber")
            .type(mobileNumber)
            .get("select#profileID")
            .select(profileID)
            .get("select#operatorId")
            .select(mạng)
            .get("#datepicker[name='startDate' ]")
            .type(sentTime) //ngày gửi tin
            .get("#datepicker1[name='endDate']")
            .type(sentTime); //ngày gửi tin
        cy
            .contains("Xem báo cáo")
            .click();
        cy
            .get('#detail_report > .normal > tbody > tr > :nth-child(1)')
            .invoke('text')
            .then((text) => {
                expect(text).to.contain(sentTime)   
            })
    }
}
export default AdminSMSBRN;