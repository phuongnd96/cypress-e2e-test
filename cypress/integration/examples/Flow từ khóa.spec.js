import Admin from '../PageObjects/Admin'
import Agent from "../PageObjects/Agent"

//import { url, account, rnd, scheduleTime, adserName, contractName, mạng, template } from '../cfg/cfg'
import * as cfg from '../config/config';
const agent = new Agent();
const admin = new Admin();

context("Flow từ khóa nội mạng ngoại mạng", () => {
    context("Admin", () => {
        beforeEach(() => {
            admin.visitAdminPortal(cfg.url.portal.admin)
                .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
        })
        it("Admin tạo từ khóa chặn nội mạng", () => {
            admin.create_vinaphone_keyword("phuongtestkeyword")
        })
        it("Admin sửa từ khóa chặn nội mạng", () => {
            admin.edit_vinaphone_keyword("phuongtestkeyword")
        })
        it("Admin xóa từ khóa chặn nội mạng", () => {
            admin.delete_vinaphone_keyword("phuongtestkeyword")
        })
        it("Admin tạo từ khóa chặn ngoại mạng", () => {
            admin.create_foreign_keyword("phuongtestkeywordngoaimang")
        })
        it("Admin xóa từ khóa chặn ngoại mạng", () => {
            admin.delete_foreign_keyword("phuongtestkeywordngoaimang")
        })
    })
    context("Agent", () => {
        beforeEach(() => {
            agent.
                visitAgentPortal(cfg.url.portal
                    .agent)
                .doLogin(cfg.account.agent.username, cfg.account.agent.pw);
        })
        it("Gửi tin với từ khóa chặn nội mạng", () => {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , cfg.portalArgs.VTT.cskh.mạng
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , "vinakeyword.xlsx"
                    , "vinakeyword.xlsx"
                    , 0);
        })
        it("Gửi tin với từ khóa chặn ngoại mạng", () => {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Viettel"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , "viettelkeyword.xlsx"
                    , "viettelkeyword.xlsx"
                    , 0);
        })
    })
})
