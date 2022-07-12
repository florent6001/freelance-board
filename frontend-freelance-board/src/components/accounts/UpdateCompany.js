import Label from "../Label"
import Input from "../Input"
import { H2 } from "@/utilities/typography"
import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/auth"
import SuccessMessage from "../SuccessMessage"
import Button from "../Button"
import Teaxtarea from "../Textarea"
import defaultUser from "../../../public/images/defaultUser.jpg"


const UpdateCompany = () => {

    const { user } = useAuth()
    const [success, setSuccess] = useState()

    const updateCompany = () => {
        console.log('clicked')
    }

    useState(() => {
        setSuccess('test de success')
    }, [user])

    return (
        <form onSubmit={updateCompany}>
            <div className="md:flex mt-10">
                <div className="w-full">
                    <H2 className="mb-5">Informations de votre entreprise</H2>
                    <div className="w-full md:flex md:mt-5">
                        <div className="md:w-1/3 w-full">
                            <Label htmlFor="logo">Logo de ma société :</Label>
                            <img src={defaultUser.src} className="w-full rounded" />

                            <input className=" mt-5 form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-gray-200 bg-clip-padding rounded transition ease-in-out h-10 m-0 dark:bg-gray-700 dark:text-white" type="file" id="logo" />
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 text-center">
                                Fichiers supportés : PNG, JPG, JPEG
                            </p>

                        </div>
                        <div className="w-full">
                            <div className="w-full md:flex">
                                <div className="w-full md:mx-5 my-3 md:my-0 mt-5">
                                    <Label htmlFor="company_name">Dénomination social (nom de l'entreprise)</Label>
                                    <Input className="w-full" id="company_name" />
                                </div>
                                <div className="w-full md:mx-5 my-3 md:my-0 mt-5">
                                    <Label htmlFor="siret">Numéro de SIRET</Label>
                                    <Input type="text" className="w-full" id="siret" />
                                </div>
                            </div>
                            <div className="w-full md:flex md:mt-5">
                                <div className="w-full md:mx-5 my-3 md:my-0 mt-5">
                                    <Label htmlFor="adress">Adresse</Label>
                                    <Teaxtarea className="w-full" rows="5" id="adress" />
                                </div>
                            </div>
                            <SuccessMessage className="md:mx-5" message={success} />
                            <Button type="submit" className="mt-10 md:mx-5">Enregistrer les informations de mon entreprise</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default UpdateCompany;