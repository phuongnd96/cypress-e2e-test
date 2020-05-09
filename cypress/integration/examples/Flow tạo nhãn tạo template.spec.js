import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
//import {url,account,rnd,brn} from '../config/config';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

describe("Flow agent tạo nhãn và template", () => {
    describe("Agent thêm template và nhãn thành công", () => {
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
                .addBrandName_product(
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
                    , "19/05/2021"
                );
        })
        it("Thêm template thành công ", () => {
            agent
                .addTemplate_product(
                    "{P1}"
                    , "BRNTEST"
                    , "Hello"
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
                ); //Tìm theo kí tự đầu
        })
    });
    //----------------------------------------------------------------------//
})

