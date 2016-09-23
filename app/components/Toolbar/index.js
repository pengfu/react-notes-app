/**
 * Created by Administrator on 2016/9/22.
 */
import React ,{Component} from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
export default class extends Component{

    addNote(){
        store.addNote()
    }

    deleteNote(){
        store.deleteNote()
    }

    toggleFavorite(){
        store.toggleFavorite()
    }

    render(){
        let {activeNote} = store
        return(
            <div id="toolbar">
                <i  className="glyphicon glyphicon-plus" onClick={this.addNote}></i>
                <i  className={"glyphicon glyphicon-star "+(activeNote.favorite?"starred":"")} onClick={this.toggleFavorite}></i>
                <i  className="glyphicon glyphicon-remove" onClick={this.deleteNote}></i>
            </div>
        )
    }
}