import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Layout() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
          <Button>About</Button>
          </Link>
          <Link to="/Contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </nav>
    </>
  )
}
