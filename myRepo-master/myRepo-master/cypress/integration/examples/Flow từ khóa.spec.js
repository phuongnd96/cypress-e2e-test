import Admin from '../PageObjects/Admin'
import Agent from "../PageObjects/Agent"
import * as cfg from '../config/config';
//---------------------------------------------------------------------------//
const agent = new Agent();
const admin = new Admin();
//prefix để đọc file lỗi
let prefix = [];

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
            admin.delete_vinaphone_keyword("phuongtestkeyword auto edited")
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
                visitAgentPortal(cfg.url.portal.agent)
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
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh không thành công").then((text)=>{
                        prefix.pop();
                        prefix.push(text);
                    })
                    .then((prefix)=>{
                        cy.log(prefix);
                        agent.downloadErrorfile();
                    })
        })
        it("Kiểm tra file lỗi",()=>{
            agent.readErrorfile(prefix[0],"Vi phạm chính sách từ khóa");
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
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh không thành công").then((text)=>{
                        prefix.pop();
                        prefix.push(text);
                    })
                    .then((prefix)=>{
                        cy.log(prefix);
                        agent.downloadErrorfile();
                    })
        })
        it("Kiểm tra file lỗi",()=>{
            agent.readErrorfile(prefix[0],"Vi phạm chính sách từ khóa");
        })
        })
    })

