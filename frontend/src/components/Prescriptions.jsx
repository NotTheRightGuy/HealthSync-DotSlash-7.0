import finDocs from "../assets/financial documents.png";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdAdd } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

// Filepond
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Components
import PrescriptionCard from "./PrescriptionCard";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Prescriptions() {
    const [prescriptions, setPrescriptions] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await fetch(
                "http://ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/prescription/get-all",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );

            const response = await rawData.json();
            setPrescriptions(response);
        };

        fetchData();
    }, []);

    const sidbarVariants = {
        open: { width: "30%", display: "block" },
        closed: { width: "0%" },
    };

    return (
        <div>
            <ToastContainer />
            <motion.section
                id="sidebar"
                className="h-screen border-secondary border-l-2 bg-[#0F0F11] absolute top-0 right-0 z-50"
                initial={false}
                animate={sidebarOpen ? "open" : "closed"}
                variants={sidbarVariants}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
            >
                {sidebarOpen ? (
                    <>
                        <IoClose
                            className="absolute right-4 top-4 text-3xl cursor-pointer"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <FileUploadComponent />
                    </>
                ) : (
                    <>
                        <button
                            className="absolute right-8 bottom-8 bg-secondary font-bricolage font-bold p-4 rounded-full"
                            onClick={() => {
                                setSidebarOpen(true);
                            }}
                        >
                            <MdAdd className="text-white text-3xl" />
                        </button>
                    </>
                )}
            </motion.section>
            {prescriptions.length !== 0 ? (
                <div className="p-10">
                    {prescriptions.map((prescription, index) => {
                        return (
                            <PrescriptionCard
                                key={index}
                                name={prescription.prescriptionName}
                                url={prescription.prescriptionURL}
                                description={
                                    prescription.prescriptionDescription
                                }
                                date={prescription.prescriptionDate}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mt-32">
                    <div className="flex w-full gap-10 justify-center">
                        <div className="flex flex-col items-center w-1/6">
                            <div>
                                <img className="h-64" src={finDocs} alt="" />
                            </div>
                            <div className="opacity-50 font-bricolage text-xs">
                                Keep all your prescriptions at one place
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const FileUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const prescriptionNameRef = useRef(null);
    const prescriptionDescriptionRef = useRef(null);
    const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const CLOUDINARY_URL =
        "https://api.cloudinary.com/v1_1/dhpnvzdyl/image/upload";
    const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile[0].file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            formData.append("api_key", CLOUDINARY_API_KEY);

            fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then(async (data) => {
                    const imageUrl = data.secure_url;
                    const prescriptionName = prescriptionNameRef.current.value;
                    const prescriptionDescription =
                        prescriptionDescriptionRef.current.value;

                    const rawData = await fetch(
                        "http://ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/prescription/upload",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: localStorage.getItem("token"),
                            },
                            body: JSON.stringify({
                                prescriptionURL: imageUrl,
                                prescriptionName: prescriptionName,
                                prescriptionDescription:
                                    prescriptionDescription,
                            }),
                        }
                    );

                    const response = await rawData.json();
                    toast.success("Prescription uploaded successfully", {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Error uploading prescription", {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        } else {
            toast.error("Please select a file to upload", {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="mt-2 flex flex-col p-10">
            <FilePond
                files={selectedFile}
                onupdatefiles={setSelectedFile}
                allowMultiple={false}
                maxFiles={1}
                name="prescription"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <div className="mt-8">
                <p className="text-lg font-bricolage">
                    Give it a memorable name
                </p>
                <input
                    type="text"
                    placeholder="Prescription name"
                    className="bg-secondary outline-none border-0 p-2 rounded-md w-full mt-2"
                    ref={prescriptionNameRef}
                />
                <p className="text-lg font-bricolage mt-8">
                    Add some description
                </p>
                <textarea
                    placeholder="Description"
                    className="bg-secondary outline-none border-0 p-2 rounded-md w-full mt-2 resize-none h-32 font-bricolage"
                    ref={prescriptionDescriptionRef}
                ></textarea>
            </div>
            <button
                onClick={handleUpload}
                className="mt-4 bg-secondary font-bricolage text-white font-bold py-2 px-4 rounded"
            >
                Upload
            </button>
        </div>
    );
};
