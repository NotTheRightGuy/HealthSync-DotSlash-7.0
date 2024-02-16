function generateFeedback(diagnosis) {
    const prompt_to_system = `You are an expert doctor with experience in multiple fields. A patient has come to you with the
     following diagnosis: ${diagnosis}. Your job is to provide the patient with the best possible feedback. Mention the
     possible home remedies, the type of doctor they should consult, and the type of tests they should undergo. Once you
     have provided the feedback, provide medicine names and their dosage. Add "00MEDS00" at the end of your feedback and
     provide the medicine names and their dosage. Don't repeat yourself. You can provide maximum of 5 medicines. So your
     reply format must look like this : Feedback: feedback 00MEDS00 Medicine1: dosage Medicine2: dosage Medicine3:`;

    fetch("http://localhost:3928/v1/chat/compeletions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            messages: [
                {
                    role: "system",
                    content: prompt_to_system,
                },
                {
                    role: "user",
                    content:
                        "I am sorry to hear about your diagnosis. I am not a doctor, but I can help you find the best possible feedback.",
                },
            ],
        }),
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
        });
    });
}

generateFeedback("Common Cold");
