import Input from "@/components/Input";
import Label from "@/components/Label";
import AppLayout from "@/components/Layouts/AppLayout";
import { H1 } from "@/utilities/typography";
import { useState } from "react";

const Create = () => {

    const [clientType, setClientType] = useState(false);

    return (
        <AppLayout title="Ajouter un client">
            <div className="container">
                <H1 className="mb-10">Créer un nouveaux client</H1>

                <form>
                    {/* Type de client */}
                    <div className="flex mb-10">
                        <div>
                            <label htmlFor="particulier">
                                <input type="radio" className="hidden peer" id="particulier" value="particulier" name="client_type" />
                                <div className="mr-10 flex items-center bg-gray-300 dark:bg-gray-700 dark:text-white px-10 py-5 rounded cursor-pointer dark:peer-checked:border-white peer-checked:border-gray-700 peer-checked:border-2 dark:peer-checked:border" onClick={() => setClientType('particulier')}><svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                    <div>
                                        <span className="text-2xl font-bold">Particulier</span> <br />
                                        <span className="text-sm">Client sans société</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="societe">
                                <input type="radio" className="hidden peer" id="societe" value="societe" name="client_type" />
                                <div className="mr-10 flex items-center bg-gray-300 dark:bg-gray-700 dark:text-white px-10 py-5 rounded cursor-pointer dark:peer-checked:border-white peer-checked:border-gray-700 peer-checked:border-2 dark:peer-checked:border" onClick={() => setClientType('societe')}>
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                    </svg>
                                    <div>
                                        <span className="text-2xl font-bold">Entreprise</span> <br />
                                        <span className="text-sm">Client avec société</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    {clientType &&
                        <div>
                            {clientType == 'particulier' ?
                                <div className="flex">
                                    <div className="w-full md:mx-2">
                                        <Label>Prénom</Label>
                                        <Input className="w-full" />
                                    </div>
                                    <div className="w-full md:mx-2">
                                        <Label>Prénom</Label>
                                        <Input className="w-full" />
                                    </div>
                                </div>
                                :
                                <div>
                                    Professionnal
                                </div>
                            }
                        </div>
                    }
                </form>
            </div>
        </AppLayout>
    )

}

export default Create;