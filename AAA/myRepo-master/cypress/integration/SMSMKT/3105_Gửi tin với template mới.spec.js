import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';
const agent = new AGENT();


describe("Gui tin qua API", () => {
    specify("Gửi tin qua API tin nội mạng site nonbank temp A", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                // , cfg.apiArgs.nonbank.cskh.templateID    Template loại A
                , cfg.apiArgs.numberOfParams
                , "a1!#*("
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
    specify("Gửi tin qua API tin nội mạng site nonbank temp D", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                // , cfg.apiArgs.nonbank.cskh.templateID Template loại D
                , cfg.apiArgs.numberOfParams
                , "1.2 a@!#!_~"
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
    specify("Gửi tin qua API tin nội mạng site nonbank temp B", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                // , cfg.apiArgs.nonbank.cskh.templateID  template loại B
                , cfg.apiArgs.numberOfParams
                , "1.2"
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
    specify("Gửi tin qua API tin nội mạng site nonbank temp C", () => {
        agent
            .request_send_sms_nonbank_bank(
                cfg.url.api.nonbank
                , cfg.apiArgs.nonbank.cskh.brnID
                , cfg.apiArgs.nonbank.cskh.contractTypeID
                , cfg.apiArgs.nonbank.cskh.contractID
                // , cfg.apiArgs.nonbank.cskh.templateID template loại C
                , cfg.apiArgs.numberOfParams
                , "1@!#$%^()_=`a"
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
    specify("Gửi tin qua API tin nội mạng site bank temp A", () => {
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            , "121a13242421233"     //request iD
            , cfg.apiArgs.bank.cskh.brnID   //brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            // , "386872"                      //template ID loại A
            , cfg.apiArgs.numberOfParams
            , "a1!#*("
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
    specify("Gửi tin qua API tin nội mạng site bank temp B", () => {
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            , "121a13242421888233"     //request iD
            , cfg.apiArgs.bank.cskh.brnID   //brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            // , "386872"                      //template ID loại B
            , cfg.apiArgs.numberOfParams
            , "1.2"
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
    specify("Gửi tin qua API tin nội mạng site bank temp C", () => {
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            , "121a132424212399993"     //request iD
            , cfg.apiArgs.bank.cskh.brnID   //brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            // , "386872"                      //template ID loại C
            , cfg.apiArgs.numberOfParams
            , "1@!#$%^()_=`a"
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
    specify("Gửi tin qua API tin nội mạng site bank temp D", () => {
        agent.request_send_sms_list_bank(
            cfg.url.api.bank
            , "121a132424212311193"     //request iD
            , cfg.apiArgs.bank.cskh.brnID   //brnID
            , cfg.apiArgs.bank.cskh.contractTypeID
            , cfg.apiArgs.bank.cskh.contractID
            // , "386872"                      //template ID loại D
            , cfg.apiArgs.numberOfParams
            , "1.2 a@!#!_~"
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
})

