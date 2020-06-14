import AGENT from '../PageObjects/Agent';
import ADMIN from '../PageObjects/Admin';
import *  as cfg from '../config/config';

let count = Math.floor(Math.random() * 1000).toString().concat("test");
const user = new AGENT();
const admin = new ADMIN();

describe("", () => {
    context("Agent gửi tin trên portal", () => {
        it("Gửi tin QC nội mạng trả trước", () => {
            user.visitAgentPortal(cfg.url.portal.agent).doLogin("VVtest", "Tr1@1234");
            cy.task('findFile', 'auto_vina').then((file) => {
                user.send_sms_temp_old(
                    " "
                    , "KHVV"
                    , "qctn1"
                    , "Vinaphone"
                    , "qctratruoc"
                    , "{P1}"
                    , file
                    , file
                    , "0"
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công"
                )
            })

        })
        specify("Đổi tên file", () => {
            cy.task('findFile', 'auto_vina').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        })
        it("Gửi tin QC ngoại mạng trả trước", () => {
            user.visitAgentPortal(cfg.url.portal.agent).doLogin("VVtest", "Tr1@1234");
            cy.task('findFile', 'auto_mobi').then((file) => {
                user.send_sms_temp_old(
                    " "
                    , "KHVV"
                    , "qctn1"
                    , "Mobifone"
                    , "qctratruoc"
                    , "{P1}"
                    , file
                    , file
                    , "0"
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công"
                )
            })
        })
        specify("Đổi tên file", () => {
            cy.task('findFile', 'auto_mobi').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_mobi${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        })
        it("Gửi tin QC nội mạng trả sau", () => {
            user.visitAgentPortal(cfg.url.portal.agent).doLogin("DH_QC", "Tr1@123");
            cy.task('findFile', 'auto_vina').then((file) => {
                user.send_sms_temp_old(
                    " "
                    , "TEST9999"
                    , "TEST9999"
                    , "Vinaphone"
                    , "TEST9999"
                    , "{P1}test9999"
                    , file
                    , file
                    , "0"
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công"
                )
            })
        })
        specify("Đổi tên file", () => {
            cy.task('findFile', 'auto_vina').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        })
        it("Gửi tin QC ngoại mạng trả sau", () => {
            user.visitAgentPortal(cfg.url.portal.agent).doLogin("DH_QC", "Tr1@123");
            cy.task('findFile', 'auto_vina').then((file) => {
                user.send_sms_temp_old(
                    " "
                    , "TEST9999"
                    , "TEST9999"
                    , "Mobifone"
                    , "TEST9999"
                    , "{P1}test9999"
                    , file
                    , file
                    , "0"
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công"
                )
            })
        })
        specify("Đổi tên file", () => {
            cy.task('findFile', 'auto_mobi').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_mobi${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        })
    })

    describe.skip("Khách hàng lẻ ESMS", () => {
        describe("Khách hàng lẻ gửi tin", () => {
            it("Khách hàng lẻ tạo brn", () => {
                agent
                    .visitEMS(cfg.url.portal.esms)
                    .loginESMSPortal(cfg.account.esmsAgent.username, cfg.account.esmsAgent.pw)
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
                    .doLogin(cfg.account.admin.username, cfg.account.admin.pw)
                    .approveBrandName(`QAtes${count}`, "VNPTTEST-DH-qc", "Pending")
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
                    , "030620201430")
            })
        })
    })


})
