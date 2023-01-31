import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config()

const router = express.Router()

const confuguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, 
})

const openai = new OpenAIApi(confuguration);

router.route('/').get((req, res) => {
    res.send('Hello Img Generator!');
})

router.route('/').post(async (req,res ) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            size: '1024x1024',
            response_format: 'b64_json',
        }); 

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image }); 
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router;