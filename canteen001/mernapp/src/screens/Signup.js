import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {


    //    const handleSumit = async()=>{}
    //     e.preventDefault();
    //     const response = fetch("")





  return (
    <>
    <div className='container'>


      <form  >
  <div className="mb-3">
    <label for="name" className='form-label'>Name</label>
    <input type="email" className="form-control"/>
    
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>>
</form>

</div>
    </>
  )
}
