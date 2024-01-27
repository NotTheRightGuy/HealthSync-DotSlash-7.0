const DiagnosisForm = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <main className="w-[90vw] h-[90vh] bg-[#0F0F11] border-secondary border-2 rounded-lg p-5">
                <section>
                    <h1 className="font-white text-3xl font-bricolage font-bold">
                        Describe your symptoms
                    </h1>
                    <p className="font-inter opacity-50">
                        Select from the drop down that best describe your
                        current condition.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default DiagnosisForm;
