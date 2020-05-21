import AGENT from '../PageObjects/Agent';
const agent = new AGENT();

/*
test api nonbank link mới + link cũ
(gửi tin sau đó check log xem có bốc tin từ bảng pending_vtt đi k, check response trả về) -> gửi được sang ST là ok
*/ 
let url='http://192.168.38.134:8888/smsmkt/api';
context("ENCRYPTED VIETTEL", () => {
    describe("ENCRYPTED VIETTEL", () => {
        specify("Gửi tin CSKH Viettel Bank không truyền encrypted =1",()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84396342533"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"0"
            ).then((res)=>{
                agent.assertRespone(res,34)
            })
        })
        specify("Gửi tin CSKH nhà mạng Viettel nhóm tin Bank encrypted =0",()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84396342533"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"0"
                ,"0"
            ).then((res)=>{
                agent.assertRespone(res,34)
            })
        })
        specify.only("Gửi tin CSKH nhà mạng Viettel nhóm tin Bank encrypted=1",()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,"22-05-2020 15:00"
                ,"84396342533"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"8"
                ,"1"
            ).then((res)=>{
                agent.assertRespone(res,0)
            })
        })
        specify(`Gửi tin CSKH nhà mạng khác Viettel nhóm tin bất kì nhưng truyền trường encrypted =1`,()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84912158656"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"8"
                ,"1"
            ).then((res)=>{
                agent.assertRespone(res,35)
            })
        })
        specify(`Gửi tin CSKH nhà mạng khác Viettel nhóm tin bất kỳ nhưng truyền trường encrypted=0`,()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84912158656"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"0"
                ,"0"
            ).then((res)=>{
                agent.assertRespone(res,0)
            })
        })
        specify("Gửi tin CSKH nhà mạng khác Viettel nhóm tin bất kỳ nhưng truyền trường encrypted khác 0 hoặc 1",()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84912158656"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"0"
                ,"2"
            ).then((res)=>{
                agent.assertRespone(res,36)
            })
        })
        specify("Gửi tin CSKH nhà mạng Viettel nhóm tin Bank nhưng truyền trường encrypted khác 0 hoặc 1",()=>{
            agent.request_send_sms_list_ENCRYPTED(
                url
                ,"132278"
                ,"1"
                ,"401"
                ,"564160"
                ,"1"
                ,"test"
                ,""
                ,"84396342533"
                ,"0"
                ,"164"
                ,"hoandd"
                ,"hoandd"
                ,"DH_CS"
                ,"0"
                ,"2"
            ).then((res)=>{
                agent.assertRespone(res,36)
            })
        })
    })
})