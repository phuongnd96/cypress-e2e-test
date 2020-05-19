import * as env from './ENV';
import * as help from './helpfunc';

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


if (env == "PRODUCT") {
 const agent=new AGENT(
    "DH_CS"
    ,"Tr1@123"
    ,"VNPTTEST-DH-cskh"
    ,"164"
    ,"Do Duy Hoan"
    ,"26082014/VNPT-DH-test"
    ,"401"
    ,"TEST2020"
    ,"131887"
    ,"{P1}test2020"
    ,"559103"
    ,"bank2704"
    ,"131358"
    ,"{P1}testbank"
    ,"559105"
    ,"hoandd"
    ,"hoandd"
    ,"product_getlabel_phuong"
    ,"Tr1@123"
    ,"product_getcontract_phuong"
    ,"Tr1@123"
    ,"product_gettemplate_phuong"
    ,"Tr1@123"
 )
 exports.agentVTT_CSKH_trasau=agent;
} else if (env == "STAGING") {

}

