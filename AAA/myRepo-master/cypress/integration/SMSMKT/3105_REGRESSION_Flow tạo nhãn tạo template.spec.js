import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

describe("Flow agent tạo nhãn và template", () => {
    context("Agent thêm template và nhãn thành công", () => {
        beforeEach(() => {
            agent.visitAgentPortal(cfg.url.portal.agent)
                .doLogin(
                    cfg.account.agent.username
                    , cfg.account.agent.pw
                );
        })
        it("Thêm nhãn thành công", () => {
            let rndBrn = "phuongtest".concat(Math.floor(Math.random() * 1000));
            agent
                .addBrandName_product1(
                    rndBrn
                    , cfg.rnd
                    , "YTE,GD"
                    , "YTE, GD"
                    , "YTE, GD"
                    , "CSKH"
                    , "CSKH"
                    , "CSKH"
                    , "PhuongQA"
                    , "file.jpg"
                    , "file.jpg"
                    , "14/12/2020"
                );
        })
        it("Thêm template thành công temp A", () => {
            agent
                .addTemplate(
                    "{A,50}"
                    , "test"
                    ,"Thêm mới template thành công."
                );
        })
        it("Thêm template thành công temp B", () => {
            agent
                .addTemplate(
                    "{B,50}"
                    , "1.2.3"
                    ,"Thêm mới template thành công."
                );
        })
        it("Thêm template thành công temp C", () => {
            agent
                .addTemplate(
                    "{C,50}"
                    , "t!@#$%^&*()_+-=~`:;'<>?{}[]\\"
                    ,"Thêm mới template thành công."
                );
        })
        it("Thêm template thành công temp D", () => {
            agent
                .addTemplate(
                    "{D,50}"
                    , "t!@#$%^&*()_+-=~`:;'<>?{}[]\ \   "
                    ,"Thêm mới template thành công."
                );
        })
    });
    context("Duyệt nhãn thành công", () => {
        beforeEach(() => {
            admin
                .visitAdminPortal(cfg.url.portal.admin)
                .doLogin(
                    cfg.account.admin.username
                    , cfg.account.admin.pw
                );
        })
        it("Admin duyệt nhãn thành công", () => {
            admin
                .approveBrandName(
                    "phuongtest"
                    ,cfg.portalArgs.VTT.cskh.agentName
                    ,"Pending"
                    ); 
                    //Tìm theo kí tự đầu
        })
    });
})

