import multer from "multer";

const storageconfig = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/resume');
        },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    },
})

export const uploadfile = multer({
    storage:storageconfig,
})