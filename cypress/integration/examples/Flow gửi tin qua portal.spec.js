import AGENT from '../PageObjects/Agent';
import ADMINSMSBRN from '../PageObjects/AdminSMSBRN';
import * as cfg from '../config/config';
//--------------------------------------------------------------------//
const adminBrandName = new ADMINSMSBRN();
const agent = new AGENT();

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
                , `vina${cfg.count}.xlsx`
                , `vina${cfg.count}.xlsx`
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
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
                , `vina${cfg.count + 1}.xlsx`
                , `vina${cfg.count + 1}.xlsx`
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
    })
    specify("Gửi tin mạng Mobifone CSKH qua BRN", () => {
        if (cfg.ENV == "PRODUCT") {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , "hdmxhVN"
                    , "Mobifone"
                    , "VNPT.Tech"
                    , "{P1}"
                    , `mobi${cfg.count}.xlsx`
                    , `mobi${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
        else if (cfg.ENV == "STAGING") {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Mobifone"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `mobi${cfg.count}.xlsx`
                    , `mobi${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
    })
    specify("Gửi tin mạng Viettel", () => {
        if (cfg.ENV == "PRODUCT") {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Viettel"
                    , "VNPT.Tech"
                    , "{P1}"
                    , `viettel${cfg.count}.xlsx`
                    , `viettel${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        } else if (cfg.ENV == "STAGING") {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Viettel"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `viettel${cfg.count}.xlsx`
                    , `viettel${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
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
                , `itel${cfg.count}.xlsx`
                , `itel${cfg.count}.xlsx`
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
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
                , `itel${cfg.count}.xlsx`
                , `itel${cfg.count}.xlsx`
                , 8
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
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
                , `vinauutien${cfg.count}.xlsx`
                , `vinauutien${cfg.count}.xlsx`
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
    })
    specify("Gửi tin mnp port-in mạng Vinaphone", () => {
        if (cfg.ENV=="PRoDUCT"){
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Vinaphone"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `mnp${cfg.count}.xlsx`
                    , `mnp${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }else if(cfg.ENV=="STAGING"){
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Vinaphone"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `mnpstaging${cfg.count}.xlsx`
                    , `mnpstaging${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
    })
    specify("Gửi tin mnp port-out mạng Viettel", () => {
        if (cfg.ENV=="PRODUCT"){
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Viettel"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `mnp${cfg.count + 1}.xlsx`
                    , `mnp${cfg.count + 1}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
        else if (cfg.ENV=="STAGING"){
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Viettel"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , `mnpstaging${cfg.count + 1}.xlsx`
                    , `mnpstaging${cfg.count + 1}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
    })

})
//-------------------------------------------------------------------------------------//
describe("Đại lý tư nhân gửi tin CSKH", () => {
    beforeEach(() => {
        if (cfg.ENV == "PRODUCT") {
            agent
                .visitAgentPortal(cfg.url.portal.agent)
                .doLogin("DL_VV", "Tr1@1234")
        }
        else if (cfg.ENV == "STAGING") {
            agent
                .visitAgentPortal(cfg.url.portal.agent)
                .doLogin("accDL_testphuong", "Tr1@1234")
        }
    })
    it("Agent tư nhân gửi tin CSKH", () => {
        if (cfg.ENV == "STAGING") {
            //overwrite
            let adserName = cfg.portalArgs.TUNHAN.cskh.adserName;
            let contractName = cfg.portalArgs.TUNHAN.cskh.contractName;
            let mạng = cfg.portalArgs.TUNHAN.cskh.mạng;
            let brn = cfg.portalArgs.TUNHAN.cskh.brn;
            let template = cfg.portalArgs.TUNHAN.cskh.template;
            let filename = `vina${cfg.count}.xls`
            let filepath = `vina${cfg.count}.xlsx`
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
                    , encoding
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
        else if (cfg.ENV = "PRODUCT") {
            let adserName = "KH_test_dltn"
            let contractName = "HĐLV7"
            let mạng = "Vinaphone";
            let brn = "BRNtestlv7"
            let template = "{P1} PhuongQATest"
            let filename = `vina${cfg.count}.xls`
            let filepath = `vina${cfg.count}.xlsx`
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
                    , encoding
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate);
        }
    })
})
//----------------------------------------------------------------------------------------//
describe.skip("Check trạng thái gửi tin từ SMSMKT -> SMS Brandname", () => {
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
                , cfg.sentTime.fromCreateDate);
    })
    specify("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp không thành công", () => {

    })

})
//---------------------------------------------------------------------------------------------//







