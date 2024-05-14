'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import UserCard from '../components/UserCard'

const Client = () => {

    const {data: session} = useSession({
        required:true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })
  return (
    <section>

        <UserCard user={session?.user} pagetype={"Client"} />
        
    </section>
  )
}

export default Client