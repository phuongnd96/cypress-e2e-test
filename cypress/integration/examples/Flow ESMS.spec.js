import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();
describe("ESMS flow", () => {
    before(() => {
        agent
            .visitEMS("http://esms.com.vn/Home.aspx")
            .loginESMSPortal("84857760576", "Tr1@123")
    })
    describe("Khách hàng lẻ gửi tin", () => {
        it("Khách hàng lẻ tạo brn", () => {
            agent.createESMSBrn(
                "Phuongtest"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "84912158656"
                , "phuong test esms"
                , "abclblall"
                , "abc"
            );
        })
        it("Admin duyệt brn", () => {
            admin.visitAdminPortal("http://ads.vinaphone.com.vn:8888/Home.aspx")
                .doLogin("test852017", "a@A123456")
                .approveBrandName("Phuongtest");
        })
        it("Khách hàng lẻ gủi tin", () => {
            agent.sendESMS("Phuongtest"
            , "vina.xlsx"
            , "vina.xlsx"
            , "aph1phuongeusth123nga123phuonghihisaapabrn phuong test"
            , "Hello"
            , "content alias"
            , "150520201430");
        })
    })
})