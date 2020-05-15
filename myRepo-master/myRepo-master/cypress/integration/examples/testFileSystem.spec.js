import AGENT from '../PageObjects/Agent';
import * as cfg from '../config/config';


const agent= new AGENT();
describe("Flow agent gửi tin", () => {
    beforeEach(() => {
        agent
            .visitAgentPortal(cfg.url.portal.agent)
            .doLogin(cfg.account.agent.username, cfg.account.agent.pw);
    })
    specify("Gửi tin nội mạng gửi ngay", () => {
        agent
            .send_sms_temp_old(
                " "
                , cfg.portalArgs.VTT.cskh.adserName
                , cfg.portalArgs.VTT.cskh.contractName
                , cfg.portalArgs.VTT.cskh.mạng
                , cfg.portalArgs.VTT.cskh.brn
                , cfg.portalArgs.VTT.cskh.template
                , `vina${cfg.count}.xlsx`
                , `vina${cfg.count}.xlsx`
                , 0
                , cfg.sentTime.fromCreateDate
                , cfg.sentTime.toCreateDate
                , cfg.sentTime.fromScheduleDate
                , cfg.sentTime.toScheduleDate);
    })
})