import AGENT from '../PageObjects/Agent';
import { db } from '../config/data';
const agent = new AGENT();
async function logCSKH(res) {
    let now = new Date();
   await cy.writeFile(`cypress\\fixtures\\Log\\logcreatetempCSKH_${Math.floor(Math.random() * 1000)}.txt`,
        `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} 
        request: ${res.requestBody}
        errorcode: ${res.body["RPLY"]["ERROR"]}
        errordesc: ${res.body["RPLY"]["ERROR_DESC"]}`);
    return res;
}
async function logQC(res) {
    let now = new Date();
    await cy.writeFile(`cypress\\fixtures\\Log\\logcreatetempCSKH_${Math.floor(Math.random() * 1000)}.txt`,
        `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} 
        request: ${res.requestBody}
        errorcode: ${res.body["RPLY"]["ERROR"]}
        errordesc: ${res.body["RPLY"]["ERROR_DESC"]}`);
    return res;
}
let createTemplateCSKH = async (content, sampleMsg, errCode) => {
    let res = await agent.request_create_template_CSKH(
        db.url_api.nonbank
        , db.agent_TUNHAN_CSKH_TRASAU.agentID
        , db.agent_TUNHAN_CSKH_TRASAU.brnID
        , content
        , sampleMsg
        , db.agent_TUNHAN_CSKH_TRASAU.apiUsernameCreateTemplate
        , db.agent_TUNHAN_CSKH_TRASAU.apiPasswordCreateTemplate
        , db.agent_TUNHAN_CSKH_TRASAU.userName
    );
    let res1 = await logCSKH(res);
    agent.assertRespone(res1, errCode);
}
let createTemplateQC = async () => {
    let res = await agent.request_create_template_CSKH(
        db.url_api.nonbank
        , db.agent_VTT_QC_TRASAU.agentID
        , db.agent_VTT_QC_TRASAU.brnID
        , content
        , sampleMsg
        , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
        , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
        , db.agent_VTT_QC_TRASAU.userName
    );
    let res1 = await logQC(res);
    agent.assertRespone(res1, errCode);
}
context("Tạo template qua API", () => {
    context("Đại lý VTTP gửi tin CSKH", () => {
        describe("nonbank", () => {
            context("Các mã lỗi cũ", () => {
                it.only("API user không hợp lệ", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        ,db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brnID
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate.concat("test")
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                           agent.assertRespone(res,1);
                        });
                    })
                }
                );
                it.only("API pass không hợp lệ", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        ,db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brnID
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate.concat("test")
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(()=>{
                            agent.assertRespone(res,1);
                        })
                    });                  
                }
                );
                it("USERNAME không đúng", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        ,db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brnID
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName.concat("test")
                    ).then((res) => {
                        logCSKH(res).then(()=>{
                            agent.assertRespone(res,1);
                        })
                    });                  
                }
                );
                it("CONTRACT ID không đúng", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        ,db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brnID
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(()=>{
                            agent.assertRespone(res,1);
                        })
                    });                  
                }
                );
                it("LABEL không hợp lệ (labelid không hợp lệ)", () => {
                    createTemplate()
                }

                );
                it("AGENT ID không tồn tại trên hệ thống", () => {
                    createTemplate()
                }
                );
                it("AGENT ID của hợp đồng khác", () => {
                    createTemplate()
                }
                );
                it("Nội dung template chứa từ khóa chặn", () => {
                    createTemplate()
                }
                );
                it("CONTENT có độ dài không hợp lệ - 613 kí tự (đại lý trả trước giới hạn 4MT)", () => {
                    createTemplate()
                }
                );
                it("Tạo thành công template loại A", () => {

                })
                it("Tạo thành công template loại B", () => {

                })
                it("Tạo thành công template loại C", () => {

                })
                it("Tạo thành công template loại D", () => {

                })
            })
            context("Các mã lỗi mới", () => {
                it("{A.10} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{(A,10)} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{A,*} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("", () => {
                    createTemplate()
                }
                );
                //----------------------------//
                it("{B.10} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{(B,10)} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{B,*} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("", () => {
                    createTemplate()
                }
                );
                //----------------------------//
                it("{C.10} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{(C,10)} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{C,*} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("", () => {
                    createTemplate()
                }
                );
                //----------------------------//
                it("{D,10} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("{D.10} -> mã lỗi 55", () => {
                    createTemplate()
                }
                );
                it("", () => {
                    createTemplate()
                }
                );
                //------------------------------//
                it("6 tham biến 1 loại -> 56", () => {

                });
                it("5 tham biến mỗi loại -> 0", () => {

                });
                it("SAMPLEMESSAGE vượt quá 1000 kí tự -> 57", () => {

                });
            });
        })
    })
    context.skip("Regression test với API tạo template QC đã có", () => {
        context("Đại lý VTTP gửi tin QC", () => {
            it("APIUSER không hợp lệ", () => {

            })
            it("USERNAME không đúng", () => {

            })
            it("CONTRACT ID không đúng", () => {

            })
            it("LABEL ID không hợp lệ", () => {

            })
            it("AGENTID không hợp lệ", () => {

            })
            it("CONTENT có độ dài không hợp lệ", () => {

            })
            it("Tạo template loại mới bằng API tạo temp QC", () => {

            })
            it("Tạo template QC thành công", () => {

            })
        })
    })
})
