describe("Chuyển đại từ từ 4 MT -> không giới hạn",()=>{
    it.skip("some tesst ",()=>{
        cy
        .visit("http://ads.vinaphone.com.vn:8888/Login.aspx")
        .get("#ctl00_ContentPlaceHolder2_usrname")
        .type("test852017")
        .get("#ctl00_ContentPlaceHolder2_pass")
        .type("a123456A@")
        .get("#ctl00_ContentPlaceHolder2_submit")
        .click();


         
    })

});


describe("API testing",()=>{
    it("Get adser",()=>{
        const myreq=
        {
            "RQST": {
                "name": "send_sms_list",
                "REQID": "6717519gqda",
                "LABELID": "131350",
                "CONTRACTTYPEID": "1",
                "CONTRACTID": "401",
                "TEMPLATEID": "554183",
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
        let myrequest=JSON.stringify(myreq);      
        cy
        .request("POST","http://192.168.38.163:8888/smsbank/api",myrequest);
    })
})

