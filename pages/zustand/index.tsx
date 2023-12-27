import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { count, fontSizeSelector } from "../../recoil";
import { useFontSize } from "../../store/post";

export default function Zustand() {
    const { fontSize, increase, decrease }: any = useFontSize();

    return (
        <div>
            <div>
                <h1>Zustand</h1>
            </div>
            <div>
                Current count: {fontSize}
            </div>
            <button onClick={() => { increase(1) }}>
                increment
            </button>
            <button onClick={() => { decrease(1) }}>
                decrement
            </button>
            <button onClick={() => { }}>
                reset
            </button>
        </div>
    )
}
