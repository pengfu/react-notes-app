/**
 * Created by Administrator on 2016/9/22.
 */
import React ,{Component} from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
export default class extends Component{

    constructor(props) {
        super(props);
        this.state = {
            show:'all'
        };
    }

    toggleShow(val){
        this.setState({
            show:val
        })
    }

    updateActiveNote(note){
        store.setActiveNote(note)
    }

    render(){
        let active_all = this.state.show === 'all'?'active':''
        let active_favorites = this.state.show === 'favorites'?'active':''
        let {notes,activeNote} = store
        let filteredNotes = []
        this.state.show === 'all'?filteredNotes = notes:filteredNotes = notes.filter(note => note.favorite)
        let display_notes = filteredNotes.map(note => {
            return (
                <a className={"list-group-item "+ (note == activeNote? "active":"")} href="#" key={note.id} onClick={()=>this.updateActiveNote(note)}>
                    <h4 className="list-group-item-heading">
                        {note.text.trim().substring(0, 30)}
                    </h4>
                </a>
            );
        });

        return(
            <div id="notes-list">

                <div id="list-header">
                    <h2>Notes | pengfoo</h2>
                    <div className="btn-group btn-group-justified" role="group">

                        <div className="btn-group" role="group">
                            <button type="button" className={`${active_all} btn btn-default`} onClick={() => this.toggleShow('all')}>
                                All Notes
                            </button>
                        </div>

                        <div className="btn-group" role="group">
                            <button type="button" className={`${active_favorites} btn btn-default`} onClick={() => this.toggleShow('favorites')}>
                                Favorites
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="list-group">
                        {display_notes}
                    </div>
                </div>
            </div>
        )
    }
}

