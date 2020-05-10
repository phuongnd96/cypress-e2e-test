import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
const agent = new AGENT();
const admin = new ADMIN();
let count="xyz1";
describe("ESMS flow", () => {
    describe("Khách hàng lẻ gửi tin", () => {
        it("Khách hàng lẻ tạo brn", () => {
            agent
            .visitEMS("http://esms.com.vn/Home.aspx")
            .loginESMSPortal("84857760576", "Tr1@123")
            agent.createESMSBrn(
                `QAtes${count}`
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "shiba.png"
                , "84912158656"
                , `phuong test esms ${count}`
                , "abclblall"
                , "abc"
            );
        })
        it("Admin duyệt brn", () => {
            admin.visitAdminPortal("http://ads.vinaphone.com.vn:8888/Home.aspx")
                .doLogin("test852017", "a123456A@")
                .approveBrandName(`QAtes${count}`)
        })
        it("Khách hàng lẻ gủi tin", () => {
            agent
            .visitEMS("http://esms.com.vn/Home.aspx")
            .loginESMSPortal("84857760576", "Tr1@123")
            agent.sendESMS(`QAtes${count}`
            , "vina.xlsx"
            , "vina.xlsx"
            , `aph1phrn phuong test ${count}`
            , "Hello"
            , "content alias"
            , "150520201430")
        })
    })
})