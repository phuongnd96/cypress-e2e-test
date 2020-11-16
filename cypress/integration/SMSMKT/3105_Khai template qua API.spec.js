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

//vào config đổi thành link API mới

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
                it("Tạo thành công template loại A", () => {
                    createTemplateCSKH("{A,10} test", "á!_*bc test", 0);
                })
                it("Tạo thành công template loại B", () => {
                    createTemplateCSKH("{B,10} test", "1.2.3 test", 0);
                })
                it("Tạo thành công template loại C", () => {
                    createTemplateCSKH("{C,30} test", "1.2.3áó**!() test", 0);
                })
                it("Test kí tự đặc biệt ()", () => {
                    createTemplateCSKH("(Thong bao) Pizza 4Ps tran trong {A,30}. Ban vui long co mat vao luc {A,160}. Chi tiet vui long xem thong tin tai email ca nhan cua ban hoac lien he Hotline 0783884977"
                        , "(Thong bao) Pizza 4Ps tran trong moi ban quay tro lai lam viec. Ban vui long co mat vao luc 10h00 01/01 tai 151B Hai Ba Trung gap Phong Nhan Su de hoan tat thu tuc nhan viec truoc khi bat dau lam viec lai tai nha hang. Chi tiet vui long xem thong tin tai email ca nhan cua ban hoac lien he Hotline 0783884977"
                        , 0);
                })
                it("Test kí tự đặc biệt \\\\", () => {
                    createTemplateCSKH("\\test\\ abc {A,10}", "\\test\\ abc test", 0);
                })
                it("Test kí tự đặc biệt .", () => {
                    createTemplateCSKH(".test. abc {A,10}", ".test. abc test", 0);
                })
                it("Test kí tự đặc biệt []", () => {
                    createTemplateCSKH("[test] abc {A,10}", "[test] abc test", 0);
                })
                it("Test kí tự đặc biệt ()", () => {
                    createTemplateCSKH("(Thong bao) abc {A,10}", "(Thong bao) abc test", 0);
                })
                it("Test kí tự đặc biệt **", () => {
                    createTemplateCSKH("*test* abc {A,10}", "*test* abc test", 0);
                })
                it("Test kí tự đặc biệt ??", () => {
                    createTemplateCSKH("?test? abc {A,10}", "?test? abc test", 0);
                })
                it("Test kí tự đặc biệt +", () => {
                    createTemplateCSKH("+test+ abc {A,10}", "+test+ abc test", 0);
                })
                it("Test kí tự đặc biệt ^^", () => {
                    createTemplateCSKH("^test^ abc {A,10}", "^test^ abc test", 0);
                })
                it("Test kí tự đặc biệt $$", () => {
                    createTemplateCSKH("$test$ abc {A,10}", "$test$ abc test", 0);
                })
                it("Test kí tự đặc biệt ||", () => {
                    createTemplateCSKH("|test| abc {A,10}", "|test| abc test", 0);
                })
                it("Test lỗi",()=>{
                    createTemplateCSKH("LUONG {A,8} {D,500}", `
                    LUONG 05/2020 11400 QC MSCV:9 LCB:6,275,530 NLV:22 100%L:4 TL:6,275,530
                    HTDL:153,000 CCT:200,000 BU:9,900 (A)TTH:6,638,430 TBH:658,930 CDP:30,000
                    (B)TKT:688,930 (A)-(B)TL:5,949,500 TPN:11 HD:KXDTH`, 0);
                })
                it.only("TEST",()=>{
                    createTemplateCSKH(`Petrolimex Ninh Binh ap dung muc thu lao tai Kho K135/Nam Dinh tu {A,10} ngay {A,20}:
                    - RON95-IV: {B,10} d/l
                    - E5: {B,10} d/l
                    - DO 0,05-II: {B,10} d/l
                    Tran trong ! (1)`,`Petrolimex Ninh Binh ap dung muc thu lao tai Kho K135/Nam Dinh tu 15h00 ngay 28/5/2020:
                    - RON95-IV: 786 d/l
                    - E5: 760 d/l
                    - DO 0,05-II: 742 d/l
                    Tran trong ! (1)`,0);
                })
                it("Tạo thành công template loại D", () => {
                    createTemplateCSKH("{D,40} test", "1.2.3áó**!!!&*#^*!&$%$!)$!)*!$$)*! () test", 0);
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
                it("{D,-10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{D,10} test", "1.2.3 test", 0);
                }
                );
                it("{D.10} -> mã lỗi 55", () => {
                    createTemplateCSKH("{D.10} test", "1.2.3 test", 55);
                }
                );
                it("{D} -> mã lỗi 55", () => {
                    createTemplateCSKH("{D} test", "1.2.3 test", 55);
                }
                );
                //------------------------------//
                it("6 tham biến 1 loại -> 56", () => {
                    createTemplateCSKH("{D,10} test{D,10} test{D,10} test{D,10} test{D,10} test{D,10} test", "1.2.3 test1.2.3 test1.2.3 test1.2.3 test1.2.3 test1.2.3 test", 56);
                });
                it("5 tham biến mỗi loại -> 0", () => {
                    createTemplateCSKH("{A,10}test{A,10}test{A,10}test{A,10}test{A,10}test{B,10}test{B,10}test{B,10}test{B,10}test{B,10}test{C,10}test{C,10}test{C,10}test{C,10}test{C,10}test{D,10}test{D,10}test{D,10}test{D,10}test{D,10}test", "a12!testa12!testa12!testa12!testa12!test1.2.3test1.2.3test1.2.3test1.2.3test1.2.3test1a.2!test1a.2!test1a.2!test1a.2!test1a.2!test 12test 12test 12test 12test 12test", 0);
                });
                it("SAMPLEMESSAGE vượt quá 1000 kí tự -> 57", () => {
                    createTemplateCSKH("test{D,10}", "test12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsad12312312312312322222asdasdasdasdasdsadaaaaaaaaa", 57);
                });
            });
        })
    })
    //Hàm này APIUSERNAME VÀ API PASSWORD tạo temp Khách hàng phải để là chọn Khách hàng (tức là không chọn khách hàng -> tạo temp cho mọi khách hàng)
    context.skip("Regression test với API tạo template QC đã có", () => {
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
                    logQC(res).then(() => {
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
                    logQC(res).then(() => {
                        agent.assertRespone(res, 10);
                    });
                })
            })
            it("CONTRACT ID không đúng", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID
                    , db.agent_VTT_QC_TRASAU.contractID.concat(`${Math.floor(Math.random() * 1000)}`)
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logQC(res).then(() => {
                        agent.assertRespone(res, 13);
                    });
                })
            })
            it("LABEL không hợp lệ", () => {
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
                    logQC(res).then(() => {
                        agent.assertRespone(res, 14);
                    });
                })
            })
            it("AGENTID không hợp lệ", () => {
                agent.request_create_template_QC(
                    db.url_api.nonbank
                    , db.agent_VTT_QC_TRASAU.agentID.concat(`${Math.floor(Math.random() * 10000)}`)
                    , db.agent_VTT_QC_TRASAU.contractID
                    , db.agent_VTT_QC_TRASAU.brandName
                    , "{P1} test123"
                    , "1"
                    , db.agent_VTT_QC_TRASAU.apiUsernameCreateTemplate
                    , db.agent_VTT_QC_TRASAU.apiPasswordCreateTemplate
                    , db.agent_VTT_QC_TRASAU.userName
                ).then((res) => {
                    logQC(res).then(() => {
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
                    logQC(res).then(() => {
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
                    logQC(res).then(() => {
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
                    logQC(res).then(() => {
                        agent.assertRespone(res, 0);
                    });
                })
            })
        })
    })
})
describe.skip("Gửi mail kết quả", () => {
    it("Send email", () => {
        cy.exec('node sendmail.js')
    })
})

