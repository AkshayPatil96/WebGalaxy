
import React from 'react'
import { Nav } from 'react-bootstrap'

export const Layout = () => {
  return (
    <>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Link className="ml-5" href="#action1"> <img width='25px' src="https://cdn-icons-png.flaticon.com/512/2258/2258864.png" alt="" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#action2"> <img width='25px'  src="https://cdn-icons-png.flaticon.com/512/3837/3837442.png" alt="" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#" disabled>
           <img width='25px' src="https://cdn-icons.flaticon.com/png/512/3261/premium/3261308.png?token=exp=1659006093~hmac=d7370ba8a3fc74a680dc3d20b9bc0653" alt="" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
      </>
  )
}
