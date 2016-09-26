/**
 * Created by Administrator on 2016/9/23.
 */
import {observable, action } from 'mobx'

class Store {

    @observable notes = []

    @observable activeNote = {}

    @action addNote(){
        const newNote = {
            text: 'New note',
            favorite: false,
            id:new Date().getTime()
        }
        this.notes.push(newNote)
        this.activeNote = newNote
    }

    @action editNote(text){
        this.activeNote.text = text
    }

    @action deleteNote(){

        this.notes.splice(this.notes.findIndex(matchesEl.bind(this)), 1);

        function matchesEl(el) {
            return el == this.activeNote
        }
        this.activeNote = this.notes[0] || {}
    }

    @action toggleFavorite(){
        this.activeNote.favorite = !this.activeNote.favorite
    }

    @action setActiveNote(note){
        this.activeNote = note
    }


}

export default  new Store()
