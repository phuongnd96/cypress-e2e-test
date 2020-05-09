import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import {url,account,rnd,brn} from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

describe("Regression Test", () => {
    describe("Agent thêm template và nhãn thành công", () => {
        beforeEach(() => {
            agent.visitAgentPortal(url.portal.agent)
                .doLogin(account.agent.username, account.agent.pw);
        })
        it("Thêm nhãn thành công", () => {
            let rndBrn=brn.concat(Math.floor(Math.random()*1000));
            agent
                .addBrandName_product(rndBrn,rnd,"YTE,GD", "YTE, GD", "YTE, GD", "CSKH", "CSKH", "CSKH", "PhuongQA", "file.jpg", "file.jpg", "19/05/2021");
        })
        it("Thêm template thành công ", () => {
            agent
                .addTemplate_product("{P1}", "BRNTEST", "Hello");
        })

    });
    context("Duyệt nhãn thành công", () => {
        beforeEach(() => {
            admin
                .visitAdminPortal(url.portal.admin)
                .doLogin(account.admin.username, account.admin.pw)
        })
        it("Admin duyệt nhãn thành công", () => {
            admin
                .approveBrandName(brn); //Tìm theo kí tự đầu
        })
    });
    //----------------------------------------------------------------------//
})

