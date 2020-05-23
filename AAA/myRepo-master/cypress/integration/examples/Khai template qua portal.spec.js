import AGENT from '../PageObjects/Agent';
const user = new AGENT();
import * as db from '../config/config';
describe("Thêm template mới trên portal", () => {
    context.skip("Khai template khi tạo mới hợp đồng", () => {
        beforeEach(() => {
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        })
        it("", () => {

        })
    });
    context("Khai template khi sửa hợp đồng", () => {
        beforeEach(() => {
            user.visitAgentPortal(db.url.portal.agent).doLogin(db.account.agent.username, db.account.agent.pw);
        })
        it("Thêm mới template loại A thành công", () => {
            user.addTemplate('{A,30} test123', 'p1!@#$%^&*( ),/`" test123','Thêm mới template thành công.');
        })
        it("Thêm mới template loại B thành công", () => {
            user.addTemplate('{B,30} test123', '1.2 test123');
        })
        it("Thêm mới template loại C thành công", () => {
            user.addTemplate('{C,30} test123', 'p1!@#$%^&*(.),/`" test123','Thêm mới template thành công.');
        })
        it("Thêm mới template loại D thành công", () => {
            user.addTemplate('{D} test123', 'p1!@#$%^&*(á),/`" test123','Thêm mới template thành công.');
        })
        it("Template chứa từ khóa chặn",()=>{
            user.addTemplate('{D} Acetorphine', 'test123 Acetorphine','Từ khóa Etorphine không được sử dụng');
        })
    })
})
