import React from 'react'; 
import './Todo.css'

const Todo = props => {
    return (
        <div className='Todo'>
        <div className={`text ${props.done && 'done'}`} onClick={props.clicked}> 
            {props.title}
        </div>
        {props.done && <div className='done-mark'>&#x2713;</div>} </div>
    ); 
}

// class based declaration
// class Todo extends Component{
//     render(){
//         this.props;
//     }
// }
export default Todo;