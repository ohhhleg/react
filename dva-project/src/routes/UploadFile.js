import React from 'react'
import { Upload, Icon, message } from 'antd';
import Breadcrumb from '../components/Breadcrumb'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class UploadFile extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div>
                <Breadcrumb first='文件' second='上传' />
                <Upload
                    name="avatar"//发到后台的文件参数名
                    listType="picture-card"//上传列表的内建样式
                    className="avatar-uploader"
                    showUploadList={false}//是否展示文件列表, 可设为一个对象
                    action="//jsonplaceholder.typicode.com/posts/"//上传的地址,这里用了虚拟json服务器
                    beforeUpload={beforeUpload}//上传文件之前的钩子，参数为上传的文件
                    onChange={this.handleChange}//上传文件改变时的状态
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
        )
    }
}
