import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const resizeObserver = (onResize: () => void) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new ResizeObserver((_entries, _observer) => {
    // for (const entry of entries) {
    // const { left, top, width, height } = entry.contentRect
    // console.log( 'Element:', entry.target );
    // console.log( `Element's size: ${ width }px x ${ height }px` );
    // console.log( `Element's paddings: ${ top }px ; ${ left }px` );
    // }
    onResize()
  })
}

export interface ResizeComponentHandlerProps {
  target: Element
  onResize: () => void
}

export const ResizeComponentHandler = ({ target, onResize }: ResizeComponentHandlerProps) => {
  const observerRef = React.useRef<ResizeObserver>()
  React.useEffect(() => {
    const observer = resizeObserver(onResize)
    observer.observe(target)
    observerRef.current = observer
    return () => {
      observer.unobserve(target)
      observer.disconnect()
      observerRef.current = undefined
    }
  }, [target, onResize])
  return null
}
