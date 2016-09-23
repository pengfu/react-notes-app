/**
 * Created by Administrator on 2016/9/22.
 */
import React ,{Component} from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
export default class extends Component{

    editNote(text){
        store.editNote(text)
    }

    render(){
        let {activeNote} = store
        let activeNoteText = activeNote.text
        return(
            <div id="note-editor">
                <textarea className="form-control" value={activeNoteText} onInput={(e) => this.editNote(e.target.value)}>
                </textarea>
            </div>
        )
    }
}