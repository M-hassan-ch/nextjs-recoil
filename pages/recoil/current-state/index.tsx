import React from 'react'
import { useRecoilValue } from 'recoil'
import { count } from '../../../recoil'

export default function CurrentState() {
    const fontSize = useRecoilValue(count);
  return (
    <div>
        font-size: {fontSize}
    </div>
  )
}
