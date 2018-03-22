import React , {Component} from 'react';

class Create extends Component {
    state = {
        id : 0,
        name : '',
        edit :false,
        delete:false
    }
    onEdit = () => {
        this.setState({edit : false});
    }
    onDelete = () => {
        this.setState({delete : true});
    }
    render(){
        return(
            <div>
                
                <form acion="/create" method="post">
                    <input type="text" name="name" value={this.state.name}/>
                    <button>Create</button>
                </form>                
                <ul> 
                    <li>
                        {this.state.name}
                    </li>                                 
                </ul>         
            </div>
        )
    }
}

export default Create;