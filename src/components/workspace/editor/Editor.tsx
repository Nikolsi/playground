import React from 'react'
import { editor } from 'monaco-editor'

export type MonacoStandaloneCodeEditor = editor.IStandaloneCodeEditor

export const Editor = (): JSX.Element => {
    const [rendered, setRendered] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const editorRef = React.useRef<MonacoStandaloneCodeEditor>()
    React.useEffect(() => {
        const isRendered = !!containerRef.current
        setRendered(isRendered)
    }, [])
    React.useEffect(() => {
        if (rendered) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            editorRef.current = editor.create(containerRef.current!)
        }
    }, [rendered])
    return <div ref={containerRef} id='editor-container' className='editor' />
}
