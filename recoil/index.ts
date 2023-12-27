import { atom, selector } from "recoil";


export const count = atom({
    key: 'count1',
    default: 10
})

export const fontSizeSelector = selector({
    key: 'count-selector',
    get: ({ get }) => {
        const new_count = get(count);
        return new_count * 2;
    }
})