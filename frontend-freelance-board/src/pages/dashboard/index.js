import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import { H1, H2 } from "../../utilities/typography"

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <AppLayout title="Tableau de bord">
            <div className="container">
                <H1>Ravi de te revoir, {user?.name.split(' ')[0]} !</H1>
                <H2 className="text-xl mt-2 mb-10">Voici quelques statistiques qui pourrait t'intéresser...</H2>

                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <div className="transition duration-1000 flex items-center border-2 dark:border-none p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Nombre total de clients
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                6389
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-1000 flex items-center border-2 dark:border-none p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Devis en attente
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                376
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-1000 flex items-center border-2 dark:border-none p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Factures en attente de paiement
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                35
                            </p>
                        </div>
                    </div>


                    <div className="transition duration-1000 flex items-center border-2 dark:border-none p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                        <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Montant des factures accepté <br /> (30 derniers jours)
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                46,760.89 €
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
