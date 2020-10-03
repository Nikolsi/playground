import React from 'react'
import { editor } from 'monaco-editor'
import { ResizeComponentHandler } from './ResizeObserver'

export type MonacoStandaloneCodeEditor = editor.IStandaloneCodeEditor

export const Editor = () => {
    const [rendered, setRendered] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const editorRef = React.useRef<MonacoStandaloneCodeEditor>()

    React.useEffect(() => {
        const isRendered = !!containerRef.current
        setRendered(isRendered)
    }, [])

    React.useEffect(() => {
        if (rendered) {
            editorRef.current = editor.create(containerRef.current!)
        }
    }, [rendered])

    const onEditorResizeCallback = React.useCallback(() => {
        editorRef.current!.layout()
    }, [rendered])

    return (
        <div ref={containerRef} id='editor-container' className='editor'>
            {rendered && <ResizeComponentHandler target={containerRef.current!} onResize={onEditorResizeCallback} />}
        </div>
    )
}
