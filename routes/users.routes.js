const express = require( 'express' );
const { body } = require('express-validator');

const { userExists } = require('../middlewares/users.middlewares');
const { createUserValidations, checkValidations } = require('../middlewares/validations.middlewares');

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUserbyId,
    deleteUserById
} = require( '../controllers/users.controller' );

const router = express.Router();

router.get( '/', getAllUsers );

router.post( '/', createUserValidations, checkValidations, createUser );

router.get( '/:id', userExists, getUserById );

router.patch( '/:id', userExists, updateUserbyId );

router.delete( '/:id', userExists, deleteUserById );

module.exports = { usersRouter: router };