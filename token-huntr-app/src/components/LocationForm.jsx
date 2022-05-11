// import React, { useReducer } from 'react';
// import LocationReducer from '../store/reducers/LocationReducer';


// const LocationForm = (props) => {
//     console.log(props)
//     return (
//         <div className='local-form'>
//             <h2>Add a New Geocache</h2>
//             <h4>Fill out form below!</h4>
//             <form onSubmit={props.handleSubmit}>
//                 <ul>
//                     <ul>
//                         <label>Latitude:</label>
//                         <input type='text'
//                             placeholder={'Latitude'}
//                             name='newLocation'
//                             // value={props.newLocation.latitude}
//                             onChange={props.handleChange}
//                         />
//                     </ul>
//                     <ul>
//                         <label>Longitude:</label>
//                         <input type='text'
//                             placeholder={'Longitude'}
//                             name='newLocation'
//                             value={props.newLocation.longitude}
//                             onChange={props.handleChange}
//                         />
//                     </ul>
//                     <ul>
//                         <label>Level:</label>
//                         <input type='text'
//                             placeholder={'Level'}
//                             name='newLocation'
//                             value={props.newLocation.level}
//                             onChange={props.handleChange}
//                         />
//                     </ul>
//                     <button type='submit' onClick={props.handleSubmit}>
//                         Add Cache
//                     </button>
//                 </ul>
//             </form>
//         </div>
//     )
// }

// export default LocationForm