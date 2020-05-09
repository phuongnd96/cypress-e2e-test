let url = {
    "portal": {
        "agent": "http://10.84.70.164/AgentUI134/Login.aspx",
        "admin": "http://10.84.70.164:8098/Login.aspx"
    },
    "api": {
        "nonbank": "http://10.84.70.148:8085/smsmktur135/api",
        "bank": "",
        "smsOrder": ""
    }
};
//-------------------------------------//
let account = {
    "agent": {
        "username": "accVIVASTEST_UR132_VTT",
        "pw": "Tr1@123"
    },
    "admin": {
        "username": "test852017",
        "pw": "Admin@123"
    }
};
//--------------------------------------//
let portalArgs = {
    cskh:{
        "adserName": "",
        "contractName": "",
        "mạng": "",
        "brn": "",
        "template": ""
    },
    qc:{
        "adserName": "",
        "contractName": "",
        "mạng": "",
        "brn": "",
        "template": ""
    }
}
let adserName = "Nguyễn Duy Phương";
let contractName = "HĐ TEST 135";
let mạng = "Vinaphone";
let brn = "Test.";
let template = "Test Cypress {P1}";

let apiArgs = {
    nonbank: {
        cskh: {
            "brnID": "100272",
            "contractTypeID": "1",
            "contractID": "8481",
            "templateID": "386351",
            "agentID": "433",
            "apiUsername": "phuongapi",
            "apiPassword": "Tr1@123",
            "username": "accDL_testphuong",
        },
        qc: {
            "brnID": "100174",
            "contractTypeID": "2",
            "contractID": "8479",
            "templateID": "386350",
            "agentID": "434",
            "apiUsername": "phuongQC",
            "apiPassword": "Tr1@123",
            "username": "accDL_testphuongQC"
        }
    },
    bank: {
        cskh: {
            "brnID": "",
            "contractTypeID": "",
            "contractID": "",
            "templateID": "",
            "agentID": "",
            "apiUsername": "",
            "apiPassword": "",
            "username": "",
        },
        qc: {

            "brnID": "",
            "contractTypeID": "",
            "contractID": "",
            "templateID": "",
            "agentID": "",
            "apiUsername": "",
            "apiPassword": "",
            "username": ""
        }
    },
    smsmorder: {
        cskh: {
            "brnID": "",
            "contractTypeID": "",
            "contractID": "",
            "templateID": "",
            "agentID": "",
            "apiUsername": "",
            "apiPassword": "",
            "username": "",
        },
        qc: {
            "brnID": "",
            "contractTypeID": "",
            "contractID": "",
            "templateID": "",
            "agentID": "",
            "apiUsername": "",
            "apiPassword": "",
            "username": ""
        }
    },
    mobilelist: {
        "vina": "84912158656",
        "viettel": "84396342533",
        "mobi": "",
        "mnp": "",
        "mnp_stag": ""
    },
    "numberOfParams": "1",
    "content": "abc",
    "scheduletime": "",
    "istelcosub": "0",
    "productIP": "",
    "stagingIP": "*,10.84.10.230"
}
//-------------------------------------//
let now = new Date();
let scheduleTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
let rnd = Math.floor(Math.random() * 10000000);

if (now.getDate() < 10 && now.getMonth() + 1 < 10) {
    scheduleTime = `0${now.getDate()}-0${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
} else if (now.getDate() > 10) {
    scheduleTime = `${now.getDate()}-0${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
} else if (now.getMonth() + 1 > 10) {
    scheduleTime = `0${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours() + 3}:${Math.floor(Math.random() * 50 + 10)}`;
}
//---------------------------------------//

exports.url = url;
exports.account = account;
exports.rnd = rnd;
exports.scheduleTime = scheduleTime;
exports.adserName = adserName;
exports.contractName = contractName;
exports.mạng = mạng;
exports.brn = brn;
exports.template = template;
exports.apiArgs = apiArgs;
exports.portalArgs=portalArgs;