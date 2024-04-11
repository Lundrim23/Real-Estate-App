import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  console.log('====================================');
  console.log('Router Works');
  console.log('====================================');
});

export default router;
