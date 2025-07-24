import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            //count:0,
            userInfo:{
                name : "DUMMY",
                location : "Default"
            },
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/krishnakant9");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        });
    }

    componentDidUpdate(){
        console.log("component Did Update");
    }

    componentWillUnmount(){
        console.log("Component will Unmount");
    }

    render(){

        //const{count} = this.state;
        const {name,location} = this.state.userInfo;
        return(
            <div className="user-card">
                {/* <h2>Count : {count}</h2>
                /* <h2> Count2 : {this.state.count2}</h2> 
                <button onClick={() =>{
                    this.setState({
                        count : this.state.count +1,
                    });
                } }>Count Increase</button> */ }



                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Conatct : kkrishnakant20@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;