import { atom } from "recoil";

const currentDiagnosis = atom({
    key: "currentDiagnosis",
    default: {
        symptoms: [],
        prescription: [],
        additionalNotes: "",
    },
});

export default currentDiagnosis;
