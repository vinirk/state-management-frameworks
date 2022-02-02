import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

import { profileAtom } from '../state';

export { useProfileActions };

function useProfileActions() {
    const setProfile = useSetRecoilState(profileAtom);

    return {
        update
    }


    function update(params) {
        console.log(params)
    }

}