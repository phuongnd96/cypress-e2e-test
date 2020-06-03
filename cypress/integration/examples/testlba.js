import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();
context("Agent tao chien dich", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accDL_testphuongQC", "Tr1@123")
    })
    it("Agent tao chien dich LBA", () => {
        agent
            .createLBA("LBAPHUONG_2", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
    it("Agent tao chien dich LBA", () => {
        agent
            .createLBA("LBAPHUONG_3", "10/05/2020 15:34", "Duy Phuong", 1, "hop dong test", "HELLO123", "test LBA 0605", "Nam", "1 tháng", "Không", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx", "blacklist.xlsx");
    })
})

context("Admin resolve chien dich", () => {
    beforeEach(() => {
        admin
            .visitAdminPortal("http://10.84.70.164:8098/Home.aspx")
            .doLogin("test852017", "Admin@123")
    })
    
    it("test",()=>{
        admin
        .resolveLBA(["LBAPHUONG_2","LBAPHUONG_3"],"06/05/2020", "11/05/2020", "Tất cả", "06/05/2020", "11/05/2020", false)
    })



});
