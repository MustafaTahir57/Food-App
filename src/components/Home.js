import React from 'react'
import UserClass from './userClass'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {

        const interval = setInterval(() => {
            console.log("I am running")
        }, 1000)

        return () => {
            console.log("I just stopped")
            clearInterval(interval);
        }

    }, [])
    return (
        <div>
            This is me from Home
        </div>
    )
}

export default Home;

// class HomeClass extends React.Component {
//     constructor(props) {
//         console.log("Parent Constructor")
//         super(props)
//         this.state = {
//             count: 4
//         }

//     }

//     componentDidMount() {
//         console.log("Parent Comp Did Mount")
//     }
//     render() {
//         console.log("Parent render")
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={() => {
//                     this.setState({count: this.state.count + 1} )

//               }}>Click Me</button>
//                 This is me from Home
//                 My name is { this.props.name } <br/>
//                 <UserClass message={"I am Childern"} number={1} />
//                 <UserClass message={"I am Childern"} number={2}/>
//                 <UserClass message={"I am Childern"} number={3}/>
//                 <UserClass message={"I am Childern"} number={4}/>
//             </div >
//         )
//     }
// }

