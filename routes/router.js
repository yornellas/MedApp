import { express } from 'express';

let router = express.Router();

router.get(
  '/', function(req, res) {
    console.log('hi!');
    res.status(200).json({ messahe: 'hi!' });
  }
);

export default router;