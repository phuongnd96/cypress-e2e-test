let ENV = "PRODUCT";
let now = new Date();
let rnd = Math.floor(Math.random() * 10000000);
//count là số round test (vd: 0, 1, 2, 3....);
let count=5;
// thời giạn đặt lịch và gửi tin trên portal 
let sentTime={
    // fromCreateDate:"21/05/2020",
    // toCreateDate:"21/05/2020",
    // fromScheduleDate:"21/05/2020",
    // toScheduleDate:"21/05/2020",
    fromCreateDate:makeDate("/"),
    toCreateDate:makeDate("/"),
    fromScheduleDate:makeDate("/"),
    toScheduleDate:makeDate("/")
}

function makeDate(sym){
    if (now.getMonth()<9){
        if (now.getDate()<10){
            return `0${now.getDate()}${sym}0${now.getMonth() + 1}${sym}${now.getFullYear()}`;
        }
        return `${now.getDate()}${sym}0${now.getMonth() + 1}${sym}${now.getFullYear()}`
    }
    else{
        if (now.getDate()<10){
            return `0${now.getDate()}${sym}${now.getMonth() + 1}${sym}${now.getFullYear()}`;
        }
        return `${now.getDate()}${sym}1${now.getMonth() + 1}${sym}${now.getFullYear()}`
    }

}
function makeTimeDayLessThan9(hour,sym) {
    return `0${now.getDate() + 1}${sym}0${now.getMonth() + 1}${sym}${now.getFullYear()} ${hour}`;
}
function makeTimeDayMoreThan9(hour,sym) {
    return `${now.getDate() + 1}${sym}0${now.getMonth() + 1}${sym}${now.getFullYear()} ${hour}`;
}
function makeTimeSpecial(hour,sym) {
    return `01${sym}0${now.getMonth() + 1}${sym}${now.getFullYear()} ${hour}`;
}
function scheduleTime(sym) {
    switch (now.getMonth()) {
        case 1:
        case 3:
        case 5:
        case 7:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("08:01",sym);
            }
            else if (now.getDate() < 30) {
                return makeTimeDayMoreThan9("08:01",sym);
            }
            else if (now.getDate() == 31) {
                return makeTimeSpecial("08:01",sym);
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("08:01",sym);
            }
            else if (now.getDate() < 29) {
                return makeTimeDayMoreThan9("08:01",sym);
            }
            else if (now.getDate() == 30) {
                return makeTimeSpecial("08:01",sym);
            }
            //code here
            break;
        case 2:

            if (now.getFullYear() % 100 && now.getFullYear() % 400) {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("08:01",sym);
                }
                else if (now.getDate() < 28) {
                    return makeTimeDayMoreThan9("08:01",sym);
                }
                makeTimeSpecial("08:01");
            }
            else {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("08:01",sym);
                }
                else if (now.getDate() < 27) {
                    return makeTimeDayMoreThan9("08:01",sym);
                }
                return makeTimeSpecial("08:01",sym);
            }
            break;
    }
}
function invalidTime(sym){
    switch (now.getMonth()) {
        case 1:
        case 3:
        case 5:
        case 7:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("07:00",sym);
            }
            else if (now.getDate() < 30) {
                return makeTimeDayMoreThan9("07:00",sym);
            }
            else if (now.getDate() == 31) {
                return makeTimeSpecial("07:00",sym);
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (now.getDate() < 9) {
                return makeTimeDayLessThan9("07:00",sym);
            }
            else if (now.getDate() < 29) {
                return makeTimeDayMoreThan9("07:00",sym);
            }
            else if (now.getDate() == 30) {
                return makeTimeSpecial("07:00",sym);
            }
            //code here
            break;
        case 2:

            if (now.getFullYear() % 100 && now.getFullYear() % 400) {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("07:00",sym);
                }
                else if (now.getDate() < 28) {
                    return makeTimeDayMoreThan9("07:00",sym);
                }
                makeTimeSpecial("07:00",sym);
            }
            else {
                if (now.getDate() < 9) {
                    return makeTimeDayLessThan9("07:00",sym);
                }
                else if (now.getDate() < 27) {
                    return makeTimeDayMoreThan9("07:00",sym);
                }
                return makeTimeSpecial("07:00",sym);
            }
            break;
    }
}

