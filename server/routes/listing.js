import express from "express"
import Doctors from "../models/Doctors.js";

const router = express.Router();

// Create new listing
router.post("/", async(req, res) => {
    const doctor = new Doctors({ name: req.body.name });
    await doctor.save();
    res.status(200).json(doctor);   
});

// Get all doctors listing
router.get("/", async(req, res) => {
    const doctors = await Doctors.find();
    res.json(doctors);
})

// add doctors route
router.post("/add-user", async(req, res) => {
    const {
        name, 
        category,
        experience,
        location,
        clinic_name,
        fees,
        votes,
        patient_stories,
        profile
    } = req.body;
    try {
        const newDoctor = await Doctors.create({
            name,
            category,
            experience,
            location,
            clinic_name,
            fees,
            votes,
            patient_stories,
            profile
        });
        res.status(200).json({message: "Doctor added", newDoctor})
    } catch (error) {
        res.status(500).json({message: "Error creating Doctor"});
    }

})

// Edit doctors data
router.put("/:id", async(req, res) => {
    const {id} = req.params;
    const updatedData = req.body;

    try {
        const updatedDoctor = await Doctors.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        });
        if(!updatedDoctor){
            res.status(404).json({message: "Doctor not found"});
        }
        res.status(200).json({message: "Doctor updated"});
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }

})

// Delete doctors data
router.delete("/del-user", async(req, res) => {
    const {name} = req.body;
    try {
        const deletedDoctor = await Doctors.findOneAndDelete({ name });
        if(!deletedDoctor){
            return res.status(404).json({message: "Doctor not found"});
        }
        return res.status(200).json({message:"Doctor deleted"});
    } catch (error) {
        return res.status(500).json({message: "Server error"});
    }


})

export default router