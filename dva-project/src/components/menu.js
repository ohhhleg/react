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
            url: '/index/case'
        }, {
            key: 4,
            title: 'Problem',
            url: '/index/problem'
        }]
    },
    {
        key: 'sub3',
        title:
            <span>
                <Icon type="file" />
                <span>file</span>
            </span>,
        options: [{
            key: 5,
            title: 'UploadFile',
            url: '/index/uploadfile'
        }, {
            key: 6,
            title: 'Information',
            url: '/index/information'
        },{
            key: 7,
            title: 'Map',
            url: '/index/map'
        }]
    },
]