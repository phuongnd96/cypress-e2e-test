import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();
context("Agent tạo chiến dịch", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal)
            .doLogin(
                cfg.account.agent.username
                , cfg.account.agent.pw
            )
    })
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA(
                "phuongtestlba1a1"
                , "10/05/2020 15:34"
                , cfg.portalArgs.VTT.qc.adserName
                , 1
                , "hop dong test"
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
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA(
                "phuongtestlba12a1"
                , "10/05/2020 15:34"
                , cfg.portalArgs.VTT.qc.adserName
                , 1
                , "hop dong test"
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
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA(
                "phuongtestlba131"
                , "10/05/2020 15:34"
                , cfg.portalArgs.VTT.qc.adserName
                , 1
                , "hop dong test"
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
    it("Agent tạo chiến dịch LBA", () => {
        agent
            .createLBA(
                "phuongtestlba141"
                , "10/05/2020 15:34"
                , cfg.portalArgs.VTT.qc.adserName
                , 1
                , "hop dong test"
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
    it("Admin từ chối chiến dịch LBA", () => {
        admin
            .resolveLBA(
                ["phuongtestlba1a1"]
                , "06/05/2020"
                , "11/05/2020"
                , "Tất cả"
                , "06/05/2020"
                , "11/05/2020"
                , false);
    })
    it("Admin duyệt LBA", () => {
        admin
            .resolveLBA(
                ["phuongtestlba12a1"]
                , "06/05/2020"
                , "11/05/2020"
                , "Tất cả"
                , "06/05/2020"
                , "11/05/2020"
                , true);
    })
    it("Admin reject LBA", () => {
        admin
            .resolveLBA(
                ["phuongtestlba131", "phuongtestlba141"]
                , "06/05/2020"
                , "11/05/2020"
                , "Tất cả"
                , "06/05/2020"
                , "11/05/2020"
                , false);
    })
});
