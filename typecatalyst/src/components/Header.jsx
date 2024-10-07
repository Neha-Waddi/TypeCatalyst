import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
    <div>TypeCatalyst</div>
    <div>
        <Link href={'/signup'} >SignUp</Link>
        <Link href={'/login'}>LogIn</Link>
    </div>
    </div>
  )
}
