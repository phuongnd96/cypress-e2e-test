import AGENT from '../PageObjects/Agent';
import * as db from '../config/config';
const user = new AGENT();
const fs = require('fs');
 // Require library
var excel = require('excel4node');

describe("Import template qua file excel", () => {
    context("Đại lý VTTP import template qua file excel", () => {
        beforeEach(() => {
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        })
        it("",()=>{
            user.importTemplate("HĐ TEST 135","FILE IMPORT TEMPLATE FULL TRƯỜNG HỢP FINAL_STAG","FILE IMPORT TEMPLATE FULL TRƯỜNG HỢP FINAL_STAG")    
            user.findResultFile('C:\\Users\\LapTop\\Downloads\\').then((fileName)=>{
                console.log(fileName);
            })
        })
    })
})
