import { useRecoilState } from 'recoil';

import { profileAtom } from '../state';

export { useProfileActions };

function useProfileActions() {
    const [profile, setProfile] = useRecoilState(profileAtom);

    return {
        update
    }

    function update(username) {
        setProfile({ ...profile, fetching: true });
        setTimeout(() => {
            setProfile({ ...profile, username, fetching: false, message: "Username updated." });
        }, 1000)
    }

}