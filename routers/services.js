const express = require('express')
const router = express.Router()
const Service = require('../models/service')






router.get('/find', async(req,res) =>{
    try {   
        const services = await Service.find()
        res.json(services)
        
    } catch (error) {
        res.status(500).send({ message: "Error: " + error.message });
    }
})


router.get('/find/:id', async (req, res) => {
    try {   
        const service = await Service.findById(req.params.id);
        if (service) {
            res.json(service);
        } else {
            res.status(404).send({ message: "No service found with the given ID." });
        }
        
    } catch (error) {
        res.status(500).send({ message: "Error: " + error.message });
    }
});


router.post('/create', async(req,res) =>{
    const create_service = new Service({
        service_name:req.body.service_name,
        description:req.body.description,
        price:req.body.price
    })

    try {
        const a1 = await create_service.save()
        res.json(a1)
    } catch (error) {
        res.status(500).send({ message: "Error: " + error.message });
    }
})


router.put('/update/:id', async (req, res) => {
    try {
        const updates = req.body; 
        const updatedService = await Service.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true,
        });

        if (updatedService) {
            res.json(updatedService);
        } else {
            res.status(404).send({ message: "No service found with the given ID." }); 
        }
    } catch (error) {
        res.status(400).send({ message: "Error updating service: " + error.message }); 
    }
});


router.delete('/delete/:id', async (req,res) =>{
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (deletedService) {
            res.json({ message: "Service deleted successfully." }); 
        } else {
            res.status(404).send({ message: "No service found with the given ID." }); 
        }
        
    } catch (error) {
        res.status(500).send({ message: "Error: " + error.message });
    }
})




module.exports = router