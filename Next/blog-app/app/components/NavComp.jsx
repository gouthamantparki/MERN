"use client"

import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { UseSessionOptions } from 'next-auth/react'


const NavComp = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    async function initProviders() {
      const allProviders = await getProviders();
      setProviders(allProviders);
    }
    initProviders();
  }, [])

  return (
    <Navbar bg="primary">
        <Container>
          <Link className="btn btn-primary" href="/" style={{fontSize: "22px"}}>BLOG APP</Link>
          <Nav>
            
            {session ? 
            <><Link className="btn btn-primary" href="/post/new">Create Post</Link>
            <Link className="btn btn-primary" href="/profile">Profile</Link>
            <button className="btn btn-primary" onClick={signOut}>Sign Out</button></>
            :
            <>
            {/* <Link className="btn btn-primary" href="/signin">Sign In</Link> */}
            <button className='btn btn-primary' onClick={() => signIn(providers.google.id)}>Sign In</button></>
            }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavComp