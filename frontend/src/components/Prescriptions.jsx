import finDocs from "../assets/financial documents.svg";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import useFileUpload from "react-use-file-upload";

export default function Prescriptions() {
    const [prescriptions, setPrescriptions] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidbarVariants = {
        open: { width: "40%", display: "block" },
        closed: { width: "0%" },
    };

    const {
        files,
        fileNames,
        fileTypes,
        totalSize,
        totalSizeInBytes,
        handleDragDropEvent,
        clearAllFiles,
        createFormData,
        setFiles,
        removeFile,
    } = useFileUpload();

    return (
        <div className="mt-32">
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
                        <UploadPrescriptionInput />
                    </>
                ) : (
                    <></>
                )}
            </motion.section>
            {prescriptions === true ? (
                <></>
            ) : (
                <div className="flex flex-col justify-center items-center">
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
                    <div
                        onClick={() => {
                            setSidebarOpen(true);
                        }}
                        className="border-2 mt-4 border-gray-800 rounded-2xl px-12 p-2 text-white opacity-80 hover:cursor-pointer hover:opacity-100"
                    >
                        Upload Prescriptions
                    </div>
                </div>
            )}
        </div>
    );
}

function UploadPrescriptionInput() {
    const {
        files,
        fileNames,
        fileTypes,
        totalSize,
        totalSizeInBytes,
        handleDragDropEvent,
        clearAllFiles,
        createFormData,
        setFiles,
        removeFile,
    } = useFileUpload();
    return (
        <div className="p-10">
            <h1 className="font-white text-3xl font-bricolage font-bold">
                Upload Prescription
            </h1>
            <p className="font-inter opacity-50 text-sm mb-4">
                Upload your prescription here.
            </p>
            <div className="flex flex-col">
                <input
                    type="file"
                    onChange={(e) => {
                        setFiles(e.target.files);
                    }}
                    className="bg-[#0F0F11] border-secondary border-2 rounded-lg h-64 mt-5 px-2 py-2 font-inter text-sm w-full focus:outline-none"
                />

                <button
                    onClick={clearAllFiles}
                    className="bg-secondary  font-bricolage opacity-65 font-bold text-lg py-2 rounded-lg mt-4 w-full hover:bg-[#5f5f6c] transition-colors"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
