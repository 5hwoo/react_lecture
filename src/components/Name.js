import React from 'react'

// function Name(props) {
//     console.log('props : ', props);
//     return (
//         <div>
//             {props.displayName}
//         </div>
//     );
// }

// Name.defaultProps = {
//     displayName: '홍길동'
// }

// class Name extends React.Component {
//     static defaultProps = {
//         displayName: '홍길동ㅋ',
//     }
//     render () {
//         return (
//             <div>
//                 {this.props.displayName}
//             </div>
//         );
//     }
// }

function Name (props) {
    return (
        <div>
            {props.displayName}
        </div>
    ); 
}


export default Name;