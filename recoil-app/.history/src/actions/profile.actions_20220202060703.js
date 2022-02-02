import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

import { profileAtom } from '../state';

export { useProfileActions };

function useProfileActions() {
    const setProfile = useSetRecoilState(profileAtom);
    const profile = useRecoilState(profileAtom);

    return {
        update
    }


    function update(params) {
        console.log(params)

        // setProfile({...profile});
    }

}