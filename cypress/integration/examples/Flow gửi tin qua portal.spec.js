import AGENT from '../PageObjects/Agent';
import ADMINSMSBRN from '../PageObjects/AdminSMSBRN';
import * as cfg from '../config/config';
//import { url, account, rnd, scheduleTime, adserName, contractName, mạng, template } from '../config/config'

const adminBrandName = new ADMINSMSBRN();
const agent = new AGENT();
let count=2;

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
                , `vina${count}.xlsx`
                , `vina${count}.xlsx`
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
                , `vina${count+1}.xlsx`
                , `vina${count+1}.xlsx`
                , 0);
    })
    specify("Gửi tin mạng Mobifone CSKH qua BRN", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , "hdmxhVN"
                , "Mobifone"
                , "VNPT.Tech"
                , "{P1}"
                , `mobi${count}.xlsx`
                , `mobi${count}.xlsx`
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
                , `viettel${count}.xlsx`
                , `viettel${count}.xlsx`
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
                , `itel${count}.xlsx`
                , `itel${count}.xlsx`
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
                , `itel${count}.xlsx`
                , `itel${count}.xlsx`
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
                , `vinauutien${count}.xlsx`
                , `vinauutien${count}.xlsx`
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
                , `mnp${count}.xlsx`
                , `mnp${count}.xlsx`
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
                , `mnp${count+1}.xlsx`
                , `mnp${count+1}.xlsx`
                , 0);

    })

})
//-------------------------------------------------------------------------------------//
describe("Đại lý tư nhân gửi tin CSKH", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin("DL_VV","Tr1@1234")
    })
    it("Agent tư nhân gửi tin CSKH", () => {
        //overwrite
        let adserName =     cfg.portalArgs.TUNHAN.cskh.adserName;
        let contractName =  cfg.portalArgs.TUNHAN.cskh.contractName;
        let mạng =          cfg.portalArgs.TUNHAN.cskh.mạng;
        let brn =           cfg.portalArgs.TUNHAN.cskh.brn;
        let template =      cfg.portalArgs.TUNHAN.cskh.template;
        let filename =      `vina${count}.xls`
        let filepath =      `vina${count}.xlsx`
        let encoding =      0
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
    specify.skip("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp không thành công", () => {

    })

})
//---------------------------------------------------------------------------------------------//







