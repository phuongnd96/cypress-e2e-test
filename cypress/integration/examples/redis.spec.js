context("Gửi tin với template chuyển từ active -> rejected", () => {
    let templateID = "554183";
    specify("Gửi tin qua API thành công với template active", () => {
        const myreq =
        {
            "RQST": {
                "name": "send_sms_list",
                "REQID": "6717519gqda",
                "LABELID": "131350",
                "CONTRACTTYPEID": "1",
                "CONTRACTID": "401",
                "TEMPLATEID": templateID,
                "PARAMS": [
                    {
                        "NUM": "1",
                        "CONTENT": "ab!!c1"
                    }
                ],
                "SCHEDULETIME": "",
                "MOBILELIST": "84912158656",
                "ISTELCOSUB": "0",
                "AGENTID": "164",
                "APIUSER": "hoandd",
                "APIPASS": "hoandd",
                "USERNAME": "DH_CS",
                "DATACODING": "0"
            }
        };

        cy
            .request("POST", "http://192.168.38.134:8888/smsmarketing/api", myreq)
            .then((respone) => {
                cy.log(respone.body["RPLY"])
               
                expect(respone.status).equal(200);
                expect(respone.body["RPLY"]["ERROR"]).to.equal('0')
                let err_desc = respone.body["RPLY"]["ERROR_DESC"];
                expect(err_desc).to.equal("success");
            })
    });
    specify("Reject template", () => {
        cy
            //.visit("http://ads.vinaphone.com.vn:8888/Login.aspx")
            .visit("http://ads.vinaphone.com.vn:8888/Login.aspx")
            .get("#ctl00_ContentPlaceHolder2_usrname")
            .type("test852017")
            .get("#ctl00_ContentPlaceHolder2_pass")
            //.type("a123456A@")
            .type("a123456A@")
            .get("#ctl00_ContentPlaceHolder2_submit")
            .click();
        //Tìm nhãn
        cy
            .contains("DUYỆT TEMPLATE")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtIDTemplate")
            .type(templateID)
            .wait(5000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select("Actived")
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo").invoke('text').then((text) => {
                expect(text).to.equal('Reject thành công 1 template.');
            })
    })
    specify("Gửi tin qua API thất bại sau khi reject template", () => {
        const myreq =
        {
            "RQST": {
                "name": "send_sms_list",
                "REQID": "6717519gqda",
                "LABELID": "131350",
                "CONTRACTTYPEID": "1",
                "CONTRACTID": "401",
                "TEMPLATEID": templateID,
                "PARAMS": [
                    {
                        "NUM": "1",
                        "CONTENT": "ab!!c1"
                    }
                ],
                "SCHEDULETIME": "",
                "MOBILELIST": "84912158656",
                "ISTELCOSUB": "0",
                "AGENTID": "164",
                "APIUSER": "hoandd",
                "APIPASS": "hoandd",
                "USERNAME": "DH_CS",
                "DATACODING": "0"
            }
        };
        cy.request("POST", "http://192.168.38.134:8888/smsmarketing/api", myreq).then((respone) => {
            cy.log(respone.body["RPLY"])
            expect(respone.status).equal(200);
            expect(respone.body["RPLY"]["ERROR"]).to.equal('7')
            let err_desc = respone.body["RPLY"]["ERROR_DESC"];
            expect(err_desc).to.equal("template khong hop le hoac ko ton tai vs label va agent");
            cy.log(err_desc);
        })
    });
    specify("Active lại template", () => {
        cy
            //.visit("http://ads.vinaphone.com.vn:8888/Login.aspx")
            .visit("http://ads.vinaphone.com.vn:8888/Login.aspx")
            .get("#ctl00_ContentPlaceHolder2_usrname")
            .type("test852017")
            .get("#ctl00_ContentPlaceHolder2_pass")
            //.type("a123456A@")
            .type("a123456A@")
            .get("#ctl00_ContentPlaceHolder2_submit")
            .click();
        //Tìm nhãn
        cy
            .contains("DUYỆT TEMPLATE")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtIDTemplate")
            .type(templateID)
            .wait(5000) //for safety
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select("Rejected")
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnApprove")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo").invoke('text').then((text) => {
                expect(text).to.contains('Approve thành công 1 template.');
            })
    })
});
