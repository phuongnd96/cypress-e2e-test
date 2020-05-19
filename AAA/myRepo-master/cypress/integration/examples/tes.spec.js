import * as _ from '../config/data';
import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
let db = _.info;
const agent = new AGENT();
const admin = new ADMIN();

describe("test", () => {
    it("abc", () => {
        agent.visitAgentPortal(db.url_portal.agentPortal)
            .doLogin(db.agent_VTT_CSKH_TRASAU.userName, db.agent_VTT_CSKH_TRASAU.password);
    })
});
describe("Flow agent tạo nhãn và template", () => {
    describe("Agent thêm template và nhãn thành công", () => {
        beforeEach(() => {
            agent.visitAgentPortal(db.url_portal.agentPortal)
                .doLogin(
                    db.agent_VTT_CSKH_TRASAU.userName
                    , db.agent_VTT_CSKH_TRASAU.password
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
                    , "14/12/2020"
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
                    , cfg.portalArgs.VTT.cskh.agentName
                    , "Pending"
                );
            //Tìm theo kí tự đầu
        })
    });
})
