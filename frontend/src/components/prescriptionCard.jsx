import { TfiDownload } from "react-icons/tfi";
export default function PrescriptionCard(props){
    return(
        <div>
            <div >
                {
                    // <img src={props.prescription.image} alt="" />
                    <img src="https://www.researchgate.net/publication/345830022/figure/fig4/AS:957640029003789@1605330583881/Sample-prescription-used-as-input-to-the-GUI-developed-in-the-present-work.png" className="h-72 w-56" alt="" />
                }
            </div>
            <div>
                <div className="flex justify-between items-center px-1">
                    <p className="text-lg font-semibold">Father's Prescription</p>
                    <div className="hover:cursor-pointer hover:bg-[#666967] h-8 w-8 rounded-full flex justify-center items-center">
                        <TfiDownload></TfiDownload>
                    </div>
                </div>
                <p className="text-sm font-medium opacity-70 px-1">
                    Notes
                </p>
            </div>
        </div>
    )
}