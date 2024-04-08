const mongoose = require('mongoose');

const heartAttackSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  gender: Number,
  heartRate: Number,
  systolicBP: Number,
  diastolicBP: Number,
  bloodSugar: Number,
  ckMb: Number,
  troponin: Number,
});

const HeartAttack = mongoose.model('HeartAttack', heartAttackSchema);

module.exports = HeartAttack;
