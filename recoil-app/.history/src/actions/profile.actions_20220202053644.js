import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

import { authAtom, usersAtom, userAtom, profileAtom } from '_state';

export { profileActions };

function profileActions() {
    const setProfile = useSetRecoilState(profileAtom);

    return {
        update
    }


    function update(id, params) {
        console.log(id, params)
    }

}