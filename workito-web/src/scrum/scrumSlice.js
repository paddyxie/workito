import {createSlice} from '@reduxjs/toolkit'

const tickets = [
  {
    id: 1,
    group: 'good',
    description: 'This is just a test description'
  },
  {
    id: 2,
    group: 'good',
    description: 'This is a good feedback'
  },
  {
    id: 3,
    group: 'good',
    description: 'This is a good feedback'
  },
  {
    id: 4,
    group: 'good',
    description: 'This is a good feedback'
  },
  {
    id: 5,
    group: 'improve',
    description: 'Content want to say'
  }
];

export const scrumSlice = createSlice({
  name: 'scrum',
  initialState: {
    tickets
  },
  reducers: {
    move: (state, action) => {
      let ts = state.tickets.map(ticket=> {
        if(ticket.id === action.payload.id) {
          return {...ticket, group: action.payload.group}
        }
        return ticket;
      })
      return {tickets: ts};
    }
  }
})

export const {move} = scrumSlice.actions

export default scrumSlice.reducer