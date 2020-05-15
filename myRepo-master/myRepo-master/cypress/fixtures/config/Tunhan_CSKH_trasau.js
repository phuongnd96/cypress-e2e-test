import * as env from './ENV';
import * as help from './helpfunc';

function AGENT(
    userName
    ,password
    , agentName
    , agentID
    , adserName
    , contractName
    , contractID
    , brandName
    , brnID
    , template
    , templateID
    , brandNameBank
    , brnBankID
    , templateBank
    , templateBankID
) {
    this.userName=userName;
    this.password=password;
    this.agentName=agentName;
    this.agentID=agentID;
    this.adserName=adserName;
    this.contractName=contractName;
    this.contractID=contractID;
    this.brandName=brandName;
    this.brnID=brnID;
    this.template=template;
    this.templateBankID=templateID;
    this.brandNameBank=brandNameBank;
    this.brnBankID=brnBankID;
    this.templateBank=templateBank;
    this.templateBankID=templateBankID;
}


if (env == "STAGING") {

} else if (env == "PRODUCT") {
    const agent=new AGENT(
        "DLtest_71"
        ,"Tr1@123"
        ,"DL_VV"
        ,"389"
        ,"khtest71"
        ,"hdtest71"
        ,"8434"
        ,"test71_khac"
        ,"100657"
        ,"ThuyNT test CSKH YTE-GD {P1}"
        ,"487593"
        ,undefined
        ,undefined
        ,undefined
        ,undefined
    );
    exports.agentTunhan_CSKH_trasau=agent;

}