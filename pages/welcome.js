import React from 'react'
import Link from 'next/link'

export default function Welcome() {
    return (
        <div>
            <Link href="/github">Github Info</Link>
            <Link href="/nextjs">NextJs getStaticProps</Link>
        </div>
    )
}