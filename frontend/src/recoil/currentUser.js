import { atom } from "recoil";

const currentUser = atom({
    key: "currentUser",
    default: {
        _id: "65b4ce944058cc9457be3e38",
        firstName: "Janmejay",
        lastName: "Chatterjee",
        age: 20,
        bloodGroup: "O+",
        role: "patient",
        address: "C-606, Tirupati Aakurti Greenz",
        phone: 9016589044,
        email: "janmejaychatterjee@gmail.com",
        prior_chronic_diseases: [],
        __v: 0,
    },
});

export default currentUser;
