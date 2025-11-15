import 'dotenv/config'

export const ENV = {
    // typeorm connection
    TYPEORM_TYPE: process.env.TYPEORM_TYPE,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    
    // jwt secret key
    SECRET_KEY: process.env.SECRET_KEY,

    // mongodb 
    MONGO_URL: process.env.MONGO_URL,

    // port
    PORT: process.env.PORT
}