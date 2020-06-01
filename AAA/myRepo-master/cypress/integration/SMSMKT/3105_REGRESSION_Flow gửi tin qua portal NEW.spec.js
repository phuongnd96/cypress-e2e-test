import AGENT from '../PageObjects/Agent';
import ADMINSMSBRN from '../PageObjects/AdminSMSBRN';
import * as cfg from '../config/config';
//--------------------------------------------------------------------//
const adminBrandName = new ADMINSMSBRN();
const agent = new AGENT();
let prefix = [];
describe("Flow agent gửi tin", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin(cfg.account.agent.username, cfg.account.agent.pw);
    })
    specify("Gửi tin nội mạng gửi ngay", () => {
        cy.task('findFile', 'auto_vina')
            .then((file) => {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin qua portal với template mới loại A", () => {
        cy.task('findFile', 'auto_vina')
            .then((file) => {
                agent
                    .send_sms_temp_new_không_dấu(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        // , cfg.portalArgs.VTT.cskh.template
                        //Điền vào đây template loại A
                        ,"{A,20} test8888"
                        , file
                        , file
                    );
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin qua portal với template mới loại B", () => {
        cy.task('findFile', 'auto_vina_temp_B')
            .then((file) => {
                agent
                    .send_sms_temp_new_không_dấu(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        // , cfg.portalArgs.VTT.cskh.template
                        //Điền vào đây template loại B
                        ,"{B,20} test8888"
                        , file
                        , file
                    );
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina_temp_B').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina_temp_B${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin qua portal với template mới loại C", () => {
        cy.task('findFile', 'auto_vina')
            .then((file) => {
                agent
                    .send_sms_temp_new_không_dấu(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        // , cfg.portalArgs.VTT.cskh.template
                        ,"{C,20} test8888"
                        //Điền vào đây template loại C
                        , file
                        , file
                    );
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin qua portal với template mới loại D", () => {
        cy.task('findFile', 'auto_vina')
            .then((file) => {
                agent
                    .send_sms_temp_new_không_dấu(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        // , cfg.portalArgs.VTT.cskh.template
                        ,"{D,20} test8888"
                        //Điền vào đây template loại D
                        , file
                        , file
                    );
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin nội mạng đặt lịch", () => {
        cy.task('findFile', 'auto_vina_schedule')
            .then((file) => {
                agent
                    .send_sms_temp_old(
                        cfg.scheduleTime("/")
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , cfg.portalArgs.VTT.cskh.mạng
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina_schedule').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina_schedule${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    //Đang sai vì có 3 nhãn VNPT.Tech
    specify("Gửi tin mạng Mobifone CSKH qua BRN", () => {
        cy.task('findFile', 'auto_mobi').then((file) => {
            if (cfg.ENV == "PRODUCT") {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , "hdmxhVN"
                        , "Mobifone"
                        , "VNPT.Tech"
                        , "{P1}"
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , undefined);
            }
            else if (cfg.ENV == "STAGING") {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Mobifone"
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        ,"Đặt lệnh thành công");
            }
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_mobi').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_mobi${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin mạng Viettel", () => {
        cy.task('findFile', 'auto_viettel').then((file) => {
            if (cfg.ENV == "PRODUCT") {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Viettel"
                        , "VNPT.Tech"
                        , "{P1}"
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        ,undefined);
            } else if (cfg.ENV == "STAGING") {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Viettel"
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            }
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_viettel').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_viettel${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin mạng Itel", () => {
        cy.task('findFile', 'auto_itel').then((file) => {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "ITel"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , file
                    , file
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công");
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_itel').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_itel${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin có dấu", () => {
        cy.task('findFile', 'auto_vina_co_dau').then((file) => {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Vinaphone"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , file
                    , file
                    , 8
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công");
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina_co_dau').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina_co_dau${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin theo hướng ưu tiên", () => {
        cy.task('findFile', 'auto_vina_uu_tien').then((file) => {
            agent
                .send_sms_temp_old(
                    " "
                    , cfg.portalArgs.VTT.cskh.adserName
                    , cfg.portalArgs.VTT.cskh.contractName
                    , "Vinaphone"
                    , cfg.portalArgs.VTT.cskh.brn
                    , cfg.portalArgs.VTT.cskh.template
                    , file
                    , file
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công");
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina_uu_tien').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina_uu_tien${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    specify("Gửi tin mnp port-in mạng Vinaphone", () => {

        if (cfg.ENV == "PRODUCT") {
            cy.task('findFile', 'auto_mnp_product').then((file) => {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Vinaphone"
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate);
            })
        } else if (cfg.ENV == "STAGING") {
            cy.task('findFile', 'auto_mnp_stag').then((file) => {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Vinaphone"
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            })
        }
    })
    specify("Đổi tên file", () => {
        if (cfg.ENV == "STAGING") {
            cy.task('findFile', 'auto_mnp_stag').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_mnp_stag${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        }
        else if (cfg.ENV == "PRODUCT") {
            cy.task('findFile', 'auto_mnp_product').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_mnp_product${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        }
    })
    specify("Gửi tin mnp port-out mạng Viettel", () => {
        if (cfg.ENV == "PRODUCT") {
            cy.task('findFile', 'auto_mnp_product').then((file) => {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Viettel"
                        , "testmnp123"
                        , "561418"
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh không thành công").then((text) => {
                            prefix.pop();
                            prefix.push(text);
                        }).then((prefix) => {
                            cy.log(prefix);
                            agent.downloadErrorfile();
                        });
            })
        }
        else if (cfg.ENV == "STAGING") {
            cy.task('findFile', 'auto_mnp_stag').then((file) => {
                agent
                    .send_sms_temp_old(
                        " "
                        , cfg.portalArgs.VTT.cskh.adserName
                        , cfg.portalArgs.VTT.cskh.contractName
                        , "Viettel"
                        , cfg.portalArgs.VTT.cskh.brn
                        , cfg.portalArgs.VTT.cskh.template
                        , file
                        , file
                        , 0
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh không thành công").then((text) => {
                            prefix.pop();
                            prefix.push(text);
                        }).then((prefix) => {
                            cy.log(prefix);
                            agent.downloadErrorfile();
                        });
            })
        }
    })
    specify("Kiểm tra file lỗi", () => {
        agent.readErrorfileAsync(prefix[0], "Không thuộc mạng");
    })

})
//-------------------------------------------------------------------------------------//
describe("Đại lý tư nhân gửi tin CSKH", () => {
    beforeEach(() => {
        if (cfg.ENV == "PRODUCT") {
            agent
                .visitAgentPortal(cfg.url.portal.agent)
                .doLogin("DL_VV", "Tr1@1234")
        }
        else if (cfg.ENV == "STAGING") {
            agent
                .visitAgentPortal(cfg.url.portal.agent)
                .doLogin("accDL_testphuong", "Tr1@1234")
        }
    })
    it("Agent tư nhân gửi tin CSKH", () => {
        if (cfg.ENV == "STAGING") {
            cy.task('findFile', 'auto_vina').then((file) => {
                let adserName = cfg.portalArgs.TUNHAN.cskh.adserName;
                let contractName = cfg.portalArgs.TUNHAN.cskh.contractName;
                let mạng = cfg.portalArgs.TUNHAN.cskh.mạng;
                let brn = cfg.portalArgs.TUNHAN.cskh.brn;
                let template = cfg.portalArgs.TUNHAN.cskh.template;
                let encoding = 0
                agent
                    .send_sms_temp_old(
                        " "
                        , adserName
                        , contractName
                        , mạng
                        , brn
                        , template
                        , file
                        , file
                        , encoding
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            })
            //overwrite
        }
        else if (cfg.ENV = "PRODUCT") {
            cy.task('findFile', 'auto_vina').then((file) => {
                let adserName = "KH_test_dltn"
                let contractName = "HĐLV7"
                let mạng = "Vinaphone";
                let brn = "BRNtestlv7"
                let template = "{P1} PhuongQATest"
                let encoding = 0
                agent
                    .send_sms_temp_old(
                        " "
                        , adserName
                        , contractName
                        , mạng
                        , brn
                        , template
                        , file
                        , file
                        , encoding
                        , cfg.sentTime.fromCreateDate
                        , cfg.sentTime.toCreateDate
                        , cfg.sentTime.fromScheduleDate
                        , cfg.sentTime.toScheduleDate
                        , "Đặt lệnh thành công");
            })
        }
    })
})
//----------------------------------------------------------------------------------------//
describe("Check trạng thái gửi tin từ SMSMKT -> SMS Brandname", () => {
    beforeEach(() => {
        adminBrandName
            .visitAdminPortal(
                "http://sms.vivas.vn/SMSBNPortal/view/user/login.jsp"
            )
            .doLogin(
                "Vivas.vhkt"
                , "abc123")
    })
    specify("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp thành công", () => {
        adminBrandName
            .viewReport(
                "84932248120"
                , "VNP"
                , "MOBIFONE"
                , cfg.sentTime.fromCreateDate);
    })
    specify.skip("Check trạng thái gửi tin từ SMSMKT -> SMSBrandname trường hợp không thành công", () => {

    })

})
//---------------------------------------------------------------------------------------------//







