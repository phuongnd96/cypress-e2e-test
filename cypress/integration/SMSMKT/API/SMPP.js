import ADMIN from '../../PageObjects/Admin';
import AGENT from '../../PageObjects/Agent';
import * as cfg from '../../config/config';
const agent = new AGENT();
// const admin = new ADMIN();
context("API SMSMKT", () => {
    describe("API nonbank", () => {
        it(`get_adser_0`, () => {
            agent.request_get_adser(
                "http://10.84.70.148:8099/smsmktur135/api"
                , "462"
                , "testqt"
                , "testqt"
            ).then((res) => {
                agent.assertRespone(res, 0);
        })
    })
        it("get_template_0", () => {
            agent.request_get_template(
                "http://10.84.70.148:8099/smsmktur135/api"
                , "462"
                , "110381"
                , "testqt"
                , "testqt"
            ).then((res) => {
                agent.assertRespone(res, 0);
            })
        })
        it("get_contract_0",()=>{
            agent.request_get_contract(
                "http://10.84.70.148:8099/smsmktur135/api"
                , "462"
                , "7884"
                , "testqt"
                , "testqt"
            ).then((respone) => {
                agent.assertRespone(respone, 0);
            })
        })
        it("get_label_0",()=>{
            agent.request_get_label(
                "http://10.84.70.148:8099/smsmktur135/api"
                ,"462"
                ,""
                , "8298"
                , "testqt"
                , "testqt"
            ).then((respone) => {
                agent.assertRespone(respone, 0);
            })
        })
        it("send_sms_list_1", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "test"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt".concat("test")
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 1);
                    })
        })
        it("send_sms_list_2", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "test"
                    , "saidinhdang"
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 2);
                    })
        })
        it("send_sms_list_7", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129".concat("11111111")
                    , "1"
                    , "test"
                    , "saidinhdang"
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 7);
                    })
        })
        it("send_sms_list_9", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "2"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "test"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 9);
                    })
        })
        it("send_sms_list_10", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "test"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc".concat("test")
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 10);
                    })
        })
        it.skip("send_sms_list_11", () => {
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
                     "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381".concat("1111111111")
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "test"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 14);
                    })
        })
        it("send_sms_list_17", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    , "á"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 17);
                    })
        })
        it("send_sms_list_23", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    ,`t1`
                    , ""
                    , "84912158656,84336316420"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 23);
                    })
        })
        it("send_sms_list_24", () => {
            agent
            .request_send_sms_nonbank_bank(
                "http://10.84.70.148:8099/smsmktur135/api"
                , "110381"
                , "1"
                ,"8298"
                ,"387129"
                , "1"
                , "test á"
                ,"12-06-2020 15:00"
                , "84912158656"
                , "0"
                , "462"
                , "testqt"
                , "testqt"
                , "haitva_cskh_vtt_tc"
                , 0).then((res) => {
                    console.log(res);
                    agent.assertRespone(res, 24);
                })
        })
        it("send_sms_list_25", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110298"
                    , "1"
                    ,"8241"
                    ,"387131"
                    , "1"
                    ,`t1`
                    , ""
                    , "84391200566"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 25);
                    })
        })
        //qc
        it.skip("QC_send_sms_list_26", () => {
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
                    "http://10.84.70.148:8099/smsmktur135/api"
                    ,"110353"
                    , "1"
                    ,"8241"
                    ,"387130"
                    , "1"
                    ,`t1`
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 29);
                    })
        })
        it("send_sms_list_30", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    ,"alcohol"
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 30);
                    })
        })
        it("send_sms_list_15", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    ,`t1`
                    , ""
                    , "84912158656"
                    , "0"
                    , "456"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 15);
                    })
        })
        it("send_sms_list_31", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110300"
                    , "1"
                    ,"8299"
                    ,"387132"
                    , "1"
                    ,`t1`
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 31);
                    })
        })
        // -----------------------// 
        it("send_sms_list_success_Vinaphone", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    ,`t1`
                    , ""
                    , "84912158656"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 0);
                    })
        })
        it("send_sms_list_success_Itel", () => {
            agent
                .request_send_sms_nonbank_bank(
                    "http://10.84.70.148:8099/smsmktur135/api"
                    , "110381"
                    , "1"
                    ,"8298"
                    ,"387129"
                    , "1"
                    ,`t1`
                    , ""
                    , "84879833824"
                    , "0"
                    , "462"
                    , "testqt"
                    , "testqt"
                    , "haitva_cskh_vtt_tc"
                    , 0).then((res) => {
                        console.log(res);
                        agent.assertRespone(res, 0);
                    })
        })
        //-----------------------------------------//
    })
})