import React from 'react'
import { useFontSize } from '../../../store/post';

export default function CurrentState() {
    const {fontSize} : any = useFontSize();
  return (
    <div>
        font-size: {fontSize}
    </div>
  )
}
