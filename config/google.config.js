import dotenv from 'dotenv';
dotenv.config()

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    NODE_ENV,
    PRODUCTION_URL
} = process.env

const REDIRECT_URI = NODE_ENV === 'production' ? `${PRODUCTION_URL}/login/callback` : `http://localhost:3213/login/callback`

const googleConfig = {
    client: {
        id: GOOGLE_CLIENT_ID,
        secret: GOOGLE_CLIENT_SECRET,
    },
    redirect_uri : REDIRECT_URI
}

export default googleConfig