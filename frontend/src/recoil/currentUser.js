import { atom } from "recoil";

const currentUser = atom({
    key: "currentUser",
    default: {
        email: "",
        firstName: "",
        lastName: "",
        age: -1,
        bloodGroup: "",
        role: "",
        address: "",
        phone: "",
        avatarUrl: "",
    },
});

export default currentUser;
