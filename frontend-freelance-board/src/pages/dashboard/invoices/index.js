import AppLayout from "@/components/Layouts/AppLayout";
import { H1 } from "@/utilities/typography"


const Invoices = () => {

    return (
        <AppLayout title="Liste des factures">
            <div className="container">
                <H1 className="mb-10">Liste des factures</H1>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap border-2 dark:border-none">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    10x Developer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>

                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Jolina Angelie</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    Unemployed
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 369.95
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                        <span className="flex items-center col-span-3">
                            Showing 21-30 of 100
                        </span>
                        <span className="col-span-2"></span>
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                            <nav aria-label="Table navigation">
                                <ul className="inline-flex items-center">
                                    <li>
                                        <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                            <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            2
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            3
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            4
                                        </button>
                                    </li>
                                    <li>
                                        <span className="px-3 py-1">...</span>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            8
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            9
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                            <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )

}

export default Invoices;