import { atom } from 'recoil';

const profileAtom = atom({
    key: 'profile',
    default: { username: '', fetching: false, message: '' }
});

export {
    profileAtom
};