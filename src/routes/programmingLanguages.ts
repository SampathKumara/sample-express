import express, { Express, Request, Response } from 'express'
import * as programmingLanguages from '../services/programmingLanguages'
const router = express.Router();

/* GET programming languages. */
router.get('/', async function (req: Request, res: Response, next) {
    try {
        // res.json(programmingLanguages.getMultiple());
        res.json({ "test": 1 });
    } catch (err) {
        console.error(`Error while getting programming languages `, err);
        next(err);
    }
});

export { router }