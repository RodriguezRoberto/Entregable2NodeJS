const { User } = require('../models/user.model');
const { Repair } = require('../models/repair.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const user = await User.findOne({ 
      where: { id, status: "available" },
      include: [{ model: Repair }]
    });
  
    if (!user) {
      return next(new AppError('No user found with the given ID or available status', 404));
    }
  
    // Add user data to the req object
    req.user = user;
    next();
});
  
module.exports = { userExists };