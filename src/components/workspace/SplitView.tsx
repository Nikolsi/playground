import React from 'react'
import SplitPane from 'react-split-pane'

interface SplitViewProps {
  children?: React.ReactNode
}

export const SplitView = ({ children }: SplitViewProps) => {
  return (
    <SplitPane className='split-pane-container' split='vertical' defaultSize='50%' primary='first' minSize={200}>
      {children}
    </SplitPane>
  )
}
