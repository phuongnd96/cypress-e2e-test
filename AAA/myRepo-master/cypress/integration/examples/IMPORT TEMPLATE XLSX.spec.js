import AGENT from '../PageObjects/Agent';
import * as db from '../config/config';
const user = new AGENT();

describe("Import template qua file excel", () => {
    specify("Đại lý VTTP import template qua file excel", () => {
        user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        user.importTemplate(
            "HĐ TEST 135"
            , "FILE IMPORT TEMPLATE FULL TRƯỜNG HỢP FINAL.xlsx"
            , "FILE IMPORT TEMPLATE FULL TRƯỜNG HỢP FINAL.xlsx"
        );
        user.findResultFile('C:\\Users\\LapTop\\Downloads\\').then((file)=>{
            user.checkUploadResult(file);
        })
    })
})
