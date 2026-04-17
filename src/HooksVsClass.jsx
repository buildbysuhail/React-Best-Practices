import React, { useState, useEffect } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

    }, []);
    
    return (
        <div>
            <p>The current count is {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}


class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated");
    }

    render() {
        return (
            <div>
                <p>The current count is {count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        )
    }
}