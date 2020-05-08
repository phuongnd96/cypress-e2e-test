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
    viewReport() {
        cy
            .get("#report").as('viewReportBtn')
        cy
            .get("@viewReportBtn").click()


    }


}
export default AdminSMSBRN;