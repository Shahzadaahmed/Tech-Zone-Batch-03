// Note: AhmedEditor component...!

import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const ReactQuillWrapper = () => {

    // Note: Handeling states here...!
    const [text, setText] = useState("");

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    // Note:  Handeling mounted hook...!
    useEffect(() => {
        console.log(text);
    }, [text]);

    return (
        <div>
            <h1> Quill React Editor </h1>

            <ReactQuill
                value={text}
                onChange={(value) => setText(value)}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default ReactQuillWrapper;