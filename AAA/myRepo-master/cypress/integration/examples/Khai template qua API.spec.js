import AGENT from '../PageObjects/Agent';
import { db } from '../config/data';
const agent = new AGENT();
async function logCSKH(res) {
    let now = new Date();
    await cy.writeFile(`cypress\\fixtures\\Log\\logcreatetempCSKH_${Math.floor(Math.random() * 100000000)}.txt`,
        `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} 
        request: ${res.requestBody}
        errorcode: ${res.body["RPLY"]["ERROR"]}
        errordesc: ${res.body["RPLY"]["ERROR_DESC"]}`);
    return res;
}
async function logQC(res) {
    let now = new Date();
    await cy.writeFile(`cypress\\fixtures\\Log\\logcreatetempQC_${Math.floor(Math.random() * 100000000)}.txt`,
        `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} request: ${res.requestBody} errorcode: ${res.body["RPLY"]["ERROR"]} errordesc: ${res.body["RPLY"]["ERROR_DESC"]}`);
    return res;
}
//giả sử các trường thông tin còn lại là đúng, check logic của 2 tham số content là sameplMsg/totalParam
async function createTemplateCSKH(content, sampleMsg, errCode) {
    let res = await agent.request_create_template_CSKH(
        db.url_api.nonbank
        , db.agent_VTT_CSKH_TRASAU.agentID
        , db.agent_VTT_CSKH_TRASAU.contractID
        , db.agent_VTT_CSKH_TRASAU.brandName
        , content
        , sampleMsg
        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
        , db.agent_VTT_CSKH_TRASAU.userName
    );
    await logCSKH(res);
    agent.assertRespone(res, errCode);
}
async function createTemplateQC(content, totalParams, errCode) {
    let res = await agent.request_create_template_QC(
        db.url_api.nonbank
        , db.agent_VTT_QC_TRASAU.agentID
        , db.agent_VTT_QC_TRASAU.contractID
        , db.agent_VTT_QC_TRASAU.brandName
        , content
        , totalParams
        , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
        , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
        , db.agent_VTT_QC_TRASAU.userName
    );
    await logQC(res);
    agent.assertRespone(res, errCode);
}
context("Tạo template qua API", () => {
    context("Đại lý VTTP gửi tin CSKH", () => {
        describe("nonbank", () => {
            context("Các mã lỗi cũ", () => {
                //hàm dùng được cho cả staging và product
                it("API user không hợp lệ", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        , db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brandName
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate.concat("test")
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 1);
                        });
                    })
                }
                );
                //hàm dùng được cho cả staging và product
                it("API pass không hợp lệ", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        , db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brandName
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate.concat("test")
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 1);
                        });
                    })
                }
                );
                //hàm dùng được cho cả staging và product
                it("USERNAME không đúng", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        , db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brandName
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName.concat("test")
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 10);
                        });
                    })
                }
                );
                //hàm dùng được cho cả staging và product
                it("CONTRACT ID không đúng", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        , db.agent_VTT_CSKH_TRASAU.contractID.concat(Math.floor(1000 + Math.random() * 1000))
                        , db.agent_VTT_CSKH_TRASAU.brandName
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 13);
                        });
                    })
                }
                );
                //hàm dùng được cho cả staging và product
                it("LABEL không hợp lệ", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID
                        , db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brandName.concat("test123")
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 14);
                        });
                    })
                }
                );
                //hàm dùng được cho cả staging và product
                it("AGENT ID không tồn tại trên hệ thống", () => {
                    agent.request_create_template_CSKH(
                        db.url_api.nonbank
                        , db.agent_VTT_CSKH_TRASAU.agentID.concat(Math.floor(Math.random() * 2102391032))
                        , db.agent_VTT_CSKH_TRASAU.contractID
                        , db.agent_VTT_CSKH_TRASAU.brandName
                        , "{A,10}test"
                        , "phuongtest"
                        , db.agent_VTT_CSKH_TRASAU.apiUsernameCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.apiPasswordCreateTemplate
                        , db.agent_VTT_CSKH_TRASAU.userName
                    ).then((res) => {
                        logCSKH(res).then(() => {
                            agent.assertRespone(res, 15);
                        });
                    })
                }
                );
                //thay đổi từ khóa trên product
                it("Nội dung template chứa từ khóa chặn", () => {
                    createTemplateCSKH("{A,10}Acetorphine", "testAcetorphine", 50);
                }
                );
                it.skip("CONTENT có độ dài không hợp lệ - 613 kí tự (đại lý trả trước giới hạn 4MT)", () => {
                    createTemplate()
                }
                );
                it("Tạo thành công template loại A", () => {
                    createTemplateCSKH("{A,10} test", "á!_*bc test", 0);
                })
                it("Tạo thành công template loại B", () => {
                    createTemplateCSKH("{B,10} test", "1.2.3 test", 0);
                })
                it("Tạo thành công template loại C", () => {
                    createTemplateCSKH("{C,30} test", "1.2.3áó**!() test", 0);
                })
                it("Tạo thành công template loại D", () => {
                    createTemplateCSKH("{D} test", "1.2.3áó**!!!&*#^*!&$%$!)$!)*!$$)*! () test", 0);
                })
            })
            context("Các mã lỗi mới", () => {
                it("{A.10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{A.10} test", "á!_*bc test", 55);
                }
                );
                it("{(A,10)} -> mã lỗi 55", () => {
                    createTemplateCSKH("{(A,10)} test", "á!_*bc test", 55);
                }
                );
                it("{A,*} -> mã lỗi 55", () => {
                    createTemplateCSKH("{A,*} test", "á!_*bc test", 55);
                }
                );
                //----------------------------//
                it("{B.10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{B.10} test", "1.2.3 test", 55);
                }
                );
                it("{(B,10)} -> mã lỗi 55", () => {
                    createTemplateCSKH("{(B.10)} test", "1.2.3 test", 55);
                }
                );
                it("{B,*} -> mã lỗi 55", () => {
                    createTemplateCSKH("{B,*} test", "1.2.3 test", 55);
                }
                );
                //----------------------------//
                it("{C.10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{C.10} test", "1.2.3 test", 55);
                }
                );
                it("{(C,10)} -> mã lỗi 55", () => {
                    createTemplateCSKH("{(C,10)} test", "1.2.3 test", 55);
                }
                );
                it("{C,*} -> mã lỗi 55", () => {
                    createTemplateCSKH("{C,*} test", "1.2.3 test", 55);
                }
                );
                //----------------------------//
                it("{D,10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{D,10} test", "1.2.3 test", 55);
                }
                );
                it("{D.10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{D.10} test", "1.2.3 test", 55);
                }
                );
                //------------------------------//
                it("6 tham biến 1 loại -> 56", () => {
                    createTemplateCSKH("{D} test{D} test{D} test{D} test{D} test{D} test", "1.2.3 test1.2.3 test1.2.3 test1.2.3 test1.2.3 test1.2.3 test", 56);
                });
                it("5 tham biến mỗi loại -> 0", () => {
                    createTemplateCSKH("{A,10}test{A,10}test{A,10}test{A,10}test{A,10}test {B,10}test{B,10}test{B,10}test{B,10}test{B,10}test {C,10}test{C,10}test{C,10}test{C,10}test{C,10}test {D}test{D}test{D}test{D}test{D}test{D}test", "a12!testa12!testa12!testa12!testa12!test1.2.3test1.2.3test1.2.3test1.2.3test1.2.3test1a.2!test1a.2!test1a.2!test1a.2!test1a.2!testa. 12testa. 12testa. 12testa. 12testa. 12test", 0);
                });
                it("SAMPLEMESSAGE vượt quá 1000 kí tự -> 57", () => {
                    createTemplateCSKH("{D}test", "12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsadaaaaaaaaatest", 57);
                });
            });
        })
    })
    context("Regression test với API tạo template QC đã có", () => {
        context("Đại lý VTTP gửi tin QC", () => {
            it("APIUSER không hợp lệ", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate.concat("test")
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 1);
                    });
                })
            })
            it("USERNAME không đúng", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName.concat("test")
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 10);
                    });
                })
            })
            it("CONTRACT ID không đúng", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID.concat(`${Math.floor(Math.random()*1000)}`)
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 13);
                    });
                })
            })
            it("LABEL ID không hợp lệ", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName.concat("test")
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 14);
                    });
                })
            })
            it("AGENTID không hợp lệ", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID.concat(`${Math.floor(Math.random()*10000)}`)
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 15);
                    });
                })
            })
            it("Template có độ dài không hợp lệ", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest123aatest12"
                    //1001 kí tự
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 51);
                    });
                })
            })
            it("Tạo template loại mới bằng API tạo temp QC", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{A,10} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 55);
                    });
                })
            })
            it("Tạo template QC thành công", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logCSKH(res).then(() => {
                        agent.assertRespone(res, 0);
                    });
                })
            })
        })
    })
})
