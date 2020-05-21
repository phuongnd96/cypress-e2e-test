import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';
const agent = new AGENT();
const admin = new ADMIN();

//-------------------------------------//
context("Gửi tin qua API", () => {

    specify("Gửi tin qua API tin nội mạng site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , ""
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.cskh.agentID
                , cfg.apiArgs.nonbank.cskh.apiUsername
                , cfg.apiArgs.nonbank.cskh.apiPassword
                , cfg.apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify.only("Gửi tin qua API nội mạng đặt lịch site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.scheduleTime("-")
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.cskh.agentID
                , cfg.apiArgs.nonbank.cskh.apiUsername
                , cfg.apiArgs.nonbank.cskh.apiPassword
                , cfg.apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API tin CSKH ngoại mạng site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.scheduleTime
                , cfg.apiArgs.mobilelist.viettel
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.cskh.agentID
                , cfg.apiArgs.nonbank.cskh.apiUsername
                , cfg.apiArgs.nonbank.cskh.apiPassword
                , cfg.apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin API tin QC mạng Vina đặt lịch site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.qc.brnID
                , cfg.apiArgs.nonbank.qc.contractTypeID
                , cfg.apiArgs.nonbank.qc.contractID
                , cfg.apiArgs.nonbank.qc.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.scheduleTime("-")
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.qc.agentID
                , cfg.apiArgs.nonbank.qc.apiUsername
                , cfg.apiArgs.nonbank.qc.apiPassword
                , cfg.apiArgs.nonbank.qc.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API tin nội mạng site bank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.bank
                , cfg.apiArgs.bank.cskh.brnID
                , cfg.apiArgs.bank.cskh.contractTypeID
                , cfg.apiArgs.bank.cskh.contractID
                , cfg.apiArgs.bank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.apiArgs.scheduletime
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.bank.cskh.agentID
                , cfg.apiArgs.bank.cskh.apiUsername
                , cfg.apiArgs.bank.cskh.apiPassword
                , cfg.apiArgs.bank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API SMSORDER", () => {
        agent.
            request_send_sms_SMSORDER(
                cfg.url.api.smsorder
                , cfg.apiArgs.smsorder.cskh.brnID
                , cfg.apiArgs.smsorder.cskh.contractTypeID
                , cfg.apiArgs.smsorder.cskh.contractID
                , cfg.apiArgs.smsorder.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.apiArgs.scheduletime
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.smsorder.cskh.agentID
                , cfg.apiArgs.smsorder.cskh.apiUsername
                , cfg.apiArgs.smsorder.cskh.apiPassword
                , cfg.apiArgs.smsorder.cskh.username
                , 0
                , cfg.apiArgs.smsorder.cskh.saleOrderID
                , cfg.apiArgs.smsorder.cskh.packageID).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Đại lý VIễn thông thành phố gửi tin qua API với API user khác IP set trong mục Quản lý API của Admin Portal", () => {

        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , cfg.apiArgs.scheduletime
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.cskh.agentID
                , 123
                , cfg.apiArgs.nonbank.cskh.apiPassword
                , cfg.apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 1);
                })
    })

    context.skip("Redis API nonbank", () => {
        describe("Đại lý gửi tin qua API với account có trang thái inactive", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .changeAgentStatus(cfg.portalArgs.VTT.cskh.agentName, true)
                cy.wait(10000);
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .changeAgentStatus(cfg.portalArgs.VTT.cskh.agentName, false);
            })
            //----------------------------------------------------------------------------//
            specify("Đại lý VTT gửi tin qua API với account có trạng thái inactive", () => {
                cy.wait(10000);
                agent
                    .request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , cfg.apiArgs.nonbank.cskh.brnID
                        , cfg.apiArgs.nonbank.cskh.contractTypeID
                        , cfg.apiArgs.nonbank.cskh.contractID
                        , cfg.apiArgs.nonbank.cskh.templateID
                        , cfg.apiArgs.numberOfParams
                        , cfg.apiArgs.content
                        , cfg.apiArgs.scheduletime
                        , cfg.apiArgs.mobilelist.vina
                        , cfg.apiArgs.istelcosub
                        , cfg.apiArgs.nonbank.cskh.agentID
                        , cfg.apiArgs.nonbank.cskh.apiUsername
                        , cfg.apiArgs.nonbank.cskh.apiPassword
                        , cfg.apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 15);
                        })
            })
            afterEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .changeAgentStatus(cfg.portalArgs.VTT.cskh.agentName, true)
            })
            //---------------------------------------------------------------------------------//          
        })
        describe("Đại lý gửi tin với nhãn vừa bị reject", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .approveBrandName(cfg.portalArgs.VTT.cskh.brn, cfg.portalArgs.VTT.cskh.agentName, "Rejected");
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .rejectBrandNameVinaphone(cfg.portalArgs.VTT.cskh.brn, cfg.portalArgs.VTT.cskh.agentName);
            })
            it("Đại lý gửi tin với nhãn vừa bị reject", () => {
                agent
                    .request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , cfg.apiArgs.nonbank.cskh.brnID
                        , cfg.apiArgs.nonbank.cskh.contractTypeID
                        , cfg.apiArgs.nonbank.cskh.contractID
                        , cfg.apiArgs.nonbank.cskh.templateID
                        , cfg.apiArgs.numberOfParams
                        , cfg.apiArgs.content
                        , cfg.apiArgs.scheduletime
                        , cfg.apiArgs.mobilelist.vina
                        , cfg.apiArgs.istelcosub
                        , cfg.apiArgs.nonbank.cskh.agentID
                        , cfg.apiArgs.nonbank.cskh.apiUsername
                        , cfg.apiArgs.nonbank.cskh.apiPassword
                        , cfg.apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 14);
                        })
            })
        })
        describe("Đại lý gửi tin với template vừa bị reject", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .rejectTemplate(cfg.portalArgs.VTT.cskh.templateID, cfg.portalArgs.VTT.cskh.agentName, "Actived");
            })
            it("Đại lý gửi tin với template vừa bị reject", () => {
                agent
                    .request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , cfg.apiArgs.nonbank.cskh.brnID
                        , cfg.apiArgs.nonbank.cskh.contractTypeID
                        , cfg.apiArgs.nonbank.cskh.contractID
                        , cfg.apiArgs.nonbank.cskh.templateID
                        , cfg.apiArgs.numberOfParams
                        , cfg.apiArgs.content
                        , cfg.apiArgs.scheduletime
                        , cfg.apiArgs.mobilelist.vina
                        , cfg.apiArgs.istelcosub
                        , cfg.apiArgs.nonbank.cskh.agentID
                        , cfg.apiArgs.nonbank.cskh.apiUsername
                        , cfg.apiArgs.nonbank.cskh.apiPassword
                        , cfg.apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 7);
                        })
            })
            afterEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .approveTemplate(cfg.portalArgs.VTT.cskh.templateID, cfg.portalArgs.VTT.cskh.agentName, "Rejected");
            })
        })
        describe.skip("Gửi tin nội mạng với từ khóa vừa được chặn", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .create_vinaphone_keyword("phuongtestkeyword")
            })
            it("Gửi tin với từ khóa vừa được chặn", () => {

                agent
                    .request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , cfg.apiArgs.nonbank.cskh.brnID
                        , cfg.apiArgs.nonbank.cskh.contractTypeID
                        , cfg.apiArgs.nonbank.cskh.contractID
                        , cfg.apiArgs.nonbank.cskh.templateID
                        , cfg.apiArgs.numberOfParams
                        , "phuongtestkeyword abc"
                        , cfg.apiArgs.scheduletime
                        , cfg.apiArgs.mobilelist.vina
                        , cfg.apiArgs.istelcosub
                        , cfg.apiArgs.nonbank.cskh.agentID
                        , cfg.apiArgs.nonbank.cskh.apiUsername
                        , cfg.apiArgs.nonbank.cskh.apiPassword
                        , cfg.apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 30);
                        })

            })
            afterEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .delete_vinaphone_keyword("phuongtestkeyword")
            })
        })
        describe.skip("Gửi tin với đại lý đổi từ không giới hạn sang 4MT", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .change_agent_status_toLimited(cfg.portalArgs.VTT.cskh.agentName);
            })
            it("Gửi tin với đại lý đổi từ 4MT sang không giới hạn", () => {
                agent
                    .request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , cfg.apiArgs.nonbank.cskh.brnID
                        , cfg.apiArgs.nonbank.cskh.contractTypeID
                        , cfg.apiArgs.nonbank.cskh.contractID
                        , cfg.apiArgs.nonbank.cskh.templateID
                        , cfg.apiArgs.numberOfParams
                        , "Test Cypress adkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaksldakadkaslkdaldkalskdlasdlsakdlakdlkalsdklaskdlaksldaa"
                        , cfg.apiArgs.scheduletime
                        , cfg.apiArgs.mobilelist.vina
                        , cfg.apiArgs.istelcosub
                        , cfg.apiArgs.nonbank.cskh.agentID
                        , cfg.apiArgs.nonbank.cskh.apiUsername
                        , cfg.apiArgs.nonbank.cskh.apiPassword
                        , cfg.apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 7);
                        })
            })
            afterEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .change_agent_status_toUnLimited(cfg.portalArgs.VTT.cskh.agentName);
            })
        })

    })
})


