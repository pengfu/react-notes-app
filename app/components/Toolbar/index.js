/**
 * Created by Administrator on 2016/9/22.
 */
import React ,{Component} from 'react'
// import style from '../../style/styles.css'

export default class extends Component{

    render(){
        return(
            <div id="toolbar">
                <i  className="glyphicon glyphicon-plus"></i>
                <i  className="glyphicon glyphicon-star"></i>
                <i  className="glyphicon glyphicon-remove"></i>
            </div>
        )
    }
}