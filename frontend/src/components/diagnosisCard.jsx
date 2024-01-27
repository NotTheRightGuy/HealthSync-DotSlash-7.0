import { useEffect,useState } from "react"

export default function DiagnosisCard(props){
    
    const [diagnosis,setDiagnosis] = useState({disease : props.disease, date : props.date, symptoms : props.symptoms, remark : props.remark, severity : props.severity})

    const [severityColor, setSeverityColor] = useState("[#66b87d]")

    useEffect(() => {
        if (diagnosis.severity === "1"){
            setSeverityColor("[#66b87d]")
        }
        else if (diagnosis.severity === "2"){
            setSeverityColor("yellow")
        }
        else if (diagnosis.severity === "3"){
            setSeverityColor("[#962525]")
        }

        console.log("severityColor",severityColor)
    }, [])

    return(
        <div className="bg-[#0f0f11] rounded-xl">
            <div className="px-5 py-3 flex justify-between text-3xl font-medium">
                {diagnosis.disease}
                <div className={`rounded-full h-10 w-10 bg-${severityColor}`}>

                </div>
            </div>

        </div>
    )
}