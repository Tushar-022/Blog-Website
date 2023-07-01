import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv'

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-vh8rnrg-shard-00-00.x018hby.mongodb.net:27017,ac-vh8rnrg-shard-00-01.x018hby.mongodb.net:27017,ac-vh8rnrg-shard-00-02.x018hby.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ut11e-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 