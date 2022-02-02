import { atom } from 'recoil';

const profileAtom = atom({
    key: 'profile',
    default: null
});

export { 
    profileAtom
};