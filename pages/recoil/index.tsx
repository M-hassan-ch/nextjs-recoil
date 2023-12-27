import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { count, fontSizeSelector } from "../../recoil";

export default function Recoil() {

    const [fontSize, setFontSize] = useRecoilState(count);
    const reset = useResetRecoilState(count);
    const newFontSize = useRecoilValue(fontSizeSelector);

    return (
        <div>
            <div>
                Current count: {fontSize}
            </div>
            <div>
                Current selector count: {newFontSize}
            </div>
            <button onClick={() => { setFontSize(fontSize + 1) }}>
                increment
            </button>
            <button onClick={() => { setFontSize(fontSize - 1) }}>
                decrement
            </button>
            <button onClick={reset}>
                reset
            </button>
        </div>
    )
}
