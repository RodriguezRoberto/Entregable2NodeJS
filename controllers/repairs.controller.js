const { Repair } = require( '../models/repair.model' );
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllRepairs = catchAsync(async ( req, res ) => {
    const repairs = await Repair.findAll({
        include: [{ model: User }]
    });
    res.status(200).json({  repairs });
})

const createRepair = catchAsync(async ( req, res ) => {
    const { date, computerNumber, comments, userId } = req.body;
    const newRepair = await Repair.create({ date, computerNumber, comments, userId });
    res.status(201).json({ newRepair });
})

const getRepairById = catchAsync(async ( req, res ) => {
    const { repair }= req;
    res.status(200).json({ repair });
});

const updateRepairById = catchAsync(async ( req, res ) => {
    const { status } = req.body;
    const { repair } = req;
    await repair.update({ status });
    res.status(200).json({ staus: "success" });
});

const deleteRepairById = catchAsync(async ( req, res ) => {
    const { repair } = req;
    await repair.update({ status: "cancelled" });
    res.status(200).json({ status: "success" });
});

module.exports = { 
    getAllRepairs, 
    createRepair,
    getRepairById,
    updateRepairById,
    deleteRepairById
};