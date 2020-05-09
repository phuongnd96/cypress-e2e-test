import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';

import { url, account, rnd, scheduleTime, adserName, contractName, mạng, template, apiArgs } from '../config/config'

const agent = new AGENT();
const admin = new ADMIN();

//-------------------------------------//
context("Gửi tin qua API", () => {

    specify("Gửi tin qua API tin nội mạng site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                url.api.nonbank
                , apiArgs.nonbank.cskh.brnID
                , apiArgs.nonbank.cskh.contractTypeID
                , apiArgs.nonbank.cskh.contractID
                , apiArgs.nonbank.cskh.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , apiArgs.scheduletime
                , apiArgs.mobilelist.vina
                , apiArgs.istelcosub
                , apiArgs.nonbank.cskh.agentID
                , apiArgs.nonbank.cskh.apiUsername
                , apiArgs.nonbank.cskh.apiPassword
                , apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API nội mạng đặt lịch site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                url.api.nonbank
                , apiArgs.nonbank.cskh.brnID
                , apiArgs.nonbank.cskh.contractTypeID
                , apiArgs.nonbank.cskh.contractID
                , apiArgs.nonbank.cskh.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , "15-05-2020 15:00"
                , apiArgs.mobilelist.vina
                , apiArgs.istelcosub
                , apiArgs.nonbank.cskh.agentID
                , apiArgs.nonbank.cskh.apiUsername
                , apiArgs.nonbank.cskh.apiPassword
                , apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API tin CSKH ngoại mạng site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                url.api.nonbank
                , apiArgs.nonbank.cskh.brnID
                , apiArgs.nonbank.cskh.contractTypeID
                , apiArgs.nonbank.cskh.contractID
                , apiArgs.nonbank.cskh.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , scheduleTime
                , apiArgs.mobilelist.viettel
                , apiArgs.istelcosub
                , apiArgs.nonbank.cskh.agentID
                , apiArgs.nonbank.cskh.apiUsername
                , apiArgs.nonbank.cskh.apiPassword
                , apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin API tin QC mạng Vina đặt lịch site nonbank", () => {
        agent
            .request_send_sms_nonbank_bank(
                url.api.nonbank
                , apiArgs.nonbank.qc.brnID
                , apiArgs.nonbank.qc.contractTypeID
                , apiArgs.nonbank.qc.contractID
                , apiArgs.nonbank.qc.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , "15-05-2020 15:00"
                , apiArgs.mobilelist.vina
                , apiArgs.istelcosub
                , apiArgs.nonbank.qc.agentID
                , apiArgs.nonbank.qc.apiUsername
                , apiArgs.nonbank.qc.apiPassword
                , apiArgs.nonbank.qc.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 0);
                })
    })
    specify("Gửi tin qua API tin nội mạng site bank", () => {
        agent
            .request_send_sms_nonbank_bank(
                url.api.nonbank
                , apiArgs.bank.cskh.brnID
                , apiArgs.bank.cskh.contractTypeID
                , apiArgs.bank.cskh.contractID
                , apiArgs.bank.cskh.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , apiArgs.scheduletime
                , apiArgs.mobilelist.vina
                , apiArgs.istelcosub
                , apiArgs.bank.cskh.agentID
                , apiArgs.bank.cskh.apiUsername
                , apiArgs.bank.cskh.apiPassword
                , apiArgs.bank.cskh.username
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
                url.api.nonbank
                , apiArgs.nonbank.cskh.brnID
                , apiArgs.nonbank.cskh.contractTypeID
                , apiArgs.nonbank.cskh.contractID
                , apiArgs.nonbank.cskh.templateID
                , apiArgs.numberOfParams
                , apiArgs.content
                , apiArgs.scheduletime
                , apiArgs.mobilelist.vina
                , apiArgs.istelcosub
                , apiArgs.nonbank.cskh.agentID
                , 123
                , apiArgs.nonbank.cskh.apiPassword
                , apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 1);
                })
    })

    context("Redis", () => {
        describe("Đại lý gửi tin qua API với account có trang thái inactive", () => {
            beforeEach(() => {
                admin
                    .visitAdminPortal(url.portal.admin)
                    .doLogin(account.admin.username, account.admin.pw)
                    .changeAgentStatus("DL_testphuong", false);
            })
            //----------------------------------------------------------------------------//
            specify("Đại lý VTT gửi tin qua API với account có trạng thái inactive", () => {
                agent
                    .request_send_sms_nonbank_bank(
                        url.api.nonbank
                        , apiArgs.nonbank.cskh.brnID
                        , apiArgs.nonbank.cskh.contractTypeID
                        , apiArgs.nonbank.cskh.contractID
                        , apiArgs.nonbank.cskh.templateID
                        , apiArgs.numberOfParams
                        , apiArgs.content
                        , apiArgs.scheduletime
                        , apiArgs.mobilelist.vina
                        , apiArgs.istelcosub
                        , apiArgs.nonbank.cskh.agentID
                        , apiArgs.nonbank.cskh.apiUsername
                        , apiArgs.nonbank.cskh.apiPassword
                        , apiArgs.nonbank.cskh.username
                        , 0).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 15);
                        })
            })
            //---------------------------------------------------------------------------------//          
            afterEach(() => {
                admin
                    .visitAdminPortal(url.portal.admin)
                    .doLogin(account.admin.username, account.admin.pw)
                    .changeAgentStatus("DL_testphuong", true);
            })
        })
    })
})


