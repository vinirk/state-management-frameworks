import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

import { profileAtom } from '_state';

export { profileActions };

function profileActions() {
    const setProfile = useSetRecoilState(profileAtom);

    return {
        update
    }


    function update(params) {
        console.log(params)
    }

}