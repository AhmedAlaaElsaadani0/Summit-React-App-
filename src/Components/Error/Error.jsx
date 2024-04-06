import React from 'react'
import { Link } from 'react-router-dom'
import img from './Error.png'

export default function Error() {
  return (
    <>
    <section
    className="ErrorSection vh-100  d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "lightblue" }}
  >
    <div
      className="w-50  rounded shadow rounded-5 d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "50%", backgroundColor: "white" }}
    >
      <img src={img} alt="Error Images" className="w-75" />
      <h3 className="fs-1">Woops</h3>
      <p className="text-center fs-2">Something went wrong :(</p>
      <p className="text-center">
        We catch the problem and we Will fix it so soon
      </p>
      <Link
        className="rounded bg-info text-decoration-none text-white py-2 px-3 "
        to="/"
        style={{ cursor: "pointer" }}
      >
        Go Back to Home
      </Link>
    </div>
  </section>
</>

  )
}
