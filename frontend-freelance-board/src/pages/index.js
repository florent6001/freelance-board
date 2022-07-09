import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'

export default function Home() {
    const { user } = useAuth()

    return (
        <GuestLayout>
            <div className="container">
                Test
            </div>
        </GuestLayout>
    )
}
