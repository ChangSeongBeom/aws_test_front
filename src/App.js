import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default App;

//import React, {Component} from "react";
// import "./App.css";
// export default class App extends Component{

//   state={
//     todoData : [
//       {
//         id:"1",
//         title : "공부하기",
//         completed:true
//       },
//       {
//         id:"2",
//         title : "청소하기",
//         completed:true
//       },
    
//     ],
//     value:""
//   }
//   btnStyle={
//     color: "#fff",
//     border: "none",
//     pading : "5px 9px",
//     borderRadius : "50%",
//     cursor: "pointer",
//     float : "right"
    
//   }
//   getStyle = () =>{
//     return {
//       padding: "10px",
//       borderBottom : "1px #ccc dotted",
//       textDecorataion: 'none'
//     }
//   }

//   render(){
//     return(
//       <div className="container">
//         <div className="todoBlock">
//           <div className="title">
//             <h1>할일목록</h1>
//             {this.state.todoData.map((data)=>(
//               <div style={this.getStyle()} key={data.id}>
//                 <input type="checkbox"></input>
//                 {data.title}
//                 <button style={this.btnStyle}>x</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
  
// }