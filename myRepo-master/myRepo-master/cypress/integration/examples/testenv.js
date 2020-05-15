import * as cfg from '../config/config';
import AGENT from '../PageObjects/Agent';
const agent = new AGENT();
it ("test env var",()=>{
    agent.visitAgentPortal(cfg.url.portal.agent);
})