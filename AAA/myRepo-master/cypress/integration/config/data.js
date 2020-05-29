import * as helpfunc from './helpfunc';
import * as cs from './constructor';
// let env = "PRODUCT";
let env = "STAGING";
const AGENT = cs.AGENT;
const url_p = cs.url_portal1;
const url_a = cs.url_api1;
if (env === "STAGING") {
    const agent_VTT_CSKH_TRASAU = new AGENT(
        "accVIVASTEST_UR132_VTT"
        , "Tr1@123"
        , "VIVASTEST_UR132_VTT"
        , "437"
        , "Nguyễn Duy Phương"
        , "HĐ TEST 135"
        , "8522"
        , "BRN cypress"
        , "100248"
        , "Cypress{D}"
        , "386149"
        , "APIBANK"
        , "100235"
        , "8	{D}test123"
        , "386388"
        , "PHUONGQA_SENDSMS"
        , "Tr1@123"
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , "PHUONGQA"
        , "Tr1@123"
    );
    const agent_VTT_QC_TRASAU = new AGENT(
        "accDL_testphuongQC"
        , "Tr1@12345"
        , "DL_testphuongQC"
        , "434"
        , "Duy Phuong"
        , "hop dong test"
        , "8479"
        , "HELLO123"
        , "100174"
        , "{P1} phuongtest"
        , "386671"
        , undefined
        , undefined
        , undefined
        , undefined
        , "phuongQC"
        , "Tr1@123"
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , undefined
        , "phuong_taotemp_qc"
        , "Tr1@123"
    );
    const url_api = new url_a(
        "http://10.84.70.148:8085/smsmktur135/api"
        , "http://10.84.70.148:8096/smsbank12/api"
        , undefined
    )
    const db = {
        agent_VTT_CSKH_TRASAU: agent_VTT_CSKH_TRASAU,
        agent_VTT_QC_TRASAU: agent_VTT_QC_TRASAU,
        url_api: url_api
    }
    exports.db = db;

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
        , undefined
        , undefined
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
    const url_portal = new url_p(
        "http://ads.vinaphone.com.vn/agent/Login.aspx"
        , "http://ads.vinaphone.com.vn:8888/Login.aspx"
        , "http://esms.com.vn/default.aspx"
    )
    const url_api = new url_a(
        "http://192.168.38.134:8888/smsmarketing/api"
        , "http://192.168.38.163:8888/smsbank/api"
        , "http://192.168.38.134:8888/smstmdt/api"
    )
    const db = {
        url_portal: url_portal,
        url_api: url_api,
        agent_SMSORDER_CSKH: agent_SMSORDER_CSKH,
        agent_TUNHAN_CSKH_TRASAU: agent_TUNHAN_CSKH_TRASAU,
        agent_TUNHAN_CSKH_TRATRUOC: agent_TUNHAN_CSKH_TRATRUOC,
        agent_TUNHAN_QC: agent_TUNHAN_QC,
        agent_VTT_CSKH_TRASAU: agent_VTT_CSKH_TRASAU,
        agent_VTT_CSKH_TRATRUOC: agent_VTT_CSKH_TRATRUOC,
        agent_VTT_QC_TRASAU: agent_VTT_QC_TRASAU,
        agent_VTT_QC_TRATRUOC: agent_VTT_QC_TRATRUOC,
        helpfunc: helpfunc
    }
    exports.db = db;
}





