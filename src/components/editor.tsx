'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function MyEditor () {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      
      onInit={(editor: any) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event: any, editor: { getData: () => any }) => {
        const data = editor.getData()
        console.log({ event, editor, data })
      }}

    
    />
  ) : (
    <div>Editor loading</div>
  )
}