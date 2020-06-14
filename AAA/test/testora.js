const oracledb=require('oracledb');
oracledb.getConnection(
    {
        user:"sms_ads"
        ,password:"sms123"
        ,connectString:"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=10.84.5.201)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=nonbank)))"
    }
,
function(err,connection){
    if(err){
        console.log(err);
    }
    connection.execute(
        "SELECT * FROM TEMPLATE"
        ,function (err,res){
            if (err){
                console.log(err);
                return;
            }
            console.log(res.rows);
        }
    )
})
