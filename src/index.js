//import area
//import something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an class Component
class Myclass extends Component{
    //1.Property

    state = {}
    
    //2.Constructor
    constructor(props){
        super(props);
        this.state = { isLoggedIn: true };
    }

    //3.Method
    //Every method must have render method
    render(){
        //Every render method always return HTML
        //lets create a local variable
        let {isLoggedIn} = this.state;
        return(
            <div>
                <h1>Conditional Rendering</h1>
                {
                    //immediately-invoked function expression
                    //(function(){})()
                    (function(){
                        if(isLoggedIn){
                            //True
                            return <button>Logged Out</button>
                        }else{
                            //False
                            return <button>isLogged In</button>
                        }
                    })()
                }
            </div>
        );
    }
}

//object.method();
ReactDOM.render(<Myclass />,document.getElementById('root'));//actual argument