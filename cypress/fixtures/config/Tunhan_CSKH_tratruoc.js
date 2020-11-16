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
    "bank123"
    ,"Tr1@1234"
    ,"Testbank"
    ,"384"
    ,"dltnbank"
    ,"DLTNbank"
    ,"8183"
    ,"phuongtesst"
    ,"132121"
    ,"{P1}abc"
    ,"562209"
    ,"dltnbank"
    ,"97093"
    ,"{P1}"
    ,"369876"
);
exports.agentTunhan_CSKH_tratruoc=agent;
}