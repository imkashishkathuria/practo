import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    category: String,
    experience: String,
    location: String,
    clinic_name: String,
    fees: String,
    votes: String,
    patient_stories: String,
    profile: String,
});
const Doctors = mongoose.model("Doctors", doctorSchema);

export default Doctors