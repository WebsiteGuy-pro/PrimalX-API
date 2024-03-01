const fs = require('fs');
const path = require('path');

const dirname = path.resolve(__dirname, "..");

function GetStatus(res) {
    fs.readFile(dirname + "/api/server.json", (err, data) => {
        if (err) {
            res.json({
                success: false,
                message: "Unable to get status"
            })
        } else {
            const jsonData = JSON.parse(data);
            res.json({
                success: true,
                data: jsonData.avaliable
            });
        }
    })
}

module.exports = {GetStatus};