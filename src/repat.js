// import React, {useState} from 'react'
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])
//     const getBageClasses = () => {
//         let classes = 'badge m-2 ';
//         classes += count === 0 ? 'bg-warning' : 'bg-primary';
//         return classes;
//     }
//
//     const formatCount = () => {
//         return count===0 ? 'empty':count;
//     }
//
//     const handleIncrement = () => {
//       setCount((prevState) => prevState + 1);
//     }
//
//     const handleDecrement = () => {
//         setCount(prevState => prevState - 1);
//     }
//     const handleTagChange = (id) => {
//         setTags((prevState) => prevState.filter(tag => tag !== id))
//     }
//     const renderTags = () => {
//         //if(tags.length === 0) return 'No tags';
//       return tags.length === 0 ? 'No tags': tags.map(tag =>
//           <li key={tag}
//               className='btn btn-primary btn-sm m-2'
//               onClick={(e) => handleTagChange(tag)}>
//               {tag}
//           </li>)
//     }
//     if(tags.length !== 0) {
//         return <ul>
//             {renderTags()}
//         </ul>
//     }
//     return(
//      <>
//          <span className={getBageClasses()}>{formatCount()}</span>
//          <button
//              className='btn btn-primary btn-sm m-2'
//              onClick={handleIncrement}
//          >+</button>
//          <button
//              className='btn btn-primary btn-sm m-2'
//              onClick={handleDecrement}
//          >-</button>
//      </>
//  )
// }
// export default Counter;


////////****************************///////////////////////////
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [tags, setTags] =  useState(['tag1', 'tag2', 'tag3']);
//
//     //  const x = <h1>empty</h1>;
//     const formatCount = () => {
//         return count === 0? 'empty' : count;
//     }
//     // const img = 'https://img4.goodfon.ru/wallpaper/nbig/2/87/leto-trava-babochka-oboi-na-rabochii-stol.jpg'
//     const getBadgeClasses = () => {
//         let classes = 'badge m-2 ';
//         classes += count === 0 ? 'bg-warning' : 'bg-primary';
//         return classes;
//     }
//     const handleIncrement = () => {
//         setCount((prevState) => prevState +1);
//     }
//     const handleDecrement = () => {
//         setCount((prevState) => prevState -1);
//     }
//
//     const handleTagChange = (id) => {
//         // setTags(['tag4', 'tag5']);
//         setTags(prevState => prevState.filter(tag => tag!==id))
//
//     }
//     const renderTags = () => {
//         // if(tags.length === 0) return 'No tags';
//         return (
//             tags.length !== 0  && tags.map((tag) =>
//                 <li key={tag}
//                     className='btn btn-primary btn-sm m-2'
//                     onClick={(e) => handleTagChange(tag)}>
//                     {tag}
//                 </li>)
//         )
//
//     }
//     if (tags.length !==0) {
//         return <ul>{renderTags()}</ul>
//     }
//     return (
//         <>
//             {/*<ul>*/}
//             {/*    {renderTags()}*/}
//             {/*</ul>*/}
//             {/*<img src={img} alt='img'/>*/}
//             <span className={getBadgeClasses()}>{formatCount()}</span>
//             <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
//             <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>-</button>
//         </>
//     )
// }
// export default Counter;
///////////////////////************************////////////

// const Counter = () => {
//     const [count, setCount] = useState(0);
//
//
//     const formatCount = () => {
//        return count===0? 'empty': count
//     }
//
//     const getBageClases = () => {
//         let classes = 'badge m-2 ';
//         classes += count===0? 'bg-warning': 'bg-primary';
//         return classes;
//     }
//
//     const handleIncrement = () => {
//         setCount((prevState) => prevState + 1);
//     }
//
//     const handleDecrement = () => {
//         setCount((prevState) => prevState  - 1);
//     }
//
//     return(
//         <>
//             {/*<ul>*/}
//             {/*    {renderTags()}*/}
//             {/*</ul>*/}
//             <span className={getBageClases()}>{formatCount()}</span>
//             <button
//                 className='btn btn-primary btn-sm m-2'
//                 onClick={handleIncrement}
//             >
//                 +
//             </button>
//             <button
//                 className='btn btn-primary btn-sm m-2'
//                 onClick={handleDecrement}
//             >
//                 -
//             </button>
//         </>
//     )
// }
// export default Counter;