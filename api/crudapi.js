const express = require('express');
const app = express();

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/");
    },
    filename: function (req, file, cb) {
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
        console.log('req.body::: ', req.body);
        res.send({ responce: "sended" })
    } catch (error) {
        res.send({ err: error })
        console.log('error::: ', error);
    }
})

module.exports = router;

