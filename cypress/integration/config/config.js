let url = {
    "portal": {
        "agent":    "http://ads.vinaphone.com.vn/agent/Login.aspx",
        "admin":    "http://ads.vinaphone.com.vn:8888/Login.aspx"
    },
    "api": {
        "nonbank":  "http://192.168.38.134:8888/smsmarketing/api",
        "bank":     "http://192.168.38.163:8888/smsbank/api",
        "smsorder": "http://192.168.38.134:8888/smstmdt/api"
    }
};
//-------------------------------------//
let account = {
    "agent": {
        "username": "DH_CS",
        "pw": "Tr1@123"
    },
    "agentqc": {
        "username": "DH_QC",
        "pw": "Tr1@123"
    },
    "admin": {
        "username": "test852017",
        "pw": "a123456A@"
    }
};
//--------------------------------------//
let portalArgs = {
    VTT: {
        cskh: {
            "agentName":    "VNPTTEST-DH-cskh",
            "adserName":    "Do Duy Hoan",
            "contractName": "26082014/VNPT-DH-test",
            "mạng":         "Vinaphone",
            "brn":          "TEST2020",
            "template":     "{P1}test2020",
            "templateID":   "559103"   //giống với template ID trong apiArgs
        },
        qc: {
            "agentName":    "VNPTTEST-DH-qc",
            "adserName":    "TEST9999",
            "contractName": "TEST9999",
            "mạng":         "Vinaphone",
            "brn":          "TEST9999",
            "template":     "{P1}test9999",
            "templateID":   "559104"
        }
    },
    TUNHAN: {
        cskh: {
            "agentName": "DL_VVtest1111",
            "adserName": "KH_test_dltn",
            "contractName": "HĐLV7",
            "mạng": "Vinaphone",
            "brn": "abc123",
            "template": "{P1}abc",
            "templateID": "554387"
        },
        qc: {
            "agentName": "",
            "adserName": "",
            "contractName": "",
            "mạng": "",
            "brn": "",
            "template": "",
            "templateID": ""
        }
    },
    SMSORDER: {
        cksh: {
            "agentName": "DL_SMSOrder_Test",
            "adserName": "KHorder",
            "contractName": "HĐorder",
            "mạng": "Vinaphone",
            "brn": "TMDTod",
            "template": "tempod1",
            "templateID": "379556"
        }
    }
}

let apiArgs = {
    nonbank: {
        cskh: {
            "brnID":            "131887",
            "contractTypeID":   "1",
            "contractID":       "401",
            "templateID":       "559103",
            "agentID":          "164",
            "apiUsername":      "hoandd",
            "apiPassword":      "hoandd",
            "username":         "DH_CS",
        },
        qc: {
            "brnID":            "16092",
            "contractTypeID":   "2",
            "contractID":       "1185",
            "templateID":       "559104",
            "agentID":          "165",
            "apiUsername":      "test",
            "apiPassword":      "test",
            "username":         "DH_QC"
        }
    },
    bank: {
        cskh: {
            "brnID":            "131358",
            "contractTypeID":   "1",
            "contractID":       "401",
            "templateID":       "559105",
            "agentID":          "164",
            "apiUsername":      "hoandd",
            "apiPassword":      "hoandd",
            "username":         "DH_CS",
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
    smsorder: {
        cskh: {
            "brnID": "98542",
            "contractTypeID": "1",
            "contractID": "8264",
            "templateID": "379556",
            "agentID": "386",
            "apiUsername": "smsorder",
            "apiPassword": "123456",
            "username": "DL_SMSOrder",
            "saleOrderID": "1234",
            "packageID": "1"
        },
        qc: {
            "brnID": "",
            "contractTypeID": "",
            "contractID": "",
            "templateID": "",
            "agentID": "",
            "apiUsername": "",
            "apiPassword": "",
            "username": "",
            "saleOrderID": "",
            "packageID": ""
        }
    },
    mobilelist: {
        "vina": "84912158656",
        "viettel": "84396342533",
        "mobi": "84932248120",
        "mnp": "84979382546",
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
exports.apiArgs = apiArgs;
exports.portalArgs = portalArgs;
// exports.adserName = adserName;
// exports.contractName = contractName;
// exports.mạng = mạng;
// exports.brn = brn;
// exports.template = template;