 import * as env from './ENV';
// let env="PRODUCT";
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
if (env == "STAGING") {
    const url_portal = new url_portal1(
        "http://10.84.70.164/AgentUI12/Login.aspx"
        , "http://10.84.70.164:8089/Login.aspx"
        , "http://10.84.70.164:8099/Login.aspx"
    )
    const url_api = new url_api1(
        "http://10.84.70.148:8085/smsmktur135/api"
        , undefined
        , undefined
    )
    exports.portal = url_portal;
    exports.api = url_api;
}
else if (env == "PRODUCT") {
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
}