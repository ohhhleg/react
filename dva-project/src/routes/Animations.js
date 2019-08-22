import React,{Component} from 'react';
import {Row, Col, Card, Switch } from 'antd';
import request from '../utils/request'
import Breadcrumb from '../components/Breadcrumb';
import '../style/lib/animate.css'

export default class Animations extends Component{
    constructor(props){
        super(props);
        this.state={        
            animated:false,
            animatedOne:-1,
                    // 动画名称数组
                    animations:[]
        }
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
    init = async()=>{
        // console.log(this);
        let data =await request('https://www.easy-mock.com/mock/5d52606ab22d3f6269ad2963/test/animate', {
            method: 'GET',
        })
        // console.log(data.data);
        this.setState({
            animations:data.data
        })
    }
    componentDidMount(){
        this.init()
    }
    
    render(){
      
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
                    {this.state.animations.map((k,i)=>(
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