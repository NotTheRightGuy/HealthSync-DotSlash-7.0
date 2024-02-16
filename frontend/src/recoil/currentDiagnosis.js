import { atom } from "recoil";

const currentDiagnosis = atom({
    key: "currentDiagnosis",
    default: {
        symptoms: [],
        additionalNotes: "",
    },
});

export default currentDiagnosis;
