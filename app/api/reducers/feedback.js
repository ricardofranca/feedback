export default (state = [], {type, payload } ) => {
 return {
     uuid: 1,
     owner: {
       photo: 'https://i.ytimg.com/vi/eOifa1WrOnQ/maxresdefault.jpg',
       id: '',
       name: 'Joaozim',
     },
     description: 'Olar q hase',
     inviteds: [
       {
         id: 1,
         name: "Xiquim",
       },
       {
         id: 1,
         name: "Xiquim",
       },
       {
         id: 1,
         name: "Xiquim",
       },
       {
         id: 1,
         name: "Xiquim",
       },
     ],
     range1: {
       start: '',
       end: '',
     }
 };

}
