import { faker } from '@faker-js/faker';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Doctors from './models/Doctors.js';


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log("MongoDB error", err));


async function seeDoctors() {

    const dummyDoctors = [];

    for (let i = 0; i < 500; i++) {
        const gender = faker.person.sex() === 'male' ? 'men' : 'women';
        const index = faker.number.int({ min: 0, max: 99 });
        dummyDoctors.push({
            name: faker.person.fullName(),
            category: faker.helpers.arrayElement(["Dentist", "Gynecologist", "General Physician", "Dermatologist", "Ear-nose-throat(ent)Specialist", "Homeopath", "Ayurveda"]),
            experience: `${faker.number.int({ min: 5, max: 40 })} years experience overall`,
            location: faker.location.city(),
            clinic_name: faker.company.name(),
            fees: `Rs.${Math.round(faker.number.int({min: 200, max: 2000}) / 100 ) * 100} Consultation fee at clinic`,
            votes: faker.number.int({ min: 10, max: 1000 }).toString(),
            patient_stories: `${faker.number.int({ min: 5, max: 500 }).toString()} patient stories`,
            profile: `https://randomuser.me/api/portraits/${gender}/${index}.jpg`,
        })
    }
    await Doctors.deleteMany();
    await Doctors.insertMany(dummyDoctors);
    console.log("Doctors data inserted");
    process.exit();
}

seeDoctors();