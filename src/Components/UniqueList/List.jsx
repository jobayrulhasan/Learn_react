import React from 'react'
import { use } from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id : uuidv4(),
        title: "todo1",
        desc: "todo1 desc"
    },
    {
        id : uuidv4(),
         title: "todo2",
        desc: "todo2 desc"
    },
    {
        id : uuidv4(),
        title: "todo3",
        desc: "todo3 desc"
    },
    {
        id : uuidv4(),
        title: "todo4",
        desc: "todo4 desc"
    }
]

//Nested mapping
const users = [
  {
    fullName : "Mr. Hanif",
    designation : "Developer",
    phones : [
      {home: '01750908523'},
      {office : '5588995'}
    ]
  },
  {
    fullName : "Mr. Sharif",
    designation : "HR and Admin",
    phones : [
      {home: '01843432092'},
      {office : '0099693'}
    ]
  }
]
//show only mapping
// function List() {
//   return (
//     <div>
//         {todos.map((todo)=>{
//           const {id, title,desc} = todo;
//           return <div key={id}>
//            <h3>{title}</h3>
//            <p>{desc}</p>
//           </div>
//         })}
//     </div>
//   )
// }

//show nested mapping
function NestedListShow() {
  return (
    // <div>
    //   <h1>Nested list show</h1>{
    //     users.map((user, index)=>
    //     <article key={index}>
    //       <h3>Full Name: {user.fullName}</h3>
    //       <p>Designation: {user.designation}</p>
    //       {
    //         // user.phones.map((phone, index)=> <div key={index}>
    //         //   <p>Home phone number : {phone.home}</p>
    //         //   <p>Office phone number : {phone.office}</p>
    //         // </div>)
    //         user.phones.map((phone, index)=> 
    //         <div key={index}>
    //           <p>Home: {phone.home}</p>
    //           <p>Office: {phone.office}</p>
    //         </div>)
    //       }
    //     </article>)
    //   }
    // </div>

    <div>
      <h1>Nested Lists</h1>
      {users.map((user, index)=>(   
        <article key={index}>
       <h3>{user.fullName}</h3>
       <p>{user.designation}</p>

       {
        user.phones.map((phone, index)=>
        <div>
          <p>Home:{phone.home}</p>
          <p>Home office:{phone.office}</p>
        </div>)
       }
      </article>
    ))}
    </div>
  )
}




export default NestedListShow;
  

