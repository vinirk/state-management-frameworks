import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import { profileAtom } from '../state';

export { useProfileActions };

function useProfileActions() {
    // const setProfile = useSetRecoilState(profileAtom);
    // const profile = useRecoilValue(profileAtom);
    const [profile, setProfile] = useRecoilState(profileAtom);

    return {
        update
    }


    function update(username) {
        console.log(profile);
        setProfile({ ...profile, fetching: true });
        setTimeout(() => {
            setProfile({ ...profile, username, fetching: false, message: "Username updated." });
        }, 1000)
    }

}