import React,{Component} from 'react'
import Breadcrumb from '../components/Breadcrumb'
import UserProblem from '../components/UserProblem'
export default class Problem extends Component{
    render(){
        return(
            <div>
            <Breadcrumb first='用户' second='反馈'/>
            <UserProblem/>
            </div>
        )
    }
}
