const { Notice} = require('../../models/notice');
const RequestError = require('../../helpers/requestError');
const { uploadImage } = require('../../middlewares/cloudinary');

const addNoticeToCategory = async (req, res) => {

    if (!req.file) {
      throw RequestError(400, 'File is required.');
    }
    const { _id: owner } = req.user;

    const {path} = req.file;
    
    const { title, name, dateOfBirth, breed } = req.body;
    const notice = await Notice.findOne({ title, name, dateOfBirth, breed });

    if (notice) {
        throw RequestError(400, 'Notice already exist');
    };

    const imageUpload = await uploadImage(path);

    const newNotice = await Notice.create({...req.body, owner, petImage: imageUpload});

    res.status(201).json(newNotice);
};

module.exports = addNoticeToCategory;