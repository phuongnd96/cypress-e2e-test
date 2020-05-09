import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';

//import { url, account, rnd, scheduleTime, adserName, contractName, mạng, template, apiArgs } from '../config/config'
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
                , cfg.apiArgs.scheduletime
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
    specify("Gửi tin qua API nội mạng đặt lịch site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                , "15-05-2020 15:00"
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
                , "15-05-2020 15:00"
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
                cfg.url.api.nonbank
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
    specify.skip("Gửi tin qua API SMSORDER", () => {

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

    context("Redis", () => {
        describe("Đại lý gửi tin qua API với account có trang thái inactive", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .changeAgentStatus("DL_testphuong", false);
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
            //---------------------------------------------------------------------------------//          
            afterEach(() => {
                admin
                    .visitAdminPortal(cfg.url.portal.admin)
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .changeAgentStatus("DL_testphuong", true);
            })
        })
    })
})


