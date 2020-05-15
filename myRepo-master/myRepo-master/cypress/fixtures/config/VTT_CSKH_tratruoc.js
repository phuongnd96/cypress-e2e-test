import * as env from './ENV';

function AGENT(
    userName
    ,password
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
    this.userName=userName;
    this.password=password;
    this.agentName=agentName;
    this.agentID=agentID;
    this.adserName=adserName;
    this.contractName=contractName;
    this.contractID=contractID;
    this.brandName=brandName;
    this.brnID=brnID;
    this.template=template;
    this.templateBankID=templateID;
    this.brandNameBank=brandNameBank;
    this.brnBankID=brnBankID;
    this.templateBank=templateBank;
    this.templateBankID=templateBankID;
    this.apiUsernameSendSms=apiUsernameSendSms;
    this.apiPasswordSendSms=apiPasswordSendSms;
    this.apiUsernameGetlabel=apiUsernameGetlabel;
    this.apiPasswordGetLabel=apiPasswordGetLabel;
    this.apiUsernameGetContract=apiUsernameGetContract;
    this.apiPasswordGetContract=apiPasswordGetContract;
    this.apiUsernameGetTemplate=apiUsernameGetTemplate;
    this.apiPasswordGetTemplate=apiPasswordGetTemplate;
}


if (env == "STAGING") {

} else if (env == "PRODUCT") {
const agent=new AGENT(
    "DL_VV"
    ,"Tr1@1234"
    ,"DL_VVtest1111"
    ,"349"
    ,"KH_test_dltn"
    ,"HĐLV7"
    ,"7304"
    ,"abc123"
    ,"131376"
    ,"{P1}abc"
    ,"554387"
    ,"banktunhan"
    ,"132120"
    ,"{P1}testbanktunhan"
    ,"562207"
    ,"dltn"
    ,"dltn"
    ,undefined
    ,undefined
    ,undefined
    ,undefined
    ,undefined
    ,undefined
);
exports.agentVTT_CSKH_tratruoc=agent;
}