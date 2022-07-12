import { useAuth, logout } from '@/hooks/auth'
import Link from 'next/link'
import { useState } from 'react'
import useDarkMode from '@/hooks/useDarkMode'
import { useRouter } from 'next/router'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast';

const AppLayout = ({ title = 'Espace membre', children }) => {
    const { logout, user } = useAuth({ middleware: 'auth' })

    const router = useRouter();
    const [accountMenuIsOpen, setAccountMenuIsOpen] = useState(false);
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();


    return (
        <>
            <Head>
                <title>{title} - Freelance Board</title>
            </Head>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition duration-1000">
                <aside className={`transition duration-1000 z-20 md:block w-64 overflow-y-auto border-r dark:border-none bg-white dark:bg-gray-800 flex-shrink-0 md:mt-0 ${navbarIsOpen ? 'fixed inset-y-0 mt-16 md:relative' : 'hidden'}`}>
                    <div className="py-4 text-gray-500 dark:text-gray-400">
                        <Link href="/">
                            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
                                Freelance-Board
                            </a>
                        </Link>
                        <ul className="mt-6">
                            <li className="relative px-6 py-3">
                                {router.pathname === '/dashboard' &&
                                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                                }
                                <Link href="/dashboard">
                                    <a className={`inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname === '/dashboard' ? 'text-gray-800 dark:text-white' : ''}`}>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>
                                        <span className="ml-4">Tableau de bord</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative px-6 py-3">
                                {router.pathname.startsWith('/dashboard/customers') &&
                                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                                }
                                <Link href="/dashboard/customers">
                                    <a className={`inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname.startsWith('/dashboard/customers') ? 'text-gray-800 dark:text-white' : ''}`}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
                                                fill="currentColor"
                                            />
                                            <path d="M22 11H16V13H22V11Z" fill="currentColor" />
                                            <path d="M16 15H22V17H16V15Z" fill="currentColor" />
                                            <path d="M22 7H16V9H22V7Z" fill="currentColor" />
                                        </svg>

                                        <span className="ml-4">Clients</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative px-6 py-3">
                                {router.pathname.startsWith('/dashboard/quotations') &&
                                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                                }
                                <Link href="/dashboard/quotations">
                                    <a className={`inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname.startsWith('/dashboard/quotations') ? 'text-gray-800 dark:text-white' : ''}`}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="ml-4">Devis</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="relative px-6 py-3">
                                {router.pathname.startsWith('/dashboard/invoices') &&
                                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                                }
                                <Link href="/dashboard/invoices">
                                    <a className={`inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200 ${router.pathname.startsWith('/dashboard/invoices') ? 'text-gray-800 dark:text-white' : ''}`}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 18H17V16H7V18Z" fill="currentColor" />
                                            <path d="M17 14H7V12H17V14Z" fill="currentColor" />
                                            <path d="M7 10H11V8H7V10Z" fill="currentColor" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="ml-4">Factures</span>
                                    </a>
                                </Link>
                            </li>
                            <div className="px-6 my-6">
                                <Link href="/dashboard/support">
                                    <a className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        Contacter le support
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.2607 21.9966C12.174 21.9988 12.0871 22 12 22C11.9128 22 11.8259 21.9988 11.7393 21.9966C7.68318 21.8928 4.22762 19.3738 2.7573 15.8242C1.74192 13.3674 1.7476 10.588 2.77433 8.13481C3.27688 6.93672 4.00599 5.85718 4.90808 4.94979L4.94983 4.90804C5.85259 4.01056 6.92574 3.28429 8.1165 2.78202C10.5894 1.74123 13.3958 1.73933 15.87 2.77633C17.0688 3.27993 18.1488 4.01042 19.0562 4.91407L19.0859 4.94373C19.9989 5.86054 20.7351 6.95351 21.2392 8.16721C21.7279 9.34662 21.9812 10.6006 21.999 11.8573C21.9997 11.9047 22 11.9523 22 12C22 12.0506 21.9996 12.1012 21.9989 12.1516C21.9376 16.2743 19.3814 19.7925 15.7731 21.2637C14.6481 21.7213 13.4566 21.9656 12.2607 21.9966ZM14.0322 15.4464L16.906 18.3202C14.0281 20.5599 9.97192 20.5599 7.09402 18.3202L9.96779 15.4464C11.2175 16.1845 12.7825 16.1845 14.0322 15.4464ZM8.55358 14.0322L5.67981 16.906C3.44007 14.0281 3.44007 9.97192 5.67981 7.09402L8.55358 9.96779C7.81548 11.2175 7.81548 12.7825 8.55358 14.0322ZM10.0824 12.5694C10.0773 12.5523 10.0725 12.5351 10.0679 12.5179C9.97738 12.179 9.97738 11.821 10.0679 11.4821C10.1556 11.1537 10.3282 10.8434 10.5858 10.5858C10.8299 10.3417 11.1213 10.1739 11.4306 10.0824C11.4477 10.0773 11.4649 10.0725 11.4821 10.0679C11.821 9.97738 12.179 9.97737 12.5179 10.0679C12.8463 10.1556 13.1566 10.3282 13.4142 10.5858C13.6583 10.8299 13.8261 11.1213 13.9176 11.4306C13.9227 11.4477 13.9275 11.4649 13.9321 11.4821C14.0226 11.821 14.0226 12.179 13.9321 12.5179C13.8444 12.8462 13.6718 13.1566 13.4142 13.4142C13.1701 13.6583 12.8787 13.8261 12.5694 13.9176C12.5523 13.9227 12.5351 13.9275 12.5179 13.9321C12.179 14.0226 11.821 14.0226 11.4821 13.9321C11.1538 13.8444 10.8434 13.6718 10.5858 13.4142C10.3417 13.1701 10.1739 12.8787 10.0824 12.5694ZM14.0322 8.55357C12.7825 7.81548 11.2175 7.81548 9.96779 8.55357L7.09402 5.6798C9.97192 3.44007 14.0281 3.44007 16.906 5.6798L14.0322 8.55357ZM18.3202 16.906C20.5599 14.0281 20.5599 9.97192 18.3202 7.09402L15.4464 9.96779C16.1845 11.2175 16.1845 12.7825 15.4464 14.0322L18.3202 16.906Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </aside >
                <div className="flex flex-col flex-1">
                    <header className="z-10 py-4 transition duration-1000 bg-white shadow-md dark:bg-gray-800">
                        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                            <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu" onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                                </svg>
                            </button>
                            <div className="flex justify-center flex-1 lg:mr-32">
                                <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                                        </svg>
                                    </div>
                                    <input className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input transition duration-1000" type="text" name="search" placeholder="Rechercher un client (nom, téléphone, email, ..), un numéro de facture / devis..." aria-label="Barre de recherche" />
                                </div>
                            </div>
                            <ul className="flex items-center flex-shrink-0 space-x-6">
                                <li className="flex">
                                    <button className="rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode" onClick={() => setTheme(colorTheme)}>
                                        {colorTheme == 'light' ? (
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                                            </svg>
                                        )}
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account" aria-haspopup="true" onClickCapture={() => setAccountMenuIsOpen(accountMenuIsOpen => !accountMenuIsOpen)}>
                                        {user?.name}
                                    </button>
                                    {accountMenuIsOpen &&
                                        <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700" aria-label="submenu">
                                            <li>
                                                <Link href="/dashboard/accounts">
                                                    <a className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                                        <span>Mon compte</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={logout} className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                                    <span>Se déconnecter</span>
                                                </button>
                                            </li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </header>
                    <main className="h-full pb-16 overflow-y-auto py-12">
                        {children}
                    </main>
                </div>
            </div>
            <Toaster
                position='bottom-right'
            />
        </>
    )
}

export default AppLayout
