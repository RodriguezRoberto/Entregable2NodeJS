const { User } = require( '../models/user.model' );
const { Repair } = require('../models/repair.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async ( req, res ) => {
    const users = await User.findAll({
        where: { status: "available" },
        include: [{ model: Repair }]
    });
    res.status(200).json({ users });
});

const createUser = catchAsync(async ( req, res ) => {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ newUser });
});

const getUserById = catchAsync(async ( req, res ) => {
    const { user }= req;
    res.status(200).json({ user })
});

const updateUserbyId = catchAsync(async ( req, res ) => {
    const { name, email } = req.body;
    const { user } = req;
    await user.update({ name, email })
    res.status(200).json({ staus: "success" })
});

const deleteUserById = catchAsync(async ( req, res ) => {
    const { user } = req;
    await user.update({ status: "unavailable" })
    res.status(200).json({ staus: "success" })
});

module.exports = { 
    getAllUsers, 
    createUser, 
    getUserById, 
    updateUserbyId, 
    deleteUserById 
};