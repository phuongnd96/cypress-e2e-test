import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import ADMINSMSBRN from '../PageObjects/AdminSMSBRN';
import * as cfg from '../config/config';
//import { url, account, rnd, scheduleTime, adserName, contractName, mạng, template } from '../config/config'

const adminBrandName = new ADMINSMSBRN();
const agent = new AGENT();
const admin = new ADMIN();

describe("Flow agent gửi tin", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin(cfg.account.agent.username, cfg.account.agent.pw);
    })
    specify("Gửi tin nội mạng gửi ngay", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , cfg.portalArgs.VTT.cskh.mạng
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "vina.xlsx"
                , "vina.xlsx"
                , 0);
    })
    specify("Gửi tin nội mạng đặt lịch", () => {
        agent
            .send_sms_temp_old(
                "12/05/2020 08:00"
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , cfg.portalArgs.VTT.cskh.mạng
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "vina1.xlsx"
                , "vina1.xlsx"
                , 0);
    })
    specify("Gửi tin mạng Mobifone CSKH", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "Mobifone"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "mobi.xlsx"
                , "mobi.xlsx"
                , 0);
    })
    specify("Gửi tin mạng Viettel", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "Viettel"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "viettel.xlsx"
                , "viettel.xlsx"
                , 0);
    })
    specify("Gửi tin mạng Itel", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "ITel"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "itel.xlsx"
                , "itel.xlsx"
                , 0);
    })
    specify("Gửi tin có dấu", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "ITel"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "itel.xlsx"
                , "itel.xlsx"
                , 8);
    })
    specify("Gửi tin theo hướng ưu tiên", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "Vinaphone"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "vinauutien.xlsx"
                , "vinauutien.xlsx"
                , 0);
    })
    specify("Gửi tin mnp port-in mạng Vinaphone", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "Vinaphone"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "mnpstaging.xlsx"
                , "mnpstaging.xlsx"
                , 0);
    })
    specify("Gửi tin mnp port-out mạng Viettel", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , "Viettel"
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , "mnpstaging.xlsx"
                , "mnpstaging.xlsx"
                , 0);

    })

})
//-------------------------------------------------------------------------------------//
describe("Đại lý tư nhân gửi tin CSKH", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(url.portal.agent)
            .doLogin("accDL_testphuong", "Tr1@123")
    })
    it("Agent tư nhân gửi tin CSKH", () => {
        //overwrite
        let adserName = "Nguyễn Duy Phương";
        let contractName = "Hợp đồng test UR 132 1702";
        let mạng = "Vinaphone"
        let brn = "testabc"
        let template = "{P1}"
        let filename = "vina.xlsx"
        let filepath = "vina.xlsx"
        let encoding = 0
        agent
            .send_sms_temp_old(
                " "
                , adserName
                , contractName
                , mạng
                , brn
                , template
                , filename
                , filepath
                , encoding);
    })
})
//----------------------------------------------------------------------------------------//
describe("Check trạng thái gửi tin từ SMSMKT -> SMS Brandname", () => {
    beforeEach(() => {
        adminBrandName
            .visitAdminPortal(
                "http://sms.vivas.vn/SMSBNPortal/view/user/login.jsp"
                )
            .doLogin(
                "Vivas.vhkt"
                , "abc123")
    })
    specify("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp thành công", () => {
        adminBrandName
            .viewReport(
                "84932248120"
                , "VNP"
                , "12/05/2020");
    })
    specify("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp không thành công", () => {

    })

})
//---------------------------------------------------------------------------------------------//
context.skip("Admin hủy lệnh gửi", () => {
    //mannual
})
//----------------------------------------------------------------------------------------------//
context.skip("TC gửi 1551 sau đó gửi tin QC", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin(
                ""
                , cfg.account.agent.pw
                );
    })
    specify("Sửa template ở màn hình gửi tin", () => {
        let adserName = "";
        let contractName = "";
        let mạng = "Viettel"
        let brn = ""
        let template = ""
        let filename = "vina.xlsx"
        let filepath = "vina.xlsx"
        let encoding = 0
        agent
            .send_sms_temp_old(
                " "
                , adserName
                , contractName
                , mạng
                , brn
                , template
                , filename
                , filepath
                , encoding);
    })
})





