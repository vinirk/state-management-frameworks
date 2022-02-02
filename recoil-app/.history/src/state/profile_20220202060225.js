import { atom } from 'recoil';

const profileAtom = atom({
    key: 'profile',
    default: { username: 'default', fetching: false, message: '' }
});

export {
    profileAtom
};