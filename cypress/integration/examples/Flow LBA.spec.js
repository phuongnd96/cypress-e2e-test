import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();
context("Agent tạo chiến dịch", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Login.aspx")
            .doLogin("accDL_testphuongQC", "Tr1@123")
    })
    it.only("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuong1123128", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it.only("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuong1223128", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuong132312", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuong142312", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
})

context.skip("Admin resolve chiến dịch", () => {
    beforeEach(() => {
        admin
            .visitAdminPortal("http://10.84.70.164:8089/Home.aspx")
            .doLogin("test852017", "Admin@123")
    })
    it("Admin từ chối chiến dịch LBA", () => {
        admin
            .resolveLBA(["phuong112312"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })
    it("Admin duyệt LBA", () => {
        admin
            .resolveLBA(["phuong122312"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", true)
    })
    it("Admin reject LBA", () => {
        admin
            .resolveLBA(["phuong132312","phuong142312"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })
});
