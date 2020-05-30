import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';
const agent = new AGENT();
describe("Gửi tin Agent trả trước -> check bảng sms_log", () => {
    it("Gửi tin CSKH nội mạng trả trước", () => {
        agent
            .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Home.aspx")
            .doLogin("DL_VV", "Tr1@1234");
        cy.task('findFile', 'auto_vina')
        .then((file)=>{
            agent
                .send_sms_temp_old(
                    " "
                    , "khtesttn"
                    , "hdtnmxhVN"
                    , "Vinaphone"
                    , "TESTURFIX"
                    , "{P1}"
                    , file
                    , file
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công").then((sentMsg) => {
                        cy.log(`Gửi thành công ${sentMsg} tin`);
                    })                                                  //packageID:64125
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_vina').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    it("Gửi tin CSKH ngoại mạng trả trước", () => {
        agent
            .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Home.aspx")
            .doLogin("DL_VV", "Tr1@1234");
        cy.task('findFile', 'auto_mobi').then((file)=>{
            agent
            .send_sms_temp_old(
                " "
                , "khtesttn"
                , "hdtnmxhVN"
                , "Mobifone"
                , "TESTURFIX"
                , "{P1}"
                , file
                , file
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate
                , "Đặt lệnh thành công").then((sentMsg) => {
                    cy.log(`Gửi thành công ${sentMsg} tin`);
                })                                                          //packageID:64211
        })
    })
    specify("Đổi tên file", () => {
        cy.task('findFile', 'auto_mobi').then((file) => {
            cy.task('renameFile',
                [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
        })
    })
    it("Gửi tin QC nội mạng trả trước", () => {
        agent
        .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Home.aspx")
        .doLogin("VVtest", "Tr1@1234");      
        cy.task('findFile', 'auto_vina').then((file)=>{
            agent
            .send_sms_temp_old(
                " "
                , "KHVV"
                , "qctn1"
                , "Vinaphone"
                , "qctratruoc"
                , "{P1}"
                , file
                , file
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate
                , "Đặt lệnh thành công").then((sentMsg) => {
                    cy.log(`Gửi thành công ${sentMsg} tin`);                //packageID: 64215
                })
        })
    })
})