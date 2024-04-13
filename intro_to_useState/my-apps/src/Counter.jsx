import React from "react"
import './App.css';

class Counter extends React.Component {

// react componets have two things we can use. State and Set state.  
// this will be accessible by using this (KEYWORD). 
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            name: 'Mike'
        }
        // some times you may need to add this inorder to use it, binding is a must somethimes. 
        this.increment = this.increment.bind(this);
    }    

    increment = () => {
        // this.state.clicks++;    /*this is not good to modify state directly, its update is not good to update directly rather create another variable*/

        const clicks = this.state.clicks;
        const newclicks = clicks + 1;
        this.setState({
            clicks: newclicks
        })
    }

    decrement = () => {
            // this.state.clicks++;    /*this is not good to modify state directly, its update is not good to update directly rather create another variable*/
    
            const clicks = this.state.clicks;
            const newclicks = clicks - 1;
            this.setState({
                clicks: newclicks
            })

    }


    render() {
        return (
            <div>
                <div>
                    Hello {this.state.name}

                </div>
                <div>
                    {this.state.clicks}  
                </div>
                <div>
                    <button 
                    onClick={(this.increment)}
                    > 
                    
                    +
                    
                    </button>
                
                </div>
                <div>
                    <button 
                    onClick={(this.decrement)}
                    > 
                    
                    -
                    
                    </button>
                
                </div>
            </div>
        )
    }

}

export default Counter;