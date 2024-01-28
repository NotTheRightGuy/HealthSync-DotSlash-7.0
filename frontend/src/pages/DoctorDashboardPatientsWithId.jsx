import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboardPatientsWithId = () => {
    const patientID = useParams().id;
    const [patient, setPatient] = useState();

    // url = http://localhost:3000/api/v1/patient/get-patient/:id GET
};

export default DoctorDashboardPatientsWithId;
