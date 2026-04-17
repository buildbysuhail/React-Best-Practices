import React from "react";

export function Dialog({ children }) {
    return (
        <div style={{ border: "2px solid gray", padding: 10, borderRadius: 8 }}>
            {children}
        </div>
    )
}

// export class Dialog extends React.Component {
//   render() {
//     return (
//       <div className="dialog">
//         <h1>{this.props.title}</h1>
//         <p>{this.props.message}</p>
//         {this.props.children}
//       </div>
//     );
//   }  
// }

// export class WelcomeDialog extends React.Component {
//   render() {
//     return (
//       <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
//         <button onClick={() => alert("Welcome aboard!")}>Close</button>
//       </Dialog>
//     );
//   }  
// }