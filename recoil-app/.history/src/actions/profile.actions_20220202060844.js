import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import { profileAtom } from '../state';

export { useProfileActions };

function useProfileActions() {
    const setProfile = useSetRecoilState(profileAtom);
    const profile = useRecoilValue(profileAtom);

    return {
        update
    }


    function update(params) {
        console.log(params, profile)

        // setProfile({});
    }

}