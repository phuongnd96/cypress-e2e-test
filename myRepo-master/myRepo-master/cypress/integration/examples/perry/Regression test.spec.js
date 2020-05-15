/// <reference types="cypress" />
// const baseConfigpath="C:\\Users\\LapTop\\Desktop\\myRepo-master\\myRepo-master\\cypress\\fixtures\\config\\"
// import * as process from 'C:\\Users\\LapTop\\Desktop\\myRepo-master\\myRepo-master\\cypress\\fixtures\\config\\ENV.js';
import * as url from  'C:\\Users\\LapTop\\Desktop\\myRepo-master\\myRepo-master\\cypress\\fixtures\\config\\url.js';


//check import
// it("i do something here", () => {
//     cy.log(process.ENV);
//     if (process.ENV == "STAGING") {
//         cy.visit();
//         cy.task('readFile', 'C:\\Users\\LapTop\\Downloads\\1615477_thue_bao_loi.xlsx').then((res) => {
//             return res.Strings["3"].h;
//         }).then((res) => {
//             expect(res.trimLeft().trimRight()).to.equal("Không thuộc mạng");
//         })
//         // this works too
//         //cy.readFile("C:\\Users\\LapTop\\Downloads\\1615477_thue_bao_loi.xlsx", 'binary').then((content) => {
//         //     console.log(content);
//         // })
//     } else if (process.ENV == "PRODUCT") {
//         cy.log(url.portal);
//     }
// })
it("do something here",()=>{
    cy.visit(url.portal.agentPortal);
})