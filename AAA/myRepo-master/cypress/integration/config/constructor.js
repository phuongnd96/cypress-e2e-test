function url_portal1(agentPortal, adminPortal, esmsPortal) {
    this.agentPortal = agentPortal;
    this.adminPortal = adminPortal;
    this.esmsPortal = esmsPortal;
}
function url_api1(nonbank, bank, smsorder) {
    this.bank = bank;
    this.nonbank = nonbank;
    this.smsorder = smsorder;
}
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
    ,apiUsernameCreateTemplate
    ,apiPasswordCreateTemplate
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
    this.apiUsernameCreateTemplate=apiUsernameCreateTemplate;
    this.apiPasswordCreateTemplate=apiPasswordCreateTemplate;
}
exports.url_portal1=url_portal1;
exports.url_api1=url_api1;
exports.AGENT=AGENT;

