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
        console.log(username, 'username')
        console.log(profile);
        setProfile({ ...profile, fetching: true });
        setTimeout(() => {
            setProfile({ ...profile, username, fetching: false });
        }, 1000)
    }

}