import React, { useState } from 'react';
import {Card, notification} from 'antd';

const FileUpload = ({onChange}) => {

    const [previewFileUrl, setPreviewFileUrl] = useState(null);

    const onChangeFile = async (e) => {
        let file = e.target.files[0]
        console.log("file: ", file);
        if(!file.type.includes('audio') && !file.type.includes('video')){
            notification.error({message: 'Phải chọn file media'});
        }else{
            console.log(file);
            let reader = new FileReader();
            await reader.readAsDataURL(file);
            reader.onloadend = () => {
                console.log(reader.result);
                setPreviewFileUrl({ url: reader.result })
                onChange(file);
            };
        }
        
    }


    return ( 
        <Card title="Tải lên file mp3 hoặc video" bordered={false} style={{ width: 300 }}>
            
            {
                previewFileUrl ? 
                <video autoBuffer="autobuffer" autoPlay="autoplay" width="240" height="240"
                 controls src={previewFileUrl.url}/>
                : <p>chưa chọn file nào!</p>
            }
            <label className="custom-file-upload">
                    <input type="file" onChange={onChangeFile}/>
                    Chọn file nhạc
                </label>
        </Card>);
}
 
export default FileUpload;