
import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();
//flow agent tao chien dich sau do admin tu choi hoac duyet chien dich
context("Agent tao chien dich", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accDL_testphuongQC", "Tr1@123")
    })
    it("Agent tao chien dich LBA", () => {
        agent
            .createLBA("LBA_bla4", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tao chien dich LBA", () => {
        agent
            .createLBA("LBA_blo4", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
})

context("Admin resolve chien dich", () => {
    beforeEach(() => {
        admin
            .visitAdminPortal("http://10.84.70.164:8098/Home.aspx")
            .doLogin("test852017", "Admin@123")
    })
    it("Admin tu choi chien dich LBA", () => {
        admin
            .approveOrRejectLBA("LBA_bla4", "DL_testphuongQC", "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })
    it("Admin duyet LBA", () => {
        admin
            .approveOrRejectLBA("LBA_blo4", "DL_testphuongQC", "06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", true)
    })
});