if (ENV == "STAGING") {
    let url = {
        "portal": {
            "agent": "http://10.84.70.164/AgentUI12/Login.aspx",
            "admin": "http://10.84.70.164:8089/Login.aspx",
            "esms":"http://10.84.70.164:8099/Login.aspx"
        },
        "api": {
            "nonbank": "http://10.84.70.148:8085/smsmktur135/api",
            "bank": "http://10.84.70.148:8096/smsbank12/api",
            "smsorder": ""
        }
    };
    //-------------------------------------//
    let account = {
        //VTT
        "agent": {
            "username": "accVIVASTEST_UR132_VTT",
            "pw": "Tr1@123"
        },
        //VTT
        "agentqc": {
            "username": "accDL_testphuongQC",
            "pw": "Tr1@12345"
        },
        "admin": {
            "username": "test852017",
            "pw": "Admin@123"
        },
        "esmsAgent":{
            "username":"84857760576",
            "pw":"Tr1@123"
        }
    };
    //--------------------------------------//
    let portalArgs = {
        VTT: {
            cskh: {
                "agentName": "VIVASTEST_UR132_VTT",
                "adserName": "Nguyễn Duy Phương",
                "contractName": "HĐ TEST 135",
                "mạng": "Vinaphone",
                "brn": "BRN cypress",
                "template": "Test Cypress {P1}",
                "templateID": "386150"   //giống với template ID trong apiArgs
            },
            qc: {
                "agentName": "DL_testphuongQC",
                "adserName": "Duy Phuong",
                "contractName": "hop dong test",
                "mạng": "Vinaphone",
                "brn": "HELLO123",
                "template": "{P1}testqcstag",
                "templateID": "386370"
            }
        },
        TUNHAN: {
            cskh: {
                "agentName": "DL_testphuong",
                "adserName": "Nguyễn Duy Phương",
                "contractName": "Hợp đồng test UR 132 1702",
                "mạng": "Vinaphone",
                "brn": "phuongtest",
                "template": "{P1}QAtest",
                "templateID": "386351"
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
                "adserName": "PHƯƠNG ORDER",
                "contractName": "HỢP ĐỒNG TEST",
                "mạng": "Vinaphone",
                "brn": "BRNSMSORDER",
                "template": "{P1}testorder",
                "templateID": "386371"
            }
        }
    }

    let apiArgs = {
        nonbank: {
            cskh: {
                "brnID": "131887",
                "contractTypeID": "1",
                "contractID": "401",
                "templateID": "559103",
                "agentID": "164",
                "apiUsername": "hoandd",
                "apiPassword": "hoandd",
                "username": "DH_CS",
            },
            qc: {
                "brnID": "16092",
                "contractTypeID": "2",
                "contractID": "1185",
                "templateID": "559104",
                "agentID": "165",
                "apiUsername": "test",
                "apiPassword": "test",
                "username": "DH_QC"
            }
        },
        bank: {
            cskh: {
                "brnID": "100235",
                "contractTypeID": "1",
                "contractID": "8522",
                "templateID": "386875",
                "agentID": "437",
                "apiUsername": "PHUONGQA_SENDSMS",
                "apiPassword": "Tr1@123",
                "username": "accVIVASTEST_UR132_VTT",
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
    //---------------------------------------//
    exports.url = url;
    exports.account = account;
    exports.rnd = rnd;
    exports.scheduleTime = scheduleTime;
    exports.apiArgs = apiArgs;
    exports.portalArgs = portalArgs;
    exports.count=count;
    exports.sentTime=sentTime;
    exports.ENV=ENV;
    exports.invalidTime=invalidTime;
    exports.makeDate=makeDate;
}
else if (ENV = "PRODUCT") {
    let url = {
        "portal": {
            "agent": "http://ads.vinaphone.com.vn/agent/Login.aspx",
            "admin": "http://ads.vinaphone.com.vn:8888/Login.aspx",
            "esms":"http://esms.com.vn/default.aspx"
        },
        "api": {
            "nonbank": "http://192.168.38.134:8888/smsbn/api",
            // "nonbank": "http://192.168.38.134:8888/smsmarketing/api",
            "bank": "http://192.168.38.163:8888/smsbn/api",
            // "bank": "http://192.168.38.163:8888/smsbank/api",
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
        },
        "esmsAgent":{
            "username":"84857760576",
            "pw":"Tr1@123"
        }

    };
    //--------------------------------------//
    let portalArgs = {
        VTT: {
            cskh: {
                "agentName": "VNPTTEST-DH-cskh",
                "adserName": "Do Duy Hoan",
                "contractName": "26082014/VNPT-DH-test",
                "mạng": "Vinaphone",
                "brn": "TEST2020",  //brnID:131887
                "template": "{P1}test2020",
                "templateID": "559103"   //giống với template ID trong apiArgs
            },
            qc: {
                "agentName": "VNPTTEST-DH-qc",
                "adserName": "TEST9999",
                "contractName": "TEST9999",
                "mạng": "Vinaphone",
                "brn": "TEST9999",
                "template": "{P1}test9999",
                "templateID": "559104"
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
                "brnID": "131887",
                "contractTypeID": "1",
                "contractID": "401",
                "templateID": "559103",
                "agentID": "164",
                "apiUsername": "hoandd",
                "apiPassword": "hoandd",
                "username": "DH_CS",
            },
            qc: {
                "brnID": "16092",
                "contractTypeID": "2",
                "contractID": "1185",
                "templateID": "559104",
                "agentID": "165",
                "apiUsername": "test",
                "apiPassword": "test",
                "username": "DH_QC"
            }
        },
        bank: {
            cskh: {
                "brnID": "131358",
                "contractTypeID": "1",
                "contractID": "401",
                "templateID": "559105",
                "agentID": "164",
                "apiUsername": "hoandd",
                "apiPassword": "hoandd",
                "username": "DH_CS",
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
    //---------------------------------------//
    exports.url = url;
    exports.account = account;
    exports.rnd = rnd;
    exports.scheduleTime = scheduleTime;
    exports.apiArgs = apiArgs;
    exports.portalArgs = portalArgs;
    exports.count=count;
    exports.sentTime=sentTime;
    exports.ENV=ENV;
    exports.invalidTime=invalidTime;
    exports.makeDate=makeDate;
}


