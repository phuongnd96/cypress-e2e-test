import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';
const agent = new AGENT();
// const admin = new ADMIN();

//-------------------------------------//
context("Get adser get_template get_contract",()=>{
    it(`get_adser_0
    and get_contract_0`, () => {
        agent.request_get_adser(
            cfg.url.api.bank
            , cfg.apiArgs.bank.cskh.agentID
            , "PHUONGQA_GETADSER_LIST"
            , "Tr1@123"
        ).then((res) => {
            agent.assertRespone(res, 0);
            res.body["RPLY"]["ADSERDETAIL"].forEach(element => {
                if (element["ADSERNAME"] == "Nguyễn Duy Phương") {
                    agent.request_get_contract(
                        cfg.url.api.bank
                        , cfg.apiArgs.bank.cskh.agentID
                        , element["ADSERID"]
                        , "PHUONGQA_GETCONTRACT_LIST"
                        , "Tr1@123"
                    ).then((respone) => {
                        agent.assertRespone(respone, 0);
                    })
                    agent.request_get_label(
                        cfg.url.api.bank
                        , cfg.apiArgs.bank.cskh.agentID
                        , element["ADSERID"]
                        , cfg.apiArgs.bank.cskh.contractID
                        , "PHUONGQA_GETLABEL"
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
            cfg.url.api.bank
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.brnID
            , "product_gettemplate_phuong"
            , "Tr1@123"
        ).then((res) => {
            agent.assertRespone(res, 0);
        })
    });
})

context("Gửi tin qua API", () => {

    specify("Gửi tin qua API tin nội mạng site bank", () => {
        // agent
        //     .request_send_sms_nonbank_bank(
        //         cfg.url.api.bank
        //         , cfg.apiArgs.bank.cskh.brnID
        //         , cfg.apiArgs.bank.cskh.contractTypeID
        //         , cfg.apiArgs.bank.cskh.contractID
        //         , cfg.apiArgs.bank.cskh.templateID
        //         , cfg.apiArgs.numberOfParams
        //         , cfg.apiArgs.content
        //         , ""
        //         , cfg.apiArgs.mobilelist.vina
        //         , cfg.apiArgs.istelcosub
        //         , cfg.apiArgs.bank.cskh.agentID
        //         , cfg.apiArgs.bank.cskh.apiUsername
        //         , cfg.apiArgs.bank.cskh.apiPassword
        //         , cfg.apiArgs.bank.cskh.username
        //         , 0).then((res) => {
        //             console.log(res);
        //             agent.assertRespone(res, 0);
        //         })
        // cy.wait(2000);
        
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"121a13242421233"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , "386872"
            , cfg.apiArgs.numberOfParams
            , "abc"
            , ""
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        ).then((res) => {
                         console.log(res);
                         agent.assertRespone(res, 0);
                     })
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"2142141221a3125513"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , "386873"
            , cfg.apiArgs.numberOfParams
            , "1.2.3"
            , ""
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        ).then((res) => {
            console.log(res);
            agent.assertRespone(res, 0);
        })
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"1267124214576a223"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , "386874"
            , cfg.apiArgs.numberOfParams
            , "3!!@("
            , ""
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        ).then((res) => {
            console.log(res);
            agent.assertRespone(res, 0);
        })
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"12458651241248b653"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , "386875"
            , cfg.apiArgs.numberOfParams
            , "2 3!@."
            , ""
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        ).then((res) => {
            console.log(res);
            agent.assertRespone(res, 0);
        })
    })
    specify("Gửi tin qua API nội mạng đặt lịch site bank", () => {
        // agent
        //     .request_send_sms_nonbank_bank(
        //         cfg.url.api.bank
        //         , cfg.apiArgs.bank.cskh.brnID
        //         , cfg.apiArgs.bank.cskh.contractTypeID
        //         , cfg.apiArgs.bank.cskh.contractID
        //         , cfg.apiArgs.bank.cskh.templateID
        //         , cfg.apiArgs.numberOfParams
        //         , cfg.apiArgs.content
        //         , "29/05/2020 16:30"
        //         , cfg.apiArgs.mobilelist.vina
        //         , cfg.apiArgs.istelcosub
        //         , cfg.apiArgs.bank.cskh.agentID
        //         , cfg.apiArgs.bank.cskh.apiUsername
        //         , cfg.apiArgs.bank.cskh.apiPassword
        //         , cfg.apiArgs.bank.cskh.username
        //         , 0).then((res) => {
        //             console.log(res);
        //             agent.assertRespone(res, 0);
        //         })
        // cy.wait(2000);
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"996b99"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , cfg.apiArgs.bank.cskh.templateID
            , cfg.apiArgs.numberOfParams
            , cfg.apiArgs.content
            , "29/05/2020 16:30"
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        )
        .then((res) => {
            console.log(res);
            agent.assertRespone(res, 0);
        })
    })

    specify("Đại lý VIễn thông thành phố gửi tin qua API với API user khác IP set trong mục Quản lý API của Admin Portal", () => {

        // agent
        //     .request_send_sms_nonbank_bank(
        //         cfg.url.api.bank
        //         , cfg.apiArgs.bank.cskh.brnID
        //         , cfg.apiArgs.bank.cskh.contractTypeID
        //         , cfg.apiArgs.bank.cskh.contractID
        //         , cfg.apiArgs.bank.cskh.templateID
        //         , cfg.apiArgs.numberOfParams
        //         , cfg.apiArgs.content
        //         , cfg.apiArgs.scheduletime
        //         , cfg.apiArgs.mobilelist.vina
        //         , cfg.apiArgs.istelcosub
        //         , cfg.apiArgs.bank.cskh.agentID
        //         , 123
        //         , cfg.apiArgs.bank.cskh.apiPassword
        //         , cfg.apiArgs.bank.cskh.username
        //         , 0).then((res) => {
        //             console.log(res);
        //             agent.assertRespone(res, 1);
        //         })
        // cy.wait(2000);
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            ,"1211122133"
            , cfg.apiArgs.bank.cskh.brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            , cfg.apiArgs.bank.cskh.templateID
            , cfg.apiArgs.numberOfParams
            , cfg.apiArgs.content
            , ""
            , cfg.apiArgs.mobilelist.vina
            , cfg.apiArgs.istelcosub
            , cfg.apiArgs.bank.cskh.agentID
            , cfg.apiArgs.bank.cskh.apiUsername.concat("test13123123")
            , cfg.apiArgs.bank.cskh.apiPassword
            , cfg.apiArgs.bank.cskh.username
            , 0
        )
    })
});
