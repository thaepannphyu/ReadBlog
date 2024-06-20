import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from 'prop-types';
const ContentEditor = ({content,setContent}) => {
    
  const editorRef = useRef(null);

 const contentTransferHandler=()=>{
  setContent(editorRef.current.getContent());
 }

  //editorRef.current.getContent()
  return (
    <Editor
           onChange={()=>contentTransferHandler()}
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey="your-license-key"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={content?content:"<p>This is the initial content of the editor.</p>"}
            init={{
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
  )
}

export default ContentEditor 
ContentEditor.propTypes = {
  content: PropTypes.string,
  setContent:PropTypes.func
};