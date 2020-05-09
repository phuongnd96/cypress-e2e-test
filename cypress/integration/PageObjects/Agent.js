import { get_adser, get_template, get_contract, create_template_CSKH, create_template_QC, get_label, send_sms_list } from '../PageObjects/ApiRequests';

class Agent {
    visitAgentPortal(url) {
        cy
            .visit(url);
        return this;
    };

    visitEMS(url) {
        cy
            .visit(url);
        return this;
    };

    loginESMSPortal(username, password) {
        cy
            .contains("Đăng nhập")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_usrname")
            .type(username)
            .get("#ctl00_ContentPlaceHolder2_pass")
            .type(password)
            .get("#ctl00_ContentPlaceHolder2_submit")
            .click()
            .wait(1000)
            .get(".after-login").invoke('text').then((text) => {
                expect(text).to.equal("84857760576");
            })
        return this;
    };

    createESMSBrn(brn, GPKDfileName, GPKDfilePath, giayUyQuyenFileName, giayUyQuyenFilePath, CMNDfileName, CMDNfilePath, confirmGPKDfileName, confirmGPKDfilePath, mobileList, customerName, content, contentAlias) {
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtBrandName")
            .type(brn)
            .get(".flip")
            .click();
        cy.fixture(GPKDfilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_asyncFuBizLicense_ctl02')
                    .attachFile({
                        fileContent,
                        fileName: GPKDfileName,
                        mimeType: 'image/png'
                    });

            })
        cy.wait(1000);
        cy.fixture(giayUyQuyenFilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_asyncFuAuthorized_ctl02')
                    .attachFile({
                        fileContent,
                        fileName: giayUyQuyenFileName,
                        mimeType: 'image/png'
                    });

            })
        cy.wait(1000);
        cy.fixture(CMDNfilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_asyncFuIdentity_ctl02')
                    .attachFile({
                        fileContent,
                        fileName: CMNDfileName,
                        mimeType: 'image/png'
                    });

            })
        cy.wait(2000);
        cy.fixture(confirmGPKDfilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_asyncFuBusinessDeal_ctl02')
                    .attachFile({
                        fileContent,
                        fileName: confirmGPKDfileName,
                        mimeType: 'image/png'
                    });

            })
        cy.wait(2000);
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPhoneList")
            .type(mobileList)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtGroupName")
            .type(customerName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_tbTemplateContent")
            .type(content)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtTemplateName")
            .type(contentAlias)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_imgBtnSend")
            .click();
        cy.wait(2000);
        return this


    };

    sendESMS(brn, moblieListFilePath, mobileListFileName, customerName, templateContent, contentAlias, scheduleTime) {
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLabel_chosen > .chosen-drop > .chosen-search > input")
            .type(brn, { force: true })
            .type("{downarrow}{enter}")
            .get(".flip")
            .click({ force: true })
            .fixture(moblieListFilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_asynfileuploadSubs_ctl02')
                    .attachFile({
                        fileContent,
                        fileName: mobileListFileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
                //tên khách hàng
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtGroupName")
                    .type(customerName)
                    //nội dung tin nhắn
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_tbTemplateContent")
                    .type(templateContent)
                    //content alias
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtTemplateName")
                    .type(contentAlias)
                    //click nút thiết lập thời gian và gửi tin (chọn brn và template xong)
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_imgBtnSend")
                    .click();
                //chọn thời gian gửi 
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtScheduleTime")
                    //.click(5,5,{force:true})
                    .wait(2000)
                    .type("{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}", { force: true })
                    .type(scheduleTime);
                //gửi tin và xem báo cáo
                cy
                    .get(".btn-primary > img")
                    .click()
                    .wait(2000);
                //confirm gửi tin
                cy
                    .get(`[href="javascript:execEnoughOk()"] > .button-blue`)
                    .click({force:true});
                //lấy báo cáo gửi tin
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLabel")
                    .select(brn)
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnShowReport")
                    .click()
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_repeatSummary_ctl01_hplDetail")
                    .invoke("text").then((text) => {
                        expect(text).to.equal(brn)
                    })
            })

    };

    doLogin(userame, password) {
        cy
            .get("#ctl00_ContentPlaceHolder2_usrname")
            .type(userame)
            .get("#ctl00_ContentPlaceHolder2_pass")
            .type(password)
            .get("#ctl00_ContentPlaceHolder2_submit")
            .click();
        return this;
    };

    addBrandName_staging(brn, VinaType, MobifoneType, ViettelType, GtelType, VietnammobileType, ItelType, customerName, filename, filepath, expiredDate) {
        cy.contains("SỬA HỢP ĐỒNG").click({ force: true });
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditLabel")
            .click();
        //thêm mới nhãn
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_btnFooterAddLabel > img")
            .click();
        //điền thông tin nhãn
        //Tên nhãn
        cy.
            get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterLabel")
            .type(brn)
            //Số hiển thị chưa bỏ trên product
            //Chọn Loại Vina
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelType")
            .select(VinaType)
            //Chọn Loại Mobifone
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeMobifone")
            .select(MobifoneType)
            //Chọn Loại Viettel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeViettel")
            .select(ViettelType)
            //Chọn loại Gtel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeGTEL")
            .select(GtelType)
            //Chọn loại Vietnammobile
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeVNM")
            .select(VietnammobileType)
            //Chọn loại Itel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeITel")
            .select(ItelType);
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterCustomer")
            .type(customerName)
            //Điền mã số thuế
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterTaxCode")
            .type(Math.floor(Math.random() * 100000));
        //Upload file hồ sơ
        let fileName = filename;
        cy.fixture(filepath).then((fileContent) => {
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_fileUploadFooterHoSo")
                .attachFile({
                    fileContent,
                    fileName: fileName
                })
        });
        //Chọn ngày hết hạn
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterExpiredDate')
            .type(expiredDate)
            //ghi chú

            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterNote')
            .type("Auto created by cypress")
            //Chọn OK

            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_btnFooterOK > img')
            .click();
        //Verify
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo')
            .then(($element) => {
                expect($element).to.have.text("Thêm mới nhãn thành công.");
            })
        return this;

    };
    //product vẫn còn trường số hiển thị của nhãn
    addBrandName_product(brn, displayNumber, VinaType, MobifoneType, ViettelType, GtelType, VietnammobileType, ItelType, customerName, filename, filepath, expiredDate) {
        cy.contains("SỬA HỢP ĐỒNG").click({ force: true });
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditLabel")
            .click();
        //thêm mới nhãn
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_btnFooterAddLabel > img")
            .click();
        //điền thông tin nhãn
        //Tên nhãn
        cy.
            get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterLabel")
            .type(brn)
            //Số hiển thị chưa bỏ trên product
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterDisplayNumber")
            .type(displayNumber)
            //Chọn Loại Vina
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelType")
            .select(VinaType)
            //Chọn Loại Mobifone
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeMobifone")
            .select(MobifoneType)
            //Chọn Loại Viettel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeViettel")
            .select(ViettelType)
            //Chọn loại Gtel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeGTEL")
            .select(GtelType)
            //Chọn loại Vietnammobile
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeVNM")
            .select(VietnammobileType)
            //Chọn loại Itel
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_ddlFooterLabelTypeITel")
            .select(ItelType);
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterCustomer")
            .type(customerName)
            //Điền mã số thuế
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterTaxCode")
            .type(Math.floor(Math.random() * 100000));
        //Upload file hồ sơ
        let fileName = filename;
        cy.fixture(filepath).then((fileContent) => {
            cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_fileUploadFooterHoSo")
                .attachFile({
                    fileContent,
                    fileName: fileName
                })
        });
        //Chọn ngày hết hạn
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterExpiredDate')
            .type(expiredDate)
            //ghi chú

            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_txtFooterNote')
            .type("Auto created by cypress")
            //Chọn OK

            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvLabel_ctl07_btnFooterOK > img')
            .click();
        //Verify
        cy
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo')
            .then(($element) => {
                expect($element).to.have.text("Thêm mới nhãn thành công.");
            })
        return this;

    };

   addTemplate(template, sampleMessage) {
        cy.contains("SỬA HỢP ĐỒNG").click({ force: true });
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditTemplate")
            .click()
            //thêm template
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl08_btnFooterAddTemplate > img")
            .click()
            //điền template
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl08_txtFooterTemplate")
            .type(template, { parseSpecialCharSequences: false })
            //Chọn nhãn đầu tiên
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl08_ddlLabel_ddlLabel_Button")
            .type('{downarrow}{downarrow}{enter}')
            //Tin nhắn mẫu
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl08_txtFooterTemplateContentMessage")
            .type(sampleMessage)
            //Chọn loãi template

            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl08_btnFooterOK")
            .click({ force: true })
            //Chọn O
            .wait(2000)
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo')
            .then(($element) => {
                expect($element).to.have.text("Thêm mới template thành công.");
            });
        cy.get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl02_lblTemplateId").invoke('text').then((text) => {
            templateId = text;
            //trả ra template Id
            return templateId;
        })
    };
    //product chỉ đang tạo template 1 loại cũ
    addTemplate_product(template, brn) {
        cy.contains("SỬA HỢP ĐỒNG")
            .click({ force: true });
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_btnEditTemplate")
            .as("templateBtn");
        cy
            .get("@templateBtn")
            .click();
        //thêm template
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr:last-child>td:last-child>[title='Thêm mới template']")
            .as('addTemplateBtn')
            .get('@addTemplateBtn').click({ force: true });
        //điền template
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr:last-child>td>textarea")
            .as("templateTextBox")
        cy
            .get("@templateTextBox")
            .type(template, { parseSpecialCharSequences: false })
        //Chọn nhãn đầu tiên
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr:last-child>td>div>table>tbody>tr>td>[type='button']")
            .as("selectBrnBtn")
        cy
            .get("@selectBrnBtn")
            .type('{downarrow}{downarrow}{enter}')
        //OK
        cy.wait(500)
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate>tbody>tr:last-child>td>a[title='OK']")
            .as("okBtn")
        cy
            .get("@okBtn")
            .click({ force: true })

            .wait(2000)
            .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo')
            .then(($element) => {
                expect($element).to.have.text("Thêm mới template thành công.");
            });
        // cy
        // .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_grvTemplate_ctl02_lblTemplateId").as("templateId")
        // return cy
        // .get("@templateId").invoke('text').then(text=>text);
    };
    
    createLBA(lbaname, scheduleTime, adsername, countNumberMobile, contractName, brn, templateContent, gender, activeTime, isHave3G, blackListFileName, blackListFilePath, whiteListFileName, whiteListFilePath) {
        cy
            .contains("TẠO MỚI CD")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtCampaignName")
            .type(lbaname)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtScheduleTime")
            .type(scheduleTime)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdser")
            .select(adsername)
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtCountNumberMobile")
            .type(countNumberMobile)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlContract")
            .select(contractName)
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLabel")
            .select(brn)
            .wait(1000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_tbTemplateContent")
            .type(templateContent)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSaveCampaign")
            .click()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbAge0_18")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlGender")
            .select(gender)
            .wait(1000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbSubTypePrepay")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbVoiceAmountUnder100th")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlActiveTime")
            .select(activeTime)
            .wait(1000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbDataMonth0_10th")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbOSIOS")
            .check()
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddl3G")
            .select(isHave3G);
        let fileName = blackListFileName;
        cy.fixture(blackListFilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('input#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_fileUploadBlackList')
                    .attachFile({
                        fileContent,
                        fileName: fileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
            })

        cy.fixture(whiteListFilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('input#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_fileUploadBlackList')
                    .attachFile({
                        fileContent,
                        fileName: whiteListFileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
            })
        cy
            //interact with map
            .get('[title="Zoom in"]')
            .dblclick({ force: true })
            //chọn nút vẽ
            .get(`[style="margin: 5px; z-index: 10; position: absolute; top: 0px; left: 492px;"] > :nth-child(2) > [role="button"]`)
            .click()
            //vẽ
            .get(":nth-child(27) > :nth-child(2)").as("map") //đây là bản đồ
        cy.get("@map")
            .click(50, 60)
            .wait(2000)
            .click(123, 80).then(() => {
                //Gửi phê duyệt
                cy.wait(1000);
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSendAprove")
                    .click();

            })
    };

    send_sms_temp_new_không_dấu(scheduleTime, adserName, contractName, mạng, brn, template, filename, filepath) {
        cy
            .contains("GỬI TIN CSKH - Template mới")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_txtScheduleTime")
            .type(scheduleTime)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlAdser")
            .select(adserName)
            //Chọn hợp đồng
            //wait for page to render
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlContract")
            .select(contractName)
            //Mặc định gửi nội mạng vinaphone
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlOperator")
            .select(mạng)
            .wait(2000)
            //Chọn nhãn
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlLabel")
            .select(brn)
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlTemplate")
            .select(template);
        let fileName = filename;
        cy.fixture(filepath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_fileUploadTemplateParameter')
                    .attachFile({
                        fileContent,
                        fileName: fileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSend")
                    .click({ force: true })
                    .get("[alt='image notification']")
                    .click().then(() => {
                        cy.wait(10000); //đợi cho có thông báo gửi tin
                    })
                cy
                    .reload()
                    .get("#idNotiLink1")
                    .click({ force: true });
            });
    };

    send_sms_temp_new_có_dấu(scheduleTime, adserName, contractName, mạng, brn, template, filename, filepath) {
        cy
            .contains("GỬI TIN CSKH - Template mới")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_txtScheduleTime")
            .type(scheduleTime)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlAdser")
            .select(adserName)
            //Chọn hợp đồng
            //wait for page to render
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlContract")
            .select(contractName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlOperator")
            .select(mạng)
            .wait(2000)
            //Gửi tin có dấu
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_rblCharacterType_1")
            .check()
            //Mặc định gửi nội mạng vinaphone
            //Chọn nhãn
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlLabel")
            .select(brn)
            .wait(2000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlTemplate")
            .select(template);
        let fileName = filename;
        cy.fixture(filepath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_fileUploadTemplateParameter')
                    .attachFile({
                        fileContent,
                        fileName: fileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSend")
                    .click({ force: true })
                    .get("[alt='image notification']")
                    .click().then(() => {
                        cy.wait(10000); //đợi cho có thông báo gửi tin
                    })
                cy
                    .reload()
                    .get("#idNotiLink1")
                    .click({ force: true });
            });

    };

    send_sms_temp_old(scheduleTime, adserName, contractName, mạng, brn, template, filename, filepath, encoding) {
        if (encoding == 8) {
            cy
                .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_rblCharacterType_1")
                .check()
        }
        cy
            .wait(1000)
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_txtScheduleTime")
            .type(scheduleTime)
            //chọn khách hàng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlAdser")
            .select(adserName)
            .wait(3000)
            //chọn loại hợp đồng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlContract")
            .select(contractName)
            .wait(1000)
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlOperator")
            .select(mạng)
            .wait(1000)
            //chọn nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlLabel")
            .select(brn)
            .wait(1000)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_ddlTemplate")
            .select(template)
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_tbTemplateContent").then((templateContent) => {
                expect(templateContent).to.have.prop('disabled', true)
                //verify không sửa được template
            })
        let fileName = filename;
        cy.fixture(filepath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy
                    .get('#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_TabContainer1_TabPanel1_fileUploadTemplateParameter')
                    .attachFile({
                        fileContent,
                        fileName: fileName,
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        encoding: 'utf8'
                    });
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSend")
                    .click({ force: true })
                    .get("[alt='image notification']")
                    .click().then(() => {
                        cy.wait(5000); //đợi cho có thông báo gửi tin
                    })
                cy
                    .reload()
                    .get("#idNotiLink1")
                    .click({ force: true });

            })
    };

    request_get_adser(url, agentID, apiUsername, apiPassword) {
        return cy.request("POST", url, get_adser(agentID, apiUsername, apiPassword));
    };

    request_get_template(url, agentID, labelID, apiUsername, apiPassword) {
        return cy.request("POST", url, get_template(agentID, labelID, apiUsername, apiPassword))
    };

    request_get_contract(url, agentID, adserID, apiUsername, apiPassword) {
        return cy.request("POST", url, get_contract(agentID, adserID, apiUsername, apiPassword))

    };

    request_create_template_CSKH(url, agentID, labelID, content, samplemessage, apiUsername, apiPassword, username) {
        return cy.request("POST", url, create_template_CSKH(agentID, labelID, content, samplemessage, apiUsername, apiPassword, username))

    };

    request_create_template_QC(url, agentID, contractID, brn, templateContent, totalParams, apiUsername, apiPassword, username) {
        return cy.request("POST", url, create_template_QC(agentID, contractID, brn, templateContent, totalParams, apiUsername, apiPassword, username))

    };

    request_get_label(url, agentID, adserID, contractID, apiUsername, apiPassword) {
        return cy.request("POST", url, get_label(agentID, adserID, contractID, apiUsername, apiPassword))

    };

    request_send_sms_nonbank_bank(
        url
        , brnID
        , contracTypeID
        , contractID
        , templateID
        , numberOfParams
        , content
        , scheduletime
        , mobilelist
        , istelcosub
        , agentID
        , apiUsername
        , apiPassword
        , username
        , dataCoding) {
        return cy.request("POST", url, send_sms_list(
            brnID
            , contracTypeID
            , contractID
            , templateID
            , numberOfParams
            , content
            , scheduletime
            , mobilelist
            , istelcosub
            , agentID
            , apiUsername
            , apiPassword
            , username
            , dataCoding));

    };
    
    assertRespone(res, errCode) {
        if (errCode == 0) {
            expect(res.status).to.equal(200);
            expect(res.body["RPLY"]["ERROR"]).to.equal('0');
            expect(res.body["RPLY"]["ERROR_DESC"]).to.equal("success");
        }
        else {
            expect(res.body["RPLY"]["ERROR"]).to.equal(`${errCode}`);
        }
    };
    //-----------------------------------------------------------------------------------------------------//
    //----------------------------------In Progress--------------------------------------------------------//
    addCustomer(adserName, adserPaper, address, adserMobile, adserEmail, status, adserType, isLimitedMT, limitMT) {
        cy
            .contains("QL KHÁCH HÀNG")
            .click({ force: true })
            //tên khách hàng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserName")
            .type(adserName)
            //số giấy tờ
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserPaper")
            .type(adserPaper)
            //địa chỉ
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserAddr")
            .type(address)
            //số điện thoại
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserMobile")
            .type(adserMobile)
            //email
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserEmail")
            .type(adserEmail)
            //trạng thái
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select(status)
            //loại khách hàng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdserType")
            .select(adserType)
        //giới hạn MT
        cy.wait(1000).then(() => {
            if (isLimitedMT == true) {
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rblLimitMT_1")
                    .check()
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtLimitMT")
                    .type(limitMT);
            }
        })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click();
        //trả ra text để assert
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                return text;
            })
    };

    editCustomer(adserName, adserPaper, address, adserMobile, adserEmail, status, adserType, isLimitedMT, limitMT) {
        cy
            .contains("QL KHÁCH HÀNG")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtSearchAdserName")
            .type(adserName)
            //tìm khách hàng có số giấy tờ là adser paper trong bảng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1 > tbody")
            .contains(adserPaper)
            .parent().parent()
            .within(() => {
                cy
                    .contains("Chi tiết")
                    .click()
            })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserAddr")
            .type(address)
            //số điện thoại
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserMobile")
            .type(adserMobile)
            //email
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAdserEmail")
            .type(adserEmail)
            //trạng thái
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select(status)
            //loại khách hàng
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdserType")
            .select(adserType)
        //giới hạn MT
        cy.wait(1000).then(() => {
            if (isLimitedMT == true) {
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rblLimitMT_1")
                    .check()
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtLimitMT")
                    .type(limitMT);
            }
            else {
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_rblLimitMT_0")
                    .check()
            }
        })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click();
        //trả ra text để assert
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                return text;
            })
    };

    addCustomerAccount(adserName, userName, password, isActive) {
        cy
            .contains("QL TÀI KHOẢN KH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAG")
            .select(adserName)
        //tên tài khoản và mật khẩu
        cy
            .wait(500)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtUserName")
            .type(userName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPassword")
            .type(password)
            .then(() => {
                if (isActive == false) {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_cbStatus")
                        .uncheck();
                };
            });
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click();
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                return text;
            })

    };

    addCustomerGroup(adserName, customerGroupName, groupDescription) {
        cy
            .contains("QL NHÓM")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdser")
            .select(adserName)
        cy
            .wait(500);
        cy
            .get("table.tbl>tbody")
            .contains("Pending")
            .parent()
            .parent()
            .within(() => {
                cy
                    .get("input.txt")
                    .eq(0)
                    .type(customerGroupName)
                    .get("input.txt")
                    .eq(1)
                    .type(groupDescription);
            });
        //thêm mới
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click()
            .wait(6);
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lb_info")
            .invoke('text').then((text) => {
                return text
            })
    };
    viewESMSCustomerInfo(brn) {
        cy
            .contains("QL GIẤY TỜ KH")
            .click({ force: true })
            //chọn nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLabel")
            .select(brn)
            //nhấn tìm kiếm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
            //verify nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_txtAdserName")
            .invoke('text')
            .then((text) => {
                expect(text).to.eqls(brn);
            })
        cy
            .contains(`GPKD ${brn}`)
            .should('have.attr', 'href')
        cy
            .contains(`Giay Uy quyen ${brn}`)
            .should('have.attr', 'href')
        cy
            .contains(`CMT ${brn}`)
            .should('have.attr', 'href')
    }
    approveOrRejectBrandName(status, brn, typeOfAction) {
        cy
            .contains("DUYỆT NHÃN")
            .click({ force: true })
            //chọn trạng thái
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlStatus")
            .select(status)
            //chọn nhãn
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtKeyword")
            .type(brn)
            //tìm kiếm
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()

        //verify tên nhãn xuất hiện trong bảng kết quả
        cy
            .get("table.tbl>tbody").within(() => {
                cy.contains(brn).should('be.visible');
            })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_chkbox")
            .check()
            .then(() => {
                if (typeOfAction == "Approve") {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnApprove")
                        .click()
                    cy.contains("thành công").should('be.visible');
                }
                else if (typeOfAction == "Reject") {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnReject")
                        .click();
                    cy
                        .contains("thành công").should('be.visible');
                }
            })
    };
    approveTemplate() {

    };
    rejectTemplate() {

    };
    searchAgentAPI(adserName, numberOfAPIAccount) {
        cy
            .contains("QL API KH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdser")
            .select(adserName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click();
        cy
            .get("table.tbl>tbody>tr")
            .should('have.length', parseInt(numberOfAPIAccount + 2));
    }
    addAgentAPI(adserName, typeOfAPI, userName, password, IPList, status) {
        cy
            .contains("QL API KH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_ddlAG")
            .select(adserName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_ddlAPI")
            .select(typeOfAPI)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_txtUserName")
            .type(userName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_txtPassword")
            .type(password)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_txtIP")
            .type(IPList)
            .then(() => {
                if (status == true) {
                    cy
                        .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl18_chkPub")
                        .check();
                }
            })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btn_add")
            .click()
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                return text;
            })

    };
    editAgentAPI(adserName, typeOfAPI, agentAPINew, agentAPIPasswordNew, IPListNew) {
        cy
            .contains("QL API KH")
            .click({ force: true })
            // tim kiem theo ten khach hang
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdser")
            .select(adserName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
        //tim kiem theo loaij API vi moi khach hang chi duoc cap 1 tai khoan cho moi loai API
        cy
            .contains(typeOfAPI)
            .parent()
            .parent()
            .parent()
            .within(() => {

                cy
                    .get("input:nth-child(1):nth-child(1)[type='text']:nth-child(1):eq(0)")
                    .clear()
                    .type(agentAPINew)
                    .get("input:nth-child(1):nth-child(1)[type='text']:nth-child(1):eq(1)")
                    .clear()
                    .type(agentAPIPasswordNew)
                    .get("input:nth-child(1):nth-child(1)[type='text']:nth-child(1):eq(2)")
                    .clear()
                    .type(IPListNew)
                    .get("[type='checkbox']")
                    .check()
            });

        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btUpdate1")
            .click()
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke('text').then((text) => {
                expect(text).to.contains("Cập nhật thành công")
            })


    };
    deleteAgentAPI(adserName, typeOfAPI) {
        cy
            .contains("QL API KH")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlAdser")
            .select(adserName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click()
        cy
            .contains(typeOfAPI)
            .parent()
            .parent()
            .parent()
            .within(() => {
                cy
                    .get("[type='checkbox']")
                    .check()
            })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btDelete1")
            .click()
        cy
            .contains("Khóa truy cập thành công 1 API.")
            .should('be.visible');
        return cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_lbInfo")
            .invoke("text").then((text) => {
                return text;
            })
    };
    findAgentOrder(serviceProvider, brnType, orderName) {
        cy
            .contains("GÓI TIN ĐẠI LÝ")
            .click({ force: true })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlContractType")
            .should('be.disabled');
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlOperator")
            .select(serviceProvider)
        cy.wait(500);
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_ddlLableType")
            .select(brnType)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnSearch")
            .click();
        cy
            .contains(orderName)
            .parent()
            .parent()
            .within(() => {
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_lblSend_number")
                    .as('sendNumber');
                cy
                    .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_GridView1_ctl02_lbSmsRemain")
                    .as('smsRemain');
            })

    };
    //làm nốt case này
    findCustomerOrder() {
        cy
            .contains("GÓI TIN KH LẺ")
            .click({ force: true })
    };
    searchSendingHistory(fromCreateDate, toCreateDate, fromScheduleDate, toScheduleDate, brn) {
        cy
            .contains("LS GỬI TIN")
            .click({ force: true })
        //ngay dat lich
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtFromCreateDate")
            .clear()
            .type(fromCreateDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtToCreateDate")
            .clear()
            .type(toCreateDate);
        //ngay gui tin
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtFromScheduleDate")
            .clear()
            .type(fromScheduleDate)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtToScheduleDate")
            .clear()
            .type(toScheduleDate)
        //chon brandname
        cy
            .contains(brn)
            .click({ force: true })
        cy
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_Button1")
            .click()
        cy
            .contains("Đặt lệnh")
            .should('be.visible');
    };
    searchOrderHistory() {

    };
    addContact(contactName, address, phoneNumber, email) {
        cy
            .contains("LIÊN HỆ")
            .click({ force: true })
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtName")
            .type(contactName)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtAddress")
            .type(address)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtPhoneNumber")
            .type(phoneNumber)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_txtEmail")
            .type(email)
            .get("#ctl00_ContentPlaceHolder2_PlaceHolder_ctl00_btnAdd")
            .click()
        cy
            .contains("Thêm mới thành công")
            .should('be.visible');

    }
    changePassword() {

    };
}
export default Agent;