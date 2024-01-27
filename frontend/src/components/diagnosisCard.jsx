import { useEffect,useState } from "react"

export default function DiagnosisCard(props){
    
    const [diagnosis,setDiagnosis] = useState({disease : props.disease, date : props.date, symptoms : props.symptoms, remark : props.remark, severity : props.severity, visit : props.visit})

    const [severityColor, setSeverityColor] = useState("[#66b87d]")
    const [remarkColor, setRemarkColor] = useState("[#f4ea10]")

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
        
        if (diagnosis.visit === "true"){
            setRemarkColor(`red-500`)
        }
        else{
            setRemarkColor(`green-500`)
        }
        console.log(diagnosis.visit, "dfgiv")
        console.log(remarkColor, "dfgiv")

        console.log("severityColor",severityColor)
    }, [props])

    return(
        <div className="bg-[#0f0f11] rounded-3xl w-72 border-[1px] border-[#bfbfbf]">
            <div className="px-5 py-3 flex justify-between text-3xl font-medium h-24">
                {diagnosis.disease}
                <div className={`bg-${severityColor} rounded-full h-10 w-10 `}>

                </div>
            </div>
            <hr className="opacity-50" />
            <div className="px-6 py-3">
                <p className="text-xs font-medium opacity-75 ">Diagnosed on {diagnosis.date}</p>
                <ul className="mt-2 mb-4 text-white">Listed Symptoms</ul>

                {diagnosis.symptoms.map((symptom) => {
                    return(
                        <li className="text-sm opacity-75 px-2" key={symptom}>{symptom}</li>
                    )
                })}

                <p className={"text-xl font-medium mt-10 text-white"}>Doctor's Remark</p>
                <p className={`text-sm `+ `text-`+severityColor}>{diagnosis.remark}</p>
            </div>

        </div>
    )
}