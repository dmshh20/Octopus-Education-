import 'dotenv/config'

export const ENV = {
    TYPEORM_TYPE: process.env.TYPEORM_TYPE,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    SECRET_KEY: process.env.SECRET_KEY,
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    BASE_URL: process.env.BASE_URL,
    RESEND_RECEIVER_EMAIL: process.env.RESEND_RECEIVER_EMAIL,
    ARCJET_KEY: process.env.ARCJET_KEY,
    ARCJET_ENV: process.env.ARCJET_ENV,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME
}

const requiredEnvs = [
    'SECRET_KEY',
    'RESEND_API_KEY',
    'RESEND_RECEIVER_EMAIL',
    'MONGO_URL',
    'BASE_URL',
    'ARCJET_KEY',
    'CLOUDINARY_API_SECRET',
    'CLOUDINARY_API_KEY'
] as const

for (let envVar of requiredEnvs) {
    if (!process.env[envVar]) {
        throw new Error(`Missing variable. ${envVar} is required`)
    }
}