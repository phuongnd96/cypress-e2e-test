let now=new Date();
let rnd = `test ${Math.floor(Math.random() * 10000)}`.concat(now.getMilliseconds());

let get_adser = (agentID, apiUsername, apiPassword) => {
    let req = {
        "RQST": {
            "name": "get_adser",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`
        }
    };
    return req;
}

let get_template = (agentID, labelID, apiUsername, apiPassword) => {
    let req = {
        "RQST": {
            "name": "get_template",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "LABELID": `${labelID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`
        }
    };
    return req;
};

let get_contract = (agentID, adserID, apiUsername, apiPassword) => {
    let req = {
        "RQST": {
            "name": "get_contract",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "ADSERID": `${adserID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`
        }
    };
    return req;
}

let create_template_CSKH = (agentID, contractID, label, content, samplemessage, apiUsername, apiPassword, username) => {
    let req = {
        "RQST": {
            "name": "create_template",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "CONTRACTID": `${contractID}`,
            "LABEL": `${label}`,
            "CONTENT": `${content}`,
            "SAMPLEMESSAGE": `${samplemessage}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`
        }
    };
    return req;
}

let create_template_QC = (agentID, contractID, label, content, totalParams, apiUsername, apiPassword, username) => {
    let req = {
        "RQST": {
            "name": "create_template",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "CONTRACTID": `${contractID}`,
            "LABEL": `${label}`,
            "CONTENT": `${content}`,
            "TOTALPARAMS": `${totalParams}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`
        }
    };
    return req;
}

let get_label = (agentID, adserID, contractID, apiUsername, apiPassword) => {
    let req = {
        "RQST": {
            "name": "get_label",
            "REQID": `${rnd}`,
            "AGENTID": `${agentID}`,
            "ADSERID": `${adserID}`,
            "CONTRACTID": `${contractID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`
        }
    };
    return req;
}


let send_sms_list = (brnID, contracTypeID, contractID, templateID, numberOfParams, content, scheduletime, mobilelist, istelcosub, agentID, apiUsername, apiPassword, username, dataCoding) => {
    let req = {
        "RQST": {
            "name": "send_sms_list",
            "REQID": `${rnd}`,
            // "REQID": "1",
            "LABELID": `${brnID}`,
            "CONTRACTTYPEID": `${contracTypeID}`,
            "CONTRACTID": `${contractID}`,
            "TEMPLATEID": `${templateID}`,
            "PARAMS": [
                {
                    "NUM": `${numberOfParams}`,
                    "CONTENT": `${content}`
                }
            ],
            "SCHEDULETIME": `${scheduletime}`,
            "MOBILELIST": `${mobilelist}`,
            "ISTELCOSUB": `${istelcosub}`,
            "AGENTID": `${agentID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`,
            "DATACODING": `${dataCoding}`,
            // "SCHEDULETIME": `${scheduletime}`
            // "SCHEDULETIME": ``
        }
    }
    return req;
}

let send_sms_list_bank = (reqIDBank,brnID, contracTypeID, contractID, templateID, numberOfParams, content, scheduletime, mobilelist, istelcosub, agentID, apiUsername, apiPassword, username, dataCoding) => {
    let req = {
        "RQST": {
            "name": "send_sms_list",
            "REQID": `${reqIDBank}`,
            // "REQID": "1",
            "LABELID": `${brnID}`,
            "CONTRACTTYPEID": `${contracTypeID}`,
            "CONTRACTID": `${contractID}`,
            "TEMPLATEID": `${templateID}`,
            "PARAMS": [
                {
                    "NUM": `${numberOfParams}`,
                    "CONTENT": `${content}`
                }
            ],
            "SCHEDULETIME": `${scheduletime}`,
            "MOBILELIST": `${mobilelist}`,
            "ISTELCOSUB": `${istelcosub}`,
            "AGENTID": `${agentID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`,
            "DATACODING": `${dataCoding}`,
            // "SCHEDULETIME": `${scheduletime}`
            // "SCHEDULETIME": ``
        }
    }
    return req;
}





let send_sms_list_SMSORDER = (brnID, contracTypeID, contractID, templateID, numberOfParams, content, scheduletime, mobilelist, istelcosub, agentID, apiUsername, apiPassword, username, dataCoding, saleOrderID, packageID) => {
    let req = {
        "RQST": {
            "name": "send_sms_list",
            "REQID": `${rnd}`,
            "LABELID": `${brnID}`,
            "CONTRACTTYPEID": `${contracTypeID}`,
            "CONTRACTID": `${contractID}`,
            "TEMPLATEID": `${templateID}`,
            "PARAMS": [
                {
                    "NUM": `${numberOfParams}`,
                    "CONTENT": `${content}`
                }
            ],
            "SCHEDULETIME": `${scheduletime}`,
            "MOBILELIST": `${mobilelist}`,
            "ISTELCOSUB": `${istelcosub}`,
            "AGENTID": `${agentID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`,
            "DATACODING": `${dataCoding}`,
            "SALEORDERID": `${saleOrderID}`,
            "PACKAGEID": `${packageID}`
        }
    };
    return req;
}

let send_sms_list_ENCRYPTED = (
    brnID, contracTypeID, contractID, templateID, numberOfParams, content, scheduletime, mobilelist, istelcosub, agentID, apiUsername, apiPassword, username, dataCoding,encrypted) => {
    let req = {
        "RQST": {
            "name": "send_sms_list",
            "REQID": `${rnd}`,
            "LABELID": `${brnID}`,
            "CONTRACTTYPEID": `${contracTypeID}`,
            "CONTRACTID": `${contractID}`,
            "TEMPLATEID": `${templateID}`,
            "PARAMS": [
                {
                    "NUM": `${numberOfParams}`,
                    "CONTENT": `${content}`
                }
            ],
            "SCHEDULETIME": `${scheduletime}`,
            "MOBILELIST": `${mobilelist}`,
            "ISTELCOSUB": `${istelcosub}`,
            "AGENTID": `${agentID}`,
            "APIUSER": `${apiUsername}`,
            "APIPASS": `${apiPassword}`,
            "USERNAME": `${username}`,
            "DATACODING": `${dataCoding}`,
            "ENCRYPTED":`${encrypted}`
        }
    }
    return req;
}


module.exports = {
    get_adser
    , get_template
    , get_contract
    , create_template_CSKH
    , create_template_QC
    , get_label
    , send_sms_list
    , send_sms_list_SMSORDER
    ,send_sms_list_ENCRYPTED
    ,send_sms_list_bank
}