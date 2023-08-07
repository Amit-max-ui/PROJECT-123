const { Hostels } = require('../models')
const { Amenities } = require('../models')
const { HostelAmenities } = require('../models')
const { Rooms } = require('../models')
const {Guests} = require('../models')

const getHostelData = async (req, res) => {
    const id = req.params.hostelId

    try {
        const HostelInfo = await Hostels.findOne({
            where: { HostelId: id },
            include: [{
                model: Amenities,
                attributes: ['amenityId', 'AmenityName',],
                through: {
                    attributes: []
                },
            },
            {
                model: Rooms,
                attributes: ['RoomId', 'BondMonth', 'RoomNo', 'Rent', 'isReserved', 'floorNo', 'Dimension', 'Occupancy', 'Bathroom', 'Balcony'],
                where: { hostelId: id },
                required: false
            }]
        })
        if (!HostelInfo) {
            return res.status(200).json({ error: "Hostel not found!" })
        }
        //login to sort the results based on the Ascending room no.
        HostelInfo.Rooms.sort((a, b) => a.RoomNo - b.RoomNo);
        res.status(200).json(HostelInfo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const PostRoom = async (req, res) => {
    const data = req.body
    const id = req.params

    try {
        const postData = await Rooms.create(data);
        res.status(200).json(id)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllHostelData = async (req, res) => {
    const listOfHostels = await Hostels.findAll();
    res.status(200).json(listOfHostels)
}

const getAllAmenities = async (req, res) => {
    const listOfAmenity = await Amenities.findAll();
    res.status(200).json(listOfAmenity)
}

const createAmenities = async (req, res) => {
    const AmenityName = req.body
    try {
        const newAmenity = await Amenities.create(AmenityName);
        res.status(200).json(newAmenity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const hostelAmenities = async (req, res) => {
    const data = req.body
    try {
        const newData = await HostelAmenities.create(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const createNewHostel = async (req, res) => {
    const data = req.body;
    try {
        const createHostel = await Hostels.create(data);
        res.status(200).json(createHostel)
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({ error: "Hostel name already exists try with different name" });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
}

const createCustomer = async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        const createGuest = await  Guests.create(data);
        res.status(200).json({mssg: "your data has been created"})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { getHostelData, PostRoom, createNewHostel,createCustomer, getAllHostelData, createAmenities, getAllAmenities, hostelAmenities }