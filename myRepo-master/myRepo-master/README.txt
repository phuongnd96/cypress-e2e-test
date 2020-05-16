i code mainly on Admin.js Agent.js and main.spec.js

//check import
// it("i do something here", () => {
//     cy.log(process.ENV);
//     if (process.ENV == "STAGING") {
//         cy.visit();
//         cy.task('readFile', 'C:\\Users\\LapTop\\Downloads\\1615477_thue_bao_loi.xlsx').then((res) => {
//             return res.Strings["3"].h;
//         }).then((res) => {
//             expect(res.trimLeft().trimRight()).to.equal("Không thu?c m?ng");
//         })
//         // this works too
//         //cy.readFile("C:\\Users\\LapTop\\Downloads\\1615477_thue_bao_loi.xlsx", 'binary').then((content) => {
//         //     console.log(content);
//         // })
//     } else if (process.ENV == "PRODUCT") {
//         cy.log(url.portal);
//     }
// })