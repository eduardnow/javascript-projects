let fs = require('fs');
const FILE_NAME = './assets/pies.json';

let pieRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data) {
            if(err) {
                reject(err);
            }

            resolve(JSON.parse(data))
        });
    },

    getById: function(id, resolve, reject) {
        fs.readFile(FILE_NAME, function(err, data){
            if(err) {
                reject(err);
            }

            let pie = JSON.parse(data).find(p => p.id == id)
            resolve(pie);
        });
    }
}

module.exports = pieRepo;