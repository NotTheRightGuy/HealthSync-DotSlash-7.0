import PatientDashboardNavbar from "../components/patientDashboardNavbar"

export default function DoctorDashboardArticles(){
    return(
        <div>
            <PatientDashboardNavbar
                links={[
                    {name: "Patients", path: "/doctorDashboard/patients"},
                    {name: "Articles", path: "/doctorDashboard/articles"},
                ]}
                currPage = "Articles"
            />
        </div>
    )
}