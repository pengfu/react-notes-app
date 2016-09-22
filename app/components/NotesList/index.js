/**
 * Created by Administrator on 2016/9/22.
 */
import React ,{Component} from 'react'

export default class extends Component{

    render(){
        return(
            <div id="notes-list">

                <div id="list-header">
                    <h2>Notes | pengfoo</h2>
                    <div className="btn-group btn-group-justified" role="group">

                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default">
                                All Notes
                            </button>
                        </div>

                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default">
                                Favorites
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="list-group">
                        <a  className="list-group-item" href="#">
                            <h4 className="list-group-item-heading">
                                tesrtertetetet
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

