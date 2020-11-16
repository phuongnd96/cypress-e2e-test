import ADMIN from '../PageObjects/Admin';
import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';
const agent = new AGENT();
// const admin = new ADMIN();
context("API SMSMKT", () => {
    describe("API nonbank", () => {
        it(`get_adser_0
        and get_contract_0`, () => {
            agent.request_get_adser(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.agentID
                , "phuongnd"
                , "Tr1@123"
            ).then((res) => {
                agent.assertRespone(res, 0);
                res.body["RPLY"]["ADSERDETAIL"].forEach(element => {
                    if (element["ADSERNAME"] == "Do Duy Hoan") {
                        agent.request_get_contract(
                            cfg.url.api.nonbank
                            , cfg.apiArgs.nonbank.cskh.agentID
                            , element["ADSERID"]
                            , "product_getcontract_phuong"
                            , "Tr1@123"
                        ).then((respone) => {
                            agent.assertRespone(respone, 0);
                        })
                        agent.request_get_label(
                            cfg.url.api.nonbank
                            , cfg.apiArgs.nonbank.cskh.agentID
                            , element["ADSERID"]
                            , cfg.apiArgs.nonbank.cskh.contractID
                            , "product_getlabel_phuong"
                            , "Tr1@123"
                        ).then((respone) => {
                            agent.assertRespone(respone, 0);
                        })
                    }
                });
            })
        })
        it("get_template_0", () => {
            agent.request_get_template(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.agentID
                , cfg.apiArgs.nonbank.cskh.brnID
                , "product_gettemplate_phuong"
                , "Tr1@123"
            ).then((res) => {
                agent.assertRespone(res, 0);
            })
        })
        it("send_sms_list_1", () => {
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
                    , cfg.apiArgs.nonbank.cskh.apiPassword.concat("test")
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 1);
                    })
        })
        it("send_sms_list_2", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , cfg.apiArgs.nonbank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , cfg.apiArgs.content
                    , "abcs"
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.nonbank.cskh.agentID
                    , cfg.apiArgs.nonbank.cskh.apiUsername
                    , cfg.apiArgs.nonbank.cskh.apiPassword
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 2);
                    })
        })
        it.skip("send_sms_list_8", () => {
            agent.request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , "16092"
                , "2"
                , "1185"
                , "559104"
                , "1"
                , "test"
                , cfg.scheduleTime
                , cfg.apiArgs.mobilelist.vina
                , "0"
                , "165"
                , "test"
                , "test"
                , "DH_QC"
                , "0"
            ).then((res) => {
                console.log(res);
                agent.assertRespone(res, 8);
            })
        })
        it("send_sms_list_7", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , cfg.apiArgs.nonbank.cskh.templateID.concat("9999123")
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
        it("send_sms_list_9", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID
                    , "2"
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
                        agent.assertRespone(res, 9);
                    })
        })
        it("send_sms_list_10", () => {
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
                    , cfg.apiArgs.nonbank.cskh.username.concat("testabcasas")
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 10);
                    })
        })
        it("send_sms_list_11", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , "132043"
                    , "1"
                    , "10320"
                    , "560861"
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
                        agent.assertRespone(res, 11);
                    })
        })
        it("send_sms_list_14", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID.concat("12323131")
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
                        agent.assertRespone(res, 14);
                    })
        })
        it("send_sms_list_17", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , cfg.apiArgs.nonbank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , "á bc"
                    , ""
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.nonbank.cskh.agentID
                    , cfg.apiArgs.nonbank.cskh.apiUsername
                    , cfg.apiArgs.nonbank.cskh.apiPassword
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 17);
                    })
        })
        it("send_sms_list_23", () => {
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
                    , `${cfg.apiArgs.mobilelist.vina},84932248120`
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.nonbank.cskh.agentID
                    , cfg.apiArgs.nonbank.cskh.apiUsername
                    , cfg.apiArgs.nonbank.cskh.apiPassword
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 23);
                    })
        })
        it("send_sms_list_24", () => {
            agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                , cfg.apiArgs.nonbank.cskh.templateID
                , cfg.apiArgs.numberOfParams
                , cfg.apiArgs.content
                ,"18-05-2020 15:00"
                , `${cfg.apiArgs.mobilelist.vina}`
                , cfg.apiArgs.istelcosub
                , cfg.apiArgs.nonbank.cskh.agentID
                , cfg.apiArgs.nonbank.cskh.apiUsername
                , cfg.apiArgs.nonbank.cskh.apiPassword
                , cfg.apiArgs.nonbank.cskh.username
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 24);
                })
        })
        it("send_sms_list_25", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , "131352"
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , "561418"
                    , cfg.apiArgs.numberOfParams
                    , cfg.apiArgs.content
                    , ""
                    , cfg.apiArgs.mobilelist.mnp
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.nonbank.cskh.agentID
                    , cfg.apiArgs.nonbank.cskh.apiUsername
                    , cfg.apiArgs.nonbank.cskh.apiPassword
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 25);
                    })
        })
        //cần sửa lại hàm scheduleTime
        it.skip("send_sms_list_26", () => {
            agent.request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , "16092"
                , "2"
                , "1185"
                , "559104"
                , "1"
                , "test"
                , cfg.scheduleTime
                , cfg.apiArgs.mobilelist.vina
                , "0"
                , "165"
                , "test"
                , "test"
                , "DH_QC"
                , "0"
            ).then((res) => {
                console.log(res);
                agent.request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , "16092"
                    , "2"
                    , "1185"
                    , "559104"
                    , "1"
                    , "test"
                    , cfg.scheduleTime
                    , cfg.apiArgs.mobilelist.vina
                    , "0"
                    , "165"
                    , "test"
                    , "test"
                    , "DH_QC"
                    , "0"
                ).then((res) => {
                    console.log(res);
                    agent.request_send_sms_nonbank_bank(
                        cfg.url.api.nonbank
                        , "16092"
                        , "2"
                        , "1185"
                        , "559104"
                        , "1"
                        , "test"
                        , cfg.scheduleTime
                        , cfg.apiArgs.mobilelist.vina
                        , "0"
                        , "165"
                        , "test"
                        , "test"
                        , "DH_QC"
                        , "0"
                    ).then((res) => {
                        console.log(res);
                        agent.request_send_sms_nonbank_bank(
                            cfg.url.api.nonbank
                            , "16092"
                            , "2"
                            , "1185"
                            , "559104"
                            , "1"
                            , "test"
                            , cfg.scheduleTime
                            , cfg.apiArgs.mobilelist.vina
                            , "0"
                            , "165"
                            , "test"
                            , "test"
                            , "DH_QC"
                            , "0"
                        ).then((res) => {
                            console.log(res);
                            agent.assertRespone(res, 26);
                        })
                    })
                })
            })
        })
        it("send_sms_list_29", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , "132077"
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , "561463"
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
                        agent.assertRespone(res, 29);
                    })
        })
        it("send_sms_list_30", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , cfg.apiArgs.nonbank.cskh.brnID
                    , cfg.apiArgs.nonbank.cskh.contractTypeID
                    , cfg.apiArgs.nonbank.cskh.contractID
                    , cfg.apiArgs.nonbank.cskh.templateID
                    , cfg.apiArgs.numberOfParams
                    , "12betng"
                    , ""
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
        it("send_sms_list_31", () => {
            agent
                .request_send_sms_nonbank_bank(
                    cfg.url.api.nonbank
                    , "129879"
                    , "1"
                    , "10893"
                    , "544387"
                    , "1"
                    , cfg.apiArgs.content
                    , ""
                    , cfg.apiArgs.mobilelist.vina
                    , cfg.apiArgs.istelcosub
                    , cfg.apiArgs.nonbank.cskh.agentID
                    , "phuong"
                    , "phuong"
                    , cfg.apiArgs.nonbank.cskh.username
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 31);
                    })
        })
        // -----------------------// 
        it("send_sms_list_success", () => {
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
        //-----------------------------------------//
    })
})