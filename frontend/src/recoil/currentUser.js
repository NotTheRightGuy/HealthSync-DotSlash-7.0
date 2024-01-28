import { atom } from "recoil";

const currentUser = atom({
    key: "currentUser",
    default: {
        _id: "",
        firstName: "",
        lastName: "",
    },
});

export default currentUser;
