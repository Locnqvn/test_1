import React, { useState } from 'react';

import { Card, Upload, notification} from 'antd';

import './style.scss';

const ImageUpload = ({onChange, previewUrl}) => {


    const [previewImageUrl, setPreviewImageUrl] = useState(previewUrl)
    console.log(previewUrl);

    const onChangeImage = async (e) => {
        let image = e.target.files[0]
        if(!image.type.includes('image')){
            notification.error({message: 'phải chọn file ảnh'});
        }else{
            let reader = new FileReader();
            await reader.readAsDataURL(image);
            reader.onloadend = () => {
                setPreviewImageUrl({ url: reader.result });
            debugger
                onChange(image);
            };
    
        }

    }
    return (
        <Card title="Tải lên ảnh bìa" bordered={false} style={{ width: 300 }}>
            {
                <div className="image-preview">
                    <img className="img-preview"
                     src={ previewImageUrl 
                        ? previewImageUrl.url
                        : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} alt=""/>
                </div> 
            }
             <label className="custom-file-upload">
                    <input type="file" onChange={onChangeImage}/>
                    Chọn file ảnh
                </label>
        </Card>);
}

export default ImageUpload;