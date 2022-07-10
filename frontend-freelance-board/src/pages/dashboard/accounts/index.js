import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import AppLayout from "@/components/Layouts/AppLayout";
import ConfirmationBox from "@/components/ConfirmationBox";
import { P, H1, H2 } from "@/utilities/typography";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Accounts = () => {

    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { user, logout } = useAuth()

    const deleteAccount = () => {
        axios
            .delete('/api/user/delete')
            .then(res => {
                if (res.data == 1) {
                    toast.success('Votre compte a bien été supprimé. Déconnexion en cours...', {
                        duration: 5000
                    })
                    setTimeout(() => {
                        router.push('/')
                    }, 5000)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <AppLayout title="Information de mon compte">
                <div className="container">
                    <H1>Informations de mon compte</H1>
                    <H2 className="mt-10 mb-5">Informations d'identité</H2>
                    <div className="md:flex mt-10">
                        <div className="w-full">
                            <div className="w-full md:flex">
                                <div className="w-full md:mx-5 my-3 md:my-0">
                                    <Label htmlFor="last_name">Nom complet</Label>
                                    <Input className="w-full" id="last_name" value={user?.name} />
                                </div>
                                <div className="w-full md:mx-5 my-3 md:my-0">
                                    <Label htmlFor="email">Adresse email</Label>
                                    <Input className="w-full" type="email" id="email" value={user?.email} />
                                </div>
                            </div>
                            <div className="w-full md:flex md:mt-5">
                                <div className="w-full md:mx-5 my-3 md:my-0">
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input className="w-full" id="password" type="password" />
                                </div>
                                <div className="w-full md:mx-5 my-3 md:my-0">
                                    <Label htmlFor="password_confirm">Confirmation du mot de passe</Label>
                                    <Input className="w-full" id="password_confirm" type="password" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <H2 className="mt-10 mb-5">Supprimer mon compte</H2>
                    <P>
                        Vous souhaitez nous quitter ? Nous en sommes navré, pour clôturer votre compte définitivement, vous pouvez cliquez sur le bouton ci-dessous. Si vous souhaitez réutiliser Freelance-Board à l'avenir, vous devriez recréer un compte. <br /><br />
                    </P>
                    <a href="#" className="inline-flex items-center px-4 py-2 bg-red-800 dark:bg-red-500 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest  hover:bg-gray-700 active:bg-red-800 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 mt-5" onClick={() => setModalIsOpen(true)}>
                        Clôturer mon compte
                    </a>
                </div>
            </AppLayout>
            {modalIsOpen &&
                <ConfirmationBox title="Êtes-vous sûr de vouloir supprimer votre compte ?">
                    <P className="mt-5">
                        <strong className="uppercase">Attention :</strong> Si vous supprimez votre compte, toutes les informations liées à votre compte (factures, devis ainsi que clients) seront supprimés et irrécupérable.
                    </P>
                    <div className="float-right pt-5">
                        <Button className="mr-2" onClick={() => setModalIsOpen(false)}>Annuler</Button>
                        <button className="inline-flex items-center px-4 py-2 bg-red-800 dark:bg-red-500 border border-transparent rounded-md font-bold text-sm text-white uppercase tracking-widest  hover:bg-gray-700 active:bg-red-800 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 mt-5" onClick={deleteAccount}>Valider</button>
                    </div>
                </ConfirmationBox>
            }
        </>
    )

}

export default Accounts;