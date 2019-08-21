import React,{Component} from 'react';
import {Row, Col, Card, Switch } from 'antd';
import Breadcrumb from '../components/Breadcrumb';
import '../style/lib/animate.css'

export default class Animations extends Component{
    state={
        animated:false,
        animatedOne:-1
    }
    // 所有动画
    animatedAll=(checked)=>{
        checked && this.setState({animated:true});
        !checked && this.setState({animated:false});
    }
    //单个动画
    animatedOne=(i)=>{
        this.setState({animatedOne:i});
    }
    // 单个结束
    animatedOneOver=()=>{
        this.setState({animatedOne:-1});
    }
    render(){
        // 动画名称数组
        const animations=[ 'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
        'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
        'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
        'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
        'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
        'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
        'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
        'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
        'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
        'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
        'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
    ]
        return(
            <div>
                <Breadcrumb first='用户' second='动画'/>
                <h2><b>结合Animate.css &nbsp;-&nbsp;遍历所有动画</b></h2>
                <Row>
                    <span>
                        <span>全部动画</span>
                        <Switch onChange={this.animatedAll}></Switch>
                    </span>
                </Row>
                <Row gutter={20}>
                    {animations.map((k,i)=>(
                        <Col md={6} key={i} >
                            <div>
                            <Card className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''} ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${k}`}
                                onMouseEnter={()=>this.animatedOne(i)}
                                onMouseLeave={()=>this.animatedOneOver()}
                                style={{marginBottom:10,marginTop:10,borderRadius:5}}
                            >
                                <div>{k}</div>
                            </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}