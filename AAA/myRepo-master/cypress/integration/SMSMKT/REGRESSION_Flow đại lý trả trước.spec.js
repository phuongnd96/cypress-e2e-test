//chỉ chạy trên product
import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';
const agent = new AGENT();

let before = {
    agent: {},
    customer: {}
};
let after = {
    agent: {},
    customer: {}
};
//prefix để đọc file lỗi
let prefix = [];
context("Flow đại lý trả trước", () => {
    describe("Flow agent gửi tin trả trước", () => {
        beforeEach(() => {
            agent
                .visitAgentPortal("http://ads.vinaphone.com.vn/agent/Home.aspx")
                .doLogin("DL_VV", "Tr1@1234");
        })
        specify(`Kiểm tra gói tin đại lý và khách hàng thường trước khi gửi`, () => {
            agent.checkPackageAgent("Vinaphone", "MXH QUỐC TẾ").then((res) => {
                before.agent = res;
            })
            agent.checkPackageCustomer("khtesttn", "Vinaphone", "MXH QUỐC TẾ", "test khtesttn").then((res) => {
                before.customer = res;
            })
        });
        specify("Gửi tin nội mạng gửi ngay", () => {
            agent
                .send_sms_temp_old(
                    " "
                    , "khtesttn"
                    , "hdtnmxhVN"
                    , "Vinaphone"
                    , "TestTNMXH"
                    , "{P1}"
                    , `vina${cfg.count}.xlsx`
                    , `vina${cfg.count}.xlsx`
                    , 0
                    , cfg.sentTime.fromCreateDate
                    , cfg.sentTime.toCreateDate
                    , cfg.sentTime.fromScheduleDate
                    , cfg.sentTime.toScheduleDate
                    , "Đặt lệnh thành công").then((sentMsg) => {
                        cy.log(`Gửi thành công ${sentMsg} tin`);
                    })

            // agent
            //     .send_sms_temp_old(
            //         " "
            //         , "khtesttn"
            //         , "hdtnmxhVN"
            //         , "Vinaphone"
            //         , "TestTNMXH"
            //         , "{P1}"
            //         , `mobi${cfg.count}.xlsx`
            //         , `mobi${cfg.count}.xlsx`
            //         , 0
            //         , cfg.sentTime.fromCreateDate
            //         , cfg.sentTime.toCreateDate
            //         , cfg.sentTime.fromScheduleDate
            //         , cfg.sentTime.toScheduleDate
            //         , "Đặt lệnh không thành công").then((text) => {
            //             prefix.pop();
            //             prefix.push(text);
            //         }).then((prefix) => {
            //             cy.log(prefix);
            //             agent.downloadErrorfile();
            //         });
        })
        specify("Kiểm tra file lỗi", () => {
            agent.readErrorfileAsync(prefix[0], "Không thuộc mạng");

        })
        specify("Đổi tên file", () => {
            cy.task('findFile', 'auto_vina').then((file) => {
                cy.task('renameFile',
                    [`C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\${file}`,
                    `C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\auto_vina${Math.floor(Math.random() * 1000000)}test.xlsx`])
            })
        })
        specify("Kiểm tra gói tin đại lý và khách hàng thường sau khi gửi", () => {
            agent.checkPackageAgent("Vinaphone", "MXH QUỐC TẾ").then((res) => {
                after.agent = res;
            })
            agent.checkPackageCustomer("khtesttn", "Vinaphone", "MXH QUỐC TẾ", "test khtesttn").then((res) => {
                after.customer = res;
            })
        })
        specify("So sánh trừ gói tin của đại lý và khách hàng thường", () => {
            expect(before.agent.used + 1).to.equal(after.agent.used);
            expect(before.customer.used + 1).to.equal(after.customer.used);
            expect(before.agent.remain).to.equal(after.agent.remain + 1);
            expect(before.customer.remain).to.equal(after.customer.remain + 1);
        })
    })
    describe("Gửi tin hết quota adser", () => {
        it("Gửi tin hết quota adser", () => {
            agent.request_send_sms_nonbank_bank(
                "http://192.168.38.134:8888/smsmarketing/api"
                , "132043"
                , "1"
                , "10320"
                , "560861"
                , "1"
                , "test"
                , ""
                , "84912158656"
                , "0"
                , "349"
                , "vivas"
                , "vivas@123"
                , "DL_VV"
                , "0"
            ).then((res) => {
                console.log(res);
                agent.assertRespone(res, 21)
            })
        })
    })
    describe("Gửi tin hết gói tin đại lý", () => {
        it("Gửi tin hết quota agent", () => {
            agent.request_send_sms_nonbank_bank(
                "http://192.168.38.134:8888/smsmarketing/api"
                , "131376"
                , "1"
                , "7304"
                , "554387"
                , "1"
                , "test tu nhan"
                , ""
                , "84912158656"
                , "0"
                , "349"
                , "dltn"
                , "dltn"
                , "DL_VV"
                , "0"
            ).then((res) => {
                console.log(res);
                agent.assertRespone(res, 22);
            })
        })
    })
})




