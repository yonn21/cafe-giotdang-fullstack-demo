const multer = require('multer')
const mkdirp = require('mkdirp')

const uploadImage = (type, typeImage) => {
    const made = mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`)
        },
        filename: function (req, file, cb) {
            cb(null, req.params.id + '_' + type + '_' + typeImage + '_' + Date.now() + '.' + file.mimetype.slice(6))
        }
    })
    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
                cb(null, true)
            } else {
                cb('File type is not allowed', false)
            }
        },
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    })
    return upload.single(typeImage)
}

module.exports = {
    uploadImage,
}