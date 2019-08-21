import { Icon } from 'antd';
export default [
    {
        key: 'sub1',
        title:
            <span>
                <Icon type="home" />
                <span>home</span>
            </span>,
        options:[{
            key: 1,
            title: 'home',
            url: '/index/home'
        }]
    },
    {
        key: 'sub2',
        title:
            <span>
                <Icon type="user" />
                <span>user</span>
            </span>,
        options: [{
            key: 2,
            title: 'Animations',
            url: '/index/animation'
        }, {
            key: 3,
            title: 'Case',
            url: '/index/Case'
        }, {
            key: 4,
            title: 'user3',
            url: '/index/user3'
        }]
    },
    {
        key: 'sub3',
        title:
            <span>
                <Icon type="video-camera" />
                <span>video-camera</span>
            </span>,
        options: [{
            key: 5,
            title: 'video-camera1',
            url: '/index/video-camera1'
        }, {
            key: 6,
            title: 'video-camera2',
            url: '/index/video-camera2'
        }]
    },
]