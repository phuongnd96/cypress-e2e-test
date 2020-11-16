import * as env from './ENV';

function AGENT(
    userName
    , password
    , agentName
    , agentID
    , adserName
    , contractName
    , contractID
    , brandName
    , brnID
    , template
    , templateID
    , brandNameBank
    , brnBankID
    , templateBank
    , templateBankID
    , apiUsernameSendSms
    , apiPasswordSendSms
    , apiUsernameGetlabel
    , apiPasswordGetLabel
    , apiUsernameGetContract
    , apiPasswordGetContract
    , apiUsernameGetTemplate
    , apiPasswordGetTemplate
) {
    this.userName = userName;
    this.password = password;
    this.agentName = agentName;
    this.agentID = agentID;
    this.adserName = adserName;
    this.contractName = contractName;
    this.contractID = contractID;
    this.brandName = brandName;
    this.brnID = brnID;
    this.template = template;
    this.templateBankID = templateID;
    this.brandNameBank = brandNameBank;
    this.brnBankID = brnBankID;
    this.templateBank = templateBank;
    this.templateBankID = templateBankID;
    this.apiUsernameSendSms = apiUsernameSendSms;
    this.apiPasswordSendSms = apiPasswordSendSms;
    this.apiUsernameGetlabel = apiUsernameGetlabel;
    this.apiPasswordGetLabel = apiPasswordGetLabel;
    this.apiUsernameGetContract = apiUsernameGetContract;
    this.apiPasswordGetContract = apiPasswordGetContract;
    this.apiUsernameGetTemplate = apiUsernameGetTemplate;
    this.apiPasswordGetTemplate = apiPasswordGetTemplate;
}

if (env == "STAGING") {

} else if (env == "PRODUCT") {
    const agent = new AGENT(
        "VVtest"
        , "Tr1@1234"
        , "VVtest"
        , "381"
        , "KHVV"
        , "qctn1"
        , "10748"
        , "brnqc101"
        , "126508"
        , "	{P1} test"
        , "562208"
        , undefined
        , undefined
        , undefined
        , undefined
        , "khvv"
        , "khvv"
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
    );
    exports.agentVTT_QC_trasau = agent;
}