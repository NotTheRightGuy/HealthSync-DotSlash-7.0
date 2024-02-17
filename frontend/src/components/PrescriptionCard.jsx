const PrescriptionCard = ({ name, url, description, date }) => {
    const formattedDate = new Date(date).toDateString();

    return (
        <div className="p-4 w-fit border-secondary border-2 bg-[#0f0f11] rounded-md">
            <div>
                <div className="w-full h-48">
                    <img
                        src={url}
                        alt="prescription"
                        className="rounded-md h-full w-full object-fill"
                    />
                </div>
                <div className="text-3xl font-medium font-bricolage mt-4">
                    {name}
                </div>
                <div className="text-sm font-medium mt-2 opacity-50">
                    {description}
                </div>
                <div className="text-sm font-medium opacity-50">
                    Uploaded on {formattedDate}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="w-full bg-secondary px-4 py-2 rounded-md font-bricolage font-bold mt-4"
                    onClick={() => {
                        window.open(url);
                    }}
                >
                    Download
                </button>
            </div>
        </div>
    );
};

export default PrescriptionCard;
