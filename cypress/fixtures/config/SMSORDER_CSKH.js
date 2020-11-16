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


if (env == "STAGING") {

} else if (env == "PRODUCT") {
    const agent=new AGENT(
        "DL_SMSOrder"
        ,"Tr1@123"
        ,"DL_SMSOrder_Test"
        ,"386"
        ,"KHorder"
        ,"HĐorder"
        ,"8264"
        ,"vinaorder"
        ,"131375"
        ,"{P1}"
        ,"554381"
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
        ,undefined
    );
    exports.agentSMSORDER_CSKH_trasau=agent;

}