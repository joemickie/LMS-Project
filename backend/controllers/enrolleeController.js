const Enrollee = require('../models/enrollee');

const getEnrolleeProfile = async (req, res) => {
  try {
    const enrollee = await Enrollee.findById(req.user.enrolleeId).select('-password');
    res.json(enrollee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enrollee profile' });
  }
};

module.exports = {
  getEnrolleeProfile,
};
