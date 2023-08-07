const express = require('express')
const router = express.Router();
const { getHostelData, PostRoom, createNewHostel, createCustomer, getAllHostelData, createAmenities, getAllAmenities, hostelAmenities } = require('../controllers/hostelController')

//routers
router.get('/', getAllHostelData)

router.post('/postmyRoom', PostRoom)

router.post('/addMyhostel', createNewHostel)

router.post('/customer', createCustomer)

router.post('/createAmenity', createAmenities)

router.post('/postAmenities', hostelAmenities)

router.get('/getAllAmenities', getAllAmenities)

router.get('/:hostelId', getHostelData)


module.exports = router