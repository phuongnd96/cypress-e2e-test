
import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';

const agent = new AGENT();
const admin = new ADMIN();

context("Demo",()=>{
    beforeEach(()=>{
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");
    })
    it("",()=>{

    })
})
context("Agent quản lý khách hàng", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");
    })
    specify("Agent thêm khách hàng", () => {
        agent
            .addCustomer("phuong", "13211213129993", "123 giang vo", "84912922911", "abphuongtesstunung3bc@gmail.com", "Actived", "Khách hàng thường", true, "3").then((text) => {
                expect(text).to.includes("Thêm mới thành công");
            })
    })
    specify("Agent sửa thông tin khách hàng", () => {
        agent
            .editCustomer("phuong", "124255", "abc độic ấn", "84999011190", "phuấd1213ongac@gac.com", "Actived", "Khách hàng thường", false, "abc").then((text) => {
                expect(text).to.equal("Cập nhật thành công khách hàng.")
            });
    })
    specify("Agent thêm mới tài khoản khách hàng", () => {
        agent
            .addCustomerAccount("QAVIVAS", "testp1hu2ong", "Tr1@123", false).then((result) => {
                expect(result).to.equal("Thêm mới người dùng thành công.");
            })
    })
    specify("Agent thêm mới nhóm khách hàng", () => {
        agent.addCustomerGroup("QAVIVAS", "ab123c123", "hello").then((result) => {
            expect(result).to.includes("thành công");
        })
    })
})

context.skip("Agent gửi tin", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");
    })
    specify("Gửi tin CSKH gửi ngay", () => {
        agent
            .send_sms_temp_new_có_dấu(" ", "Nguyễn Duy Phương", "HĐ TEST 135", "Vinaphone", "BRN cypress", "Cypress{D}", "vina3.xlsx", "vina3.xlsx");
    })
    specify("Gửi tin đặt lịch", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Vinaphone", "BRN cypress", "Cypress{D}", "vina4.xlsx", "vina4.xlsx");
    })
    specify("Gửi tin Mobi CSKH qua BRN", () => {
        agent
            .send_sms_temp_new_có_dấu(" ", "Nguyễn Duy Phương", "HĐ TEST 135", "Mobifone", "BRN cypress", "Cypress{D}", "mobi.xlsx", "mobi.xlsx");
    })
    specify("Gửi tin Viettel qua BRN", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Viettel", "BRN cypress", "Cypress{D}", "viettel.xlsx", "viettel.xlsx");
    })
    specify("Gửi tin ngoại mạng Itel", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Itel", "BRN cypress", "Cypress{D}", "itel.xlsx", "itel.xlsx");
    })
    specify("Gửi tin có dấu", () => {
        agent
            .send_sms_temp_new_có_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Vinaphone", "BRN cypress", "Cypress{D}", "vina5.xlsx", "vina5.xlsx");
    })
    specify("Gửi tin theo hướng ưu tiên", () => {
        agent
            .send_sms_temp_new_có_dấu(" ", "Nguyễn Duy Phương", "HĐ TEST 135", "Vinaphone", "BRN cypress", "Cypress{D}", "vinauutien.xlsx", "vinauutien.xlsx");
    })
    specify("Gửi tin mnp port in Vina", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Vina", "BRN cypress", "Cypress{D}", "mnpstaging.xlsx", "mnpstaging.xlsx");
    })
    specify("Gửi tin mnp port out Viettel", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Viettel", "BRN cypress", "Cypress{D}", "mnpstaging1.xlsx", "mnpstaging1.xlsx");
    })
    specify("Gửi tin với từ khóa chặn nội mạng", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Vinaphone", "BRN cypress", "Cypress{D}", "vinakeyword.xlsx", "vinakeyword.xlsx");
    })
    specify("Gửi tin với từ khóa chặn ngoại mạng", () => {
        agent
            .send_sms_temp_new_không_dấu("01/05/2020 10:30", "Nguyễn Duy Phương", "HĐ TEST 135", "Viettel", "BRN cypress", "Cypress{D}", "viettelkeyword.xlsx", "viettelkeyword.xlsx");
    })

})
context.skip("Đại lý tư nhân", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI/Home.aspx?module=Send_SMS_CC_VTT")
            .doLogin("accVIVASTEST_UR132_TUNHAN", "Tr1@123");
    })
    specify("Đại lý tư nhân gửi tin cskh", () => {
        agent
            .send_sms_temp_old_không_dấu("04/05/2020 12:45", "QAVIVASVNPT", "HỢP ĐỒNG 135", "Vinaphone", "BRN 135", "{P1} unique", "vina3.xlsx", "vina3.xlsx");

    })
})
context.skip("Agent_API", () => {
    it("get_adser_succes", () => {
        agent
            .request_get_adser("http://192.168.38.134:8888/smsmarketing/api", "164", "phuongnd", "Tr1@123")
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res);
            });
    });

    it("get_template_success", () => {
        agent
            .request_get_template("http://192.168.38.134:8888/smsmarketing/api", "164", "131350", "product_gettemplate_phuong", "Tr1@123")
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res);
            });
    })
    //hàm get_contract phải lấy adser_id từ get_adser
    it("get_contract_success", () => {
        agent
            .request_get_contract("http://192.168.38.134:8888/smsmarketing/api", "164", "379", "product_getcontract_phuong", "Tr1@123")
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res);
            })
    })
    it("create_template_cskh_success", () => {
        agent
            .request_create_template_CSKH()
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res)
            })
    })
    it("create_template_QC", () => {
        agent
            .request_create_template_QC()
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res)
            })
    })
    it("get_label_success", () => {
        agent
            .request_get_label("http://192.168.38.134:8888/smsmarketing/api", "164", "379", "401", "product_getlabel_phuong", "Tr1@123")
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res)
            })
    });
    it("send_sms_nonbank_sucess", () => {
        agent
            .request_send_sms_nonbank_bank("http://10.84.70.148:8085/smsmktur135/api", "100248", "1", "8522", "386149", "1", "abc", "04-05-2020 15:45", "84912158656", "0", "437", "PHUONGQA_SENDSMS", "Tr1@123", "accVIVASTEST_UR132_VTT", "8")
            .then((res) => {
                cy
                    .log(res)
                    .assertIsSuccessfullyRequested(res);
            }
            )
    })


})
context.skip("Khách hàng lẻ ESMS", () => {
    specify("Khách hàng lẻ login", () => {
        agent
            .visitEMS("http://esms.com.vn/default.aspx")
            .loginESMSPortal("84857760576", "Tr1@123")
        //test here
        cy
            .wait(1000)
            .get(".after-login").invoke('text').then((text) => {
                expect(text).to.equal("84857760576");
            })
    });

    specify("Admin duyệt brn vừa tạo", () => {
        admin
            .visitAdminPortal()
            .approveBrandName("blabla")
    })

    specify("Khách hàng lẻ gửi tin", () => {

        agent
            .visitEMS("http://esms.com.vn/default.aspx")
            .loginESMSPortal("84857760576", "Tr1@123")
            //.createBrn("phuong96", "shiba.png", "shiba.png", "shiba.png", "shiba.png", "shiba.png", "shiba.png", "shiba.png", "shiba.png", "84912158656", "phuong123test", "tin nhan1 test", "1test")
            .sendESMS("phuong96", "vina.xlsx", "vina.xlsx", "aphaeleuleusth123nga123phuonghihisaapabrn phuong test", "Hello", "content alias", "030520201430").then((text) => {
                expect(text).to.equals("phuong96");
            });
    });




})
context.skip("Agent quản lý giấy tờ khách hàng lẻ", () => {
    before(() => {
        agent
            .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Login.aspx")
            .doLogin("DH_QC", "Tr1@123")
    })
    it("Agent download giấy tờ khách hàng lẻ", () => {
        agent.viewESMSCustomerInfo("#AAAAPHUONG");
    })
})
context.skip("Agent duyệt nhãn", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Home.aspx")
            .doLogin("DH_CS", "Tr1@123");
    })
    specify("Agent duyệt nhãn", () => {
        agent
            .approveOrRejectBrandName("Actived", "Cam on", "Approve")
    })
})

context.skip("Agent quản lý API Khách hàng", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx?module=API_Manager")
            .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");

    })
    specify("Tìm kiếm API theo tên khách hàng", () => {
        agent
            .searchAgentAPI("Nguyễn Duy Phương", 11);
    })
    specify("Thêm API cho khách hàng", () => {
        agent
            .addAgentAPI("QAVIVAS", "SEND_SMS_LIST", "test", "hehe", "*", true).then((result) => {
                expect(result).to.equal("Lỗi xảy ra hoặc đại lý đã được cấp tài khoản truy cập API trước đó");
            })
    })
    specify("Sửa API Khách hàng", () => {
        // agent
        // .searchAgentAPI("QAVIVAS",5);
        agent
            .editAgentAPI("QAVIVAS", "SEND_SMS_LIST", "test", "test pas", "tesip")
            .then((result) => {
                expect(result).to.include("1 API");
            })
    })
    specify("Xóa API Khách hàng", () => {
        agent
            .deleteAgentAPI("QAVIVAS", "CREATE_TEMPLATE").then((result) => {
                expect(result).to.include("Khóa truy cập thành công 1 API.")
            })
    });
})

context.skip("Quản lý gói tin", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
            .doLogin("accVIVASTEST_UR132_VTT", "Tr1@123");
    })
    specify("Gói tin đại lý", () => {
        agent
            .findAgentOrder("Vinaphone", "ĐIỆN LỰC", "test api 3");
        cy
            .get("@sendNumber")
            .invoke('text').then((text) => {
                expect(parseInt(text)).to.equal(0) //số tin đã gửi
            });
        cy.get("@smsRemain").invoke('text').then((text) => {
            expect(parseInt(text)).to.equal(100)    //số tin còn lại
        })

    })
    specify("Gói tin khách hàng lẻ", () => {
        agent
        .findCustomerOrder()
    })
})

context("Agent tra cứu lịch sử gửi tin",()=>{
    beforeEach(()=>{
        agent
        .visitAgentPortal("http://10.84.70.164/AgentUI12/Home.aspx")
        .doLogin("accVIVASTEST_UR132_VTT","Tr1@123")
    })
    it.only("Agent tra cuu lich su gui tin",()=>{
        
    })
})















