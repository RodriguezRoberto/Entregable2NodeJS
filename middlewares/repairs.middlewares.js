const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const repairExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const repair = await Repair.findOne({ 
      where: { id, status: "pending" },
      include: [{ model: User }]
    });
  
    if (!repair) {
      return next(new AppError('No repair found with the given ID or status pending', 404));
    }
  
    // Add user data to the req object
    req.repair = repair;
    next();
});
  
module.exports = { repairExists };