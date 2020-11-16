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
    "DH_QC"
    ,"Tr1@123"
    ,"VNPTTEST-DH-qc"
    ,"165"
    ,"TEST9999"
    ,"TEST9999"
    ,"1185"
    ,"TEST9999"
    ,"16092"
    ,"{P1}test9999"
    ,"559104"
    ,undefined
    ,undefined
    ,undefined
    ,undefined
    ,"test"
    ,"test"
    ,undefined
    ,undefined
    ,undefined
    ,undefined
    ,undefined
    ,undefined
);
exports.agentVTT_QC_tratruoc=agent;

}