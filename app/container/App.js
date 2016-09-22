import React ,{Component} from 'react'
import Toolbar from '../components/Toolbar'
import  NotesList from '../components/NotesList'
import  Editor from '../components/Editor'

export default class extends Component{

    render(){
        return (
            <div id="app">
                <Toolbar></Toolbar>
                <NotesList></NotesList>
                <Editor></Editor>
            </div>

        )
    }
}
