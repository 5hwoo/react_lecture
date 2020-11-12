import React from 'react';

// class NameButton extends React.Component {
//     render() {
//         return (
//             <div onClick={this.props.onClickEvent}>
//                 {this.props.name}
//             </div>
//         );
//     }
// }

function NameButton (props) {
    return (
        <div onClick={props.onClickEvent}>
            {props.name}
        </div>
    );   
}

export default NameButton;