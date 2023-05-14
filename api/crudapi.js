const express = require('express');
const app = express();

const router = express.Router();

const multer = require("multer");
const cruds=require('../model/curd');

const storage = multer.diskStorage({
    destination: function (req,file, cb) {
        cb(null, "./public/");
    },
    filename: function (req,file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

app.use(express.json());
router.post('/createBlog', upload.single("image"), async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);

        const dataAdd = cruds.create({
            Title: data.title,
            Description: data.describe,
            type: data.type,
            Filepath: req.file.originalname,
        })
        if (dataAdd != undefined) {
            res.send({ responce: "sended" });
        } else {
            res.send({ responce: 0 });
        }
    } catch (error) {
        res.send({ err: error })
        console.log('error::: ', error);
    }
})

router.get('/getAllBlogs', async (req, res) => {
    try {
        const dataAdd = await cruds.find({});
        return res.send({ dataAdd });
    } catch (error) {
        console.log('error::: ', error);
        return res.send({ err: error })
    }
})


module.exports = router;

