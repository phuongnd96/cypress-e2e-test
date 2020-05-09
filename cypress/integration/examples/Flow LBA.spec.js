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
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuongtestlba1a", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuongtestlba12a", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuongtestlba13", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA("phuongtestlba14", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
})

context.only("Admin resolve chiến dịch", () => {
    beforeEach(() => {
        admin
            .visitAdminPortal("http://10.84.70.164:8089/Home.aspx")
            .doLogin("test852017", "Admin@123")
    })
    it("Admin từ chối chiến dịch LBA", () => {
        admin
            .resolveLBA(["phuongtestlba1a"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })
    it("Admin duyệt LBA", () => {
        admin
            .resolveLBA(["phuongtestlba12a"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", true)
    })
    it("Admin reject LBA", () => {
        admin
            .resolveLBA(["phuongtestlba13","phuongtestlba14"], "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })
});
