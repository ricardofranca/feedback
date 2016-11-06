const initialState = () => {
  return {
    owner: {
      photo: '',
      name: '',
    },
    description: '',
    inviteds: [],
  };
}

export default (state = initialState(), {type, payload } ) => {

  if (type === 'FEEDBACKS_CREATE_SUCCESS') {
    return payload;
  }

 return state;
}
