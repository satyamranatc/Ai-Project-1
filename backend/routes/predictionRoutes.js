const express = require('express');
const router = express.Router();
const HeartAttack = require('../models/heartAttack');

// POST /api/predictions
router.post('/predictions', async (req, res) => {
  try {
    const {
      fullName,
      age,
      gender,
      heartRate,
      systolicBP,
      diastolicBP,
      bloodSugar,
      ckMb,
      troponin,
    } = req.body;

    const newHeartAttack = new HeartAttack({
      fullName,
      age,
      gender,
      heartRate,
      systolicBP,
      diastolicBP,
      bloodSugar,
      ckMb,
      troponin,
    });

    await newHeartAttack.save();

    res.status(201).json({ message: 'Heart attack prediction saved successfully.' });
  } catch (error) {
    console.error('Error saving heart attack prediction:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET /api/userData
router.get('/userData', async (req, res) => {
  try {
    const predictions = await HeartAttack.find();
    res.status(200).json(predictions);
  } catch (error) {
    console.error('Error fetching heart attack predictions:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
