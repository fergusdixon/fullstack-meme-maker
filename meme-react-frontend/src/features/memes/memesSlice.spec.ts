import memesReducer, {
  MemesState,
  fetchMemesFromAPI,
} from './memesSlice';

// describe('memes reducer', () => {
//   const initialState: MemesState = {
//     value: 3,
//     status: 'idle',
//   };
//   it('should handle initial state', () => {
//     expect(memesReducer(undefined, { type: 'unknown' })).toEqual({
//       value: 0,
//       status: 'idle',
//     });
//   });
//
//   it('should handle increment', () => {
//     const actual = memesReducer(initialState, increment());
//     expect(actual.value).toEqual(4);
//   });
//
//   it('should handle decrement', () => {
//     const actual = memesReducer(initialState, decrement());
//     expect(actual.value).toEqual(2);
//   });
//
//   it('should handle incrementByAmount', () => {
//     const actual = memesReducer(initialState, incrementByAmount(2));
//     expect(actual.value).toEqual(5);
//   });
// });
