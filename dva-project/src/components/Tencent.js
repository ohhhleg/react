import React, { Component } from 'react';
import ReactQMap from 'react-qmap';
import request from '../utils/request'
const getContianer = dom => {
    const middleControl = document.createElement('div');
    middleControl.style.cssText =
        'width: 24px;height: 32px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -8px;margin-top: -24px;';
    middleControl.innerHTML = `<img src="${require('../assets/定位.png')}" style="width: 100%;height: 100%;" />`;
    dom.appendChild(middleControl);
};

export default class Tencent extends Component {


    // componentDidMount() {
    //     // 获取地理位置
    //     console.log('start');

    //     fetch('https://apis.map.qq.com/ws/location/v1/ip?key=UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE', {
    //         method: 'GET',
    //         mode: 'cors',
    //     }).then(res => {
    //         return res.json();
    //     }).then(json => {
    //         console.log('获取的结果', json.data);
    //         return json;
    //     }).catch(err => {
    //         console.log('请求错误', err);
    //     })
    // }

    render() {
        return (
            <ReactQMap
                center={{ latitude: 23.176584, longitude: 113.338126, }}     //初始化的中心位置坐标
                initialOptions={{ zoomControl: true, mapTypeControl: true }}      //初始化地图的参数:zoomControl-缩放控件;mapTypeControl-地图类型控件;
                apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"    //设置地图引用的key
                style={{ height: 580 }}    // 高度和宽度默认占父元素的100%
                mySpot={{ latitude: 23.176584, longitude: 113.338126, }}   //定位坐标
                getContainer={getContianer}     //获取地图的html dom元素的函数，参数是当前地图挂载的元素DOM
            />
        )
    }
}


