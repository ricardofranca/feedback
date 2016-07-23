import  {
    FEEDBACK_INVITES_INVITE_COMPLETED,
    FEEDBACK_OFFLINE
} from '../api';

export default function middlewareInvite({ getState }) {

    return (dispatch) => (action) => {

        console.log('action original', action);

        let returnValue;

        let offline = !navigator.onLine;
        if( offline &&
            action.type === FEEDBACK_INVITES_INVITE_COMPLETED) {
            returnValue = dispatch({
                type: FEEDBACK_OFFLINE
            });
        } else {
            returnValue = dispatch(action);
        }

        let state = getState();

        console.log('action after dispatch', action, state);

        return returnValue;

    }

}