import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router';
import ApplicationLogo from '../ApplicationLogo';
import Dropdown from '../Dropdown';
import { DropdownButton } from '../DropdownLink';
import toast, { Toaster } from 'react-hot-toast';

const GuestLayout = ({ title = "Gérez votre entreprise facilement", children }) => {

    const { user, logout } = useAuth()

    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <>
            <Head>
                <title>{title} - Freelance Board</title>
            </Head>
            <nav className="bg-white border-b border-gray-100">
                {/* Primary Navigation Menu */}
                <div className="container mx-auto">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <a>
                                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                                    </a>
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href="/"
                                    active={router.pathname === '/'}>
                                    Accueil
                                </NavLink>
                            </div>
                        </div>

                        {/* Settings Dropdown */}
                        {user?.name ?
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Link href="/dashboard">
                                    <a className="bg-gray-700 text-white p-3 md:mr-5 rounded-md">Accéder au tableau de bord</a>
                                </Link>
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                            <div>{user?.name}</div>

                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>

                                    {/* Authentication */}
                                    <DropdownButton onClick={logout}>
                                        Se déconnecter
                                    </DropdownButton>
                                </Dropdown>
                            </div>
                            :
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="/login"
                                    active={router.pathname === '/login'}>
                                    Se connecter
                                </NavLink>
                                <NavLink href="/register"
                                    active={router.pathname === '/register'}>
                                    Créer un compte
                                </NavLink>
                            </div>
                        }

                        {/* Hamburger */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setOpen(open => !open)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    {open ? (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive Navigation Menu */}
                {
                    open && (
                        <div className="block sm:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                <ResponsiveNavLink
                                    href="/"
                                    active={router.pathname === '/'}>
                                    Accueil
                                </ResponsiveNavLink>
                                {user?.name ?
                                    <ResponsiveNavLink href="/dashboard">
                                        Accéder au tableau de bord
                                    </ResponsiveNavLink>
                                    :
                                    <>
                                        <ResponsiveNavLink
                                            href="/login"
                                            active={router.pathname === '/login'}>
                                            Se connecter
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            href="/register"
                                            active={router.pathname === '/register'}>
                                            S'inscrire
                                        </ResponsiveNavLink>
                                    </>
                                }
                            </div>

                            {user?.name &&

                                <div className="pt-4 pb-1 border-t border-gray-200">
                                    <div className="flex items-center px-8">
                                        <div className="flex-shrink-0">
                                            <svg
                                                className="8 h-10 w-10 fill-current text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="ml-3">
                                            <div className="font-medium text-base text-gray-800">
                                                {user?.name}
                                            </div>
                                            <div className="font-medium text-sm text-gray-500">
                                                {user?.email}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 space-y-1">
                                        {/* Authentication */}
                                        <ResponsiveNavButton onClick={logout}>
                                            Se déconnecter
                                        </ResponsiveNavButton>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                }
            </nav >

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Toaster
                position='bottom-right'
            />
        </>
    )
}

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active
                ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
                }`}>
            {children}
        </a>
    </Link>
)

const ResponsiveNavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`block pl-8 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${active
                ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
                }`}>
            {children}
        </a>
    </Link>
)

export const ResponsiveNavButton = props => (
    <button
        className="block w-full pl-8 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
        {...props}
    />
)

export default GuestLayout
