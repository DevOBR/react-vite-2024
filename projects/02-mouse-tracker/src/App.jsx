import { useEffect, useState } from 'react'
import './App.css'
import { BntEnableMouseTracker } from './components/enable-mouse-tracker.component'
import { bindEventOn, unBindEventOn } from './logic/events'

function App() {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [enable, setEnable] = useState(false)

  const updateEnable = () => {
    const newEnable = !enable
    setEnable(newEnable)
    const newPointerPosition = { x: 0, y: 0 }
    if (!newEnable) setPointerPosition(newPointerPosition)
  }

  useEffect(() => {
    const handleEvent = (event) => {
      const { clientX, clientY } = event
      const newPointerPosition = {
        ...pointerPosition,
        ...{ x: clientX, y: clientY }
      }
      setPointerPosition(newPointerPosition)
    }

    if (enable) {
      bindEventOn('mousemove', handleEvent)
    }

    return () => {
      unBindEventOn('mousemove', handleEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enable])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(233, 254, 1)',
          border: '1px solid rgb(233, 254, 1)',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`
        }}
      />
      <BntEnableMouseTracker enable={enable} updateEnable={updateEnable} />
    </>
  )
}

export default App
