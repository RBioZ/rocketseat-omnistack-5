const multer = require('multer');
const path = require('path');
const crypto = require('crypto');//gerar conjunto de caracteres únicos

module.exports = {
    dest: path.resolve(__dirname,'..','..','tmp'),
    store: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};