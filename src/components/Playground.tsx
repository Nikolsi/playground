import * as React from 'react'
import { Editor } from './workspace/editor/Editor'

export const Playground = (): JSX.Element => {
    return (
        <div id='playground-container' className='wrapper' style={{ backgroundColor: 'yellow' }}>
            <Editor />
        </div>
    )
}
