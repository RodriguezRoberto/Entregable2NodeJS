const express = require( 'express' );
const { body } = require('express-validator');

const { repairExists } = require('../middlewares/repairs.middlewares');
const { createRepairValidations, checkValidations } = require('../middlewares/validations.middlewares');

const { 
    getAllRepairs, 
    createRepair,
    getRepairById,
    updateRepairById,
    deleteRepairById 
} = require( '../controllers/repairs.controller' );

const router = express.Router();

router.get( '/', getAllRepairs );

router.post( '/', createRepairValidations, checkValidations, createRepair );

router.get( '/:id', repairExists, getRepairById );

router.patch( '/:id', repairExists, updateRepairById );

router.delete( '/:id', repairExists, deleteRepairById );

module.exports = { repairsRouter: router };