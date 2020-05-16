let env = "PRODUCT";
import * as helpfunc from './helpfunc';
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

if (env === "STAGING") {

}
else if (env === "PRODUCT") {

    const agent_SMSORDER_CSKH = new AGENT(
        "DL_SMSOrder"
        , "Tr1@123"
        , "DL_SMSOrder_Test"
        , "386"
        , "KHorder"
        , "HĐorder"
        , "8264"
        , "vinaorder"
        , "131375"
        , "{P1}"
        , "554381"
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const agent_TUNHAN_CSKH_TRASAU = new AGENT(
        "DLtest_71"
        , "Tr1@123"
        , "DL_VV"
        , "389"
        , "khtest71"
        , "hdtest71"
        , "8434"
        , "test71_khac"
        , "100657"
        , "ThuyNT test CSKH YTE-GD {P1}"
        , "487593"
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const agent_TUNHAN_CSKH_TRATRUOC = new AGENT(
        "bank123"
        , "Tr1@1234"
        , "Testbank"
        , "384"
        , "dltnbank"
        , "DLTNbank"
        , "8183"
        , "phuongtesst"
        , "132121"
        , "{P1}abc"
        , "562209"
        , "dltnbank"
        , "97093"
        , "{P1}"
        , "369876"
    );
    const agent_TUNHAN_QC = new AGENT(
        undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const agent_VTT_CSKH_TRASAU = new AGENT(
        "DH_CS"
        , "Tr1@123"
        , "VNPTTEST-DH-cskh"
        , "164"
        , "Do Duy Hoan"
        , "26082014/VNPT-DH-test"
        , "401"
        , "TEST2020"
        , "131887"
        , "{P1}test2020"
        , "559103"
        , "bank2704"
        , "131358"
        , "{P1}testbank"
        , "559105"
        , "hoandd"
        , "hoandd"
        , "product_getlabel_phuong"
        , "Tr1@123"
        , "product_getcontract_phuong"
        , "Tr1@123"
        , "product_gettemplate_phuong"
        , "Tr1@123"
    );
    const agent_VTT_CSKH_TRATRUOC = new AGENT(
        "DL_VV"
        , "Tr1@1234"
        , "DL_VVtest1111"
        , "349"
        , "KH_test_dltn"
        , "HĐLV7"
        , "7304"
        , "abc123"
        , "131376"
        , "{P1}abc"
        , "554387"
        , "banktunhan"
        , "132120"
        , "{P1}testbanktunhan"
        , "562207"
        , "dltn"
        , "dltn"
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const agent_VTT_QC_TRASAU = new AGENT(
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
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const agent_VTT_QC_TRATRUOC = new AGENT(
        "DH_QC"
        , "Tr1@123"
        , "VNPTTEST-DH-qc"
        , "165"
        , "TEST9999"
        , "TEST9999"
        , "1185"
        , "TEST9999"
        , "16092"
        , "{P1}test9999"
        , "559104"
        , undefined
        , undefined
        , undefined
        , undefined
        , "test"
        , "test"
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
    );
    const url_portal = new url_portal1(
        "http://ads.vinaphone.com.vn/agent/Login.aspx"
        , "http://ads.vinaphone.com.vn:8888/Login.aspx"
        , "http://esms.com.vn/default.aspx"
    )
    const url_api = new url_api1(
        "http://192.168.38.134:8888/smsmarketing/api"
        , "http://192.168.38.163:8888/smsbank/api"
        , "http://192.168.38.134:8888/smstmdt/api"
    )
    exports.portal = url_portal;
    exports.api = url_api;
    exports.agent_SMSORDER_CSKH = agent_SMSORDER_CSKH;
    exports.agent_TUNHAN_CSKH_TRASAU = agent_TUNHAN_CSKH_TRASAU;
    exports.agent_TUNHAN_CSKH_TRATRUOC = agent_TUNHAN_CSKH_TRATRUOC;
    exports.agent_TUNHAN_QC = agent_TUNHAN_QC;
    exports.agent_VTT_CSKH_TRASAU = agent_VTT_CSKH_TRASAU;
    exports.agent_VTT_CSKH_TRATRUOC = agent_VTT_CSKH_TRATRUOC;
    exports.agent_VTT_QC_TRASAU = agent_VTT_QC_TRASAU;
    exports.agent_VTT_QC_TRATRUOC = agent_VTT_QC_TRATRUOC;
    exports.helpfunc = helpfunc;
}

