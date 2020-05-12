import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

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
                `qatestlba11${cfg.count}`
                , "12/05/2020 15:34"
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
                
                [`qatestlba11${cfg.count}`]
                , "06/05/2020"
                , "15/05/2020"
                , "Tất cả"
                , "06/05/2020"
                , "15/05/2020"
                , true);
    })
});
