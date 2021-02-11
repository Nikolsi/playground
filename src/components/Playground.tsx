import * as React from 'react'
import { SplitView } from './workspace/SplitView'
import { Editor } from './workspace/editor/Editor'
import { Preview } from './workspace/Preview'

export const Playground = () => {
  return (
    <div id='playground-container' className='wrapper' style={{ backgroundColor: 'yellow' }}>
      <SplitView>
        <Editor />
        <Preview />
      </SplitView>
    </div>
  )
}
