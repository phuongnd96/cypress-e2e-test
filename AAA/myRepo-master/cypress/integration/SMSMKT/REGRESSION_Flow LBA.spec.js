import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

let rnd=Math.floor(Math.random()*1000);
context("Agent tạo chiến dịch", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin(
                cfg.account.agentqc.username
                , cfg.account.agentqc.pw
            )
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA(
                `qatestlba${rnd}`
                , "01/06/2020 10:30"
                // , cfg.scheduleTime("/")
                , cfg.portalArgs.VTT.qc.adserName
                , 1
                , cfg.portalArgs.VTT.qc.contractName
                , cfg.portalArgs.VTT.qc.brn
                , "test LBA 0605"
                , "Nam"
                , "1 tháng"
                , "Không"
                , "blacklist.xlsx"
                , "blacklist.xlsx"
                , "blacklist.xlsx"
                , "blacklist.xlsx"
            );
    })
})

context("Admin resolve chiến dịch", () => {
    beforeEach(() => {
        admin
            .visitAdminPortal(
                cfg.url.portal.admin
            )
            .doLogin(
                cfg.account.admin.username
                , cfg.account.admin.pw
            );
    })
    it("Admin duyệt chiến dịch LBA", () => {
        admin
            .resolveLBA(
                
                [`qatestlba`]
                , "25/05/2020"
                , "10/06/2020"
                , "Tất cả"
                , "20/05/2020"
                , "10/06/2020"
                , true);
    })
});
