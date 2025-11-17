import {v2 as cloudinary} from 'cloudinary'
import { ENV } from 'src/lib/env'


cloudinary.config({
    CLOUDINARY_API_KEY: ENV.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: ENV.CLOUDINARY_API_SECRET,
    CLOUDINARY_NAME: ENV.CLOUDINARY_NAME
})

