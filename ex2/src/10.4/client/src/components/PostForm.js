import { useEffect, useState } from 'react';
import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Mainpage from '../_layer/layout';
import './post.css';

const PostForm = () => {
     const [content, setContent] = useState({
    title:"",
    content:""
  })

   const [viewContent , setViewContent] = useState([]);

     const getValue = e => {
    const {name, value} = e.target;
    console.log(name, value);
    setContent({
      ...content,
      [name]: value
    })
    console.log('안녕하세요');
  };

    return(
        <>  
        
      <div className='form-wrapper'>
        <input className="title-input" 
        type='text' 
        placeholder='제목을 써주세요💙'
        onChange={getValue}
        name='title'
        />
         <CKEditor
          editor={ClassicEditor}
          data="<p> 내용을 입력해주세요🐾</p>"
          onReady={editor => {
             console.log('Editor is ready to use!', editor);
          }}

           onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
             setContent({
              ...content,
              content: data
            })
            console.log(setContent);
          }}

          onBlur={(event, editor) => {
            
          }}
          onFocus={(event, editor) => {
           
          }}
        />
      </div>
      
       <Mainpage>
       </Mainpage>
        </>
    )
}
export default PostForm;