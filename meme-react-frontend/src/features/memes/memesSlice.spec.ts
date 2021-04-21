import memesReducer, {
    MemesState,
    fetchMemesFromAPI, updateTextFieldValue, chooseMeme,
} from './memesSlice';

describe('memes reducer', () => {
    const initialState: MemesState = {
        baseMemes: [{
            uuid: '0b1b9dc6-4ca4-4045-a113-f3ab83707ee3',
            name: 'Batman Slapping Robin',
            enabled: true,
            text_fields: [
                {
                    value: '',
                    order: 1,
                    width: 0.4,
                    height: 0.2,
                    distance_to_left: 0.1,
                    distance_to_bottom: 0.97,
                    rotation: 0,
                    text_style: 'normal'
                },
            ],
            thumbnail_path: '/api/static/thumbnails/0b1b9dc6-4ca4-4045-a113-f3ab83707ee3.png',
            high_res_path: '/api/static/0b1b9dc6-4ca4-4045-a113-f3ab83707ee3.png'
        }, {
            uuid: '123',
            name: 'Robin Slapping Slapping',
            enabled: true,
            text_fields: [
                {
                    value: '',
                    order: 1,
                    width: 0.4,
                    height: 0.2,
                    distance_to_left: 0.1,
                    distance_to_bottom: 0.97,
                    rotation: 0,
                    text_style: 'normal'
                },
            ],
            thumbnail_path: '/api/static/thumbnails/0b1b9dc6-4ca4-4045-a113-f3ab83707ee3.png',
            high_res_path: '/api/static/0b1b9dc6-4ca4-4045-a113-f3ab83707ee3.png'
        },],
        status: 'idle',
        selectedMemeIndex: 0,
    };
    it('should handle initial state', () => {
        expect(memesReducer(undefined, {type: 'unknown'})).toEqual({
            baseMemes: [],
            status: 'idle',
            selectedMemeIndex: 0
        })
    });

    it('should handle chooseMeme', () => {
        const actual = memesReducer(initialState, chooseMeme(1));
        expect(actual.selectedMemeIndex).toEqual(1);
    });

    it('should handle updateTextFieldValue', () => {
        const actual = memesReducer(initialState, updateTextFieldValue({textFieldIndex: 0, value: "Tester"}));
        expect(actual.baseMemes[0].text_fields[0].value).toEqual("Tester");
    });
});
