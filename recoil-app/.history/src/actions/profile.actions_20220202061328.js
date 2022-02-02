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


    function update(params) {
        setProfile({ ...profile, fetching: true });
        setTimeout(() => {
            setProfile({ ...profile, fetching: false });
        }, 1000)
    }

}