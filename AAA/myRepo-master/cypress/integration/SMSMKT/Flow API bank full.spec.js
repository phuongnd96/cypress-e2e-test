import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import * as cfg from '../config/config';

const agentBank = new AGENT();
// const admin = new ADMIN();
context("API SMSMKT", () => {
    describe("FLOW API BANK", () => {
        it(`get_adser_0
        and get_contract_0`, () => {
            agentBank.request_get_adser(
                cfg.url.api.bank
                , cfg.apiArgs.bank.cskh.agentID
                , "phuongnd"
                , "Tr1@123"
            ).then((res) => {
                agentBank.assertRespone(res, 0);
                res.body["RPLY"]["ADSERDETAIL"].forEach(element => {
                    if (element["ADSERNAME"] == "Do Duy Hoan") {
                        agentBank.request_get_contract(
                            cfg.url.api.bank
                            , cfg.apiArgs.bank.cskh.agentID
                            , element["ADSERID"]
                            , "product_getcontract_phuong"
                            , "Tr1@123"
                        ).then((respone) => {
                            agentBank.assertRespone(respone, 0);
                        })
                        agentBank.request_get_label(
                            cfg.url.api.bank
                            , cfg.apiArgs.bank.cskh.agentID
                            , element["ADSERID"]
                            , cfg.apiArgs.bank.cskh.contractID
                            , "product_getlabel_phuong"
                            , "Tr1@123"
                        ).then((respone) => {
                            agentBank.assertRespone(respone, 0);
                        })
                    }
                });
            })
        })
        it("get_template_0", () => {
            agentBank.request_get_template(
                cfg.url.api.bank
                , cfg.apiArgs.bank.cskh.agentID
                , cfg.apiArgs.bank.cskh.brnID
                , "product_gettemplate_phuong"
                , "Tr1@123"
            ).then((res) => {
                agentBank.assertRespone(res, 0);
            })
        });
        it("send_sms_list_1", () => {
            agentBank
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
                    , cfg.apiArgs.bank.cskh.apiPassword.concat("test")
                    , cfg.apiArgs.bank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agentBank.assertRespone(res, 1);
                    })
        });
        it("send_sms_list_2", () => {
            agentBank
                .request_send_sms_nonbank_bank(
                    cfg.url.api.bank
                    , cfg.apiArgs.bank.cskh.brnID
                    , cfg.apiArgs.bank.cskh.contractTypeID
                    , cfg.apiArgs.bank.cskh.contractID
                    , cfg.apiArgs.bank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , cfg.apiArgs.content
                    , "abcs"
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.bank.cskh.agentID
                    , cfg.apiArgs.bank.cskh.apiUsername
                    , cfg.apiArgs.bank.cskh.apiPassword
                    , cfg.apiArgs.bank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agentBank.assertRespone(res, 2);
                    })
        })
        it.skip("send_sms_list_8", () => {

        })
        it("send_sms_list_7", () => {
            agentBank
                .request_send_sms_nonbank_bank(
                    cfg.url.api.bank
                    , cfg.apiArgs.bank.cskh.brnID
                    , cfg.apiArgs.bank.cskh.contractTypeID
                    , cfg.apiArgs.bank.cskh.contractID
                    , cfg.apiArgs.bank.cskh.templateID.concat("9999123")
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
                        agentBank.assertRespone(res, 7);
                    })
        })
        it("send_sms_list_9", () => {
            agentBank
                .request_send_sms_nonbank_bank(
                    cfg.url.api.bank
                    , cfg.apiArgs.bank.cskh.brnID
                    , "2"
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
                        agentBank.assertRespone(res, 9);
                    })
        })
        it("send_sms_list_10", () => {
            agentBank
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
                    , cfg.apiArgs.bank.cskh.username.concat("testabcasas")
                    , 0).then((res) => {
                        console.log(res);
                        agentBank.assertRespone(res, 10);
                    })
        })
        it("send_sms_list_11",()=>{
            agentBank
            .request_send_sms_nonbank_bank(
                cfg.url.api.bank
               ,"132118"
                , "1"
                , "10320"
                , "562192"
                , "1"
                , "testjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknckancknjkjakscacansckansckkanscknakscnaknc"
                , ""
                , cfg.apiArgs.mobilelist.vina
                , cfg.apiArgs.istelcosub
                , "349"
                , "vivas"
                , "vivas@123"
                , "DL_VV"
                , 0).then((res) => {
                    console.log(res);
                    agentBank.assertRespone(res, 11);
                })
        })
        it("send_sms_list_14", () => {
            agentBank
                .request_send_sms_nonbank_bank(
                    cfg.url.api.bank
                    , cfg.apiArgs.bank.cskh.brnID.concat("12323131")
                    , cfg.apiArgs.bank.cskh.contractTypeID
                    , cfg.apiArgs.bank.cskh.contractID
                    , cfg.apiArgs.bank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , cfg.apiArgs.content
                    , ""
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.bank.cskh.agentID
                    , cfg.apiArgs.bank.cskh.apiUsername
                    , cfg.apiArgs.bank.cskh.apiPassword
                    , cfg.apiArgs.bank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agentBank.assertRespone(res, 14);
                    })
        })
        it.skip("send_sms_list_17", () => {
            agentBank
                .request_send_sms_nonbank_bank(
                    cfg.url.api.bank
                    , cfg.apiArgs.bank.cskh.brnID
                    , cfg.apiArgs.bank.cskh.contractTypeID
                    , cfg.apiArgs.bank.cskh.contractID
                    , cfg.apiArgs.bank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , "á bc"
                    , ""
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.bank.cskh.agentID
                    , cfg.apiArgs.bank.cskh.apiUsername
                    , cfg.apiArgs.bank.cskh.apiPassword
                    , cfg.apiArgs.bank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agentBank.assertRespone(res, 17);
                    })
        })



    });








})