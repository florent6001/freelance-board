import axios from "@/lib/axios"
import Button from "../Button"
import { useState } from "react"
import toast from "react-hot-toast"
import ConfirmationBox from "../ConfirmationBox"
import { H2, P } from "@/utilities/typography"
import { useAuth } from "@/hooks/auth"
import { useRouter } from "next/router"

const DeleteAccount = () => {

    const { user } = useAuth()
    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteAccount = () => {
        axios
            .delete(`/api/user/${user?.id}`)
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
            <H2 className="mt-10 mb-5">Supprimer mes informations</H2>
            <P>
                Vous souhaitez nous quitter ? Nous en sommes navré, pour clôturer votre compte définitivement, vous pouvez cliquez sur le bouton ci-dessous. <br />Toutes vos informations seront suppriméees, si vous souhaitez réutiliser Freelance-Board à l'avenir vous devrez recréer un compte.
            </P>
            <a href="#" className="inline-flex items-center px-4 py-2 bg-red-800 dark:bg-red-500 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest  hover:bg-gray-700 active:bg-red-800 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 mt-10" onClick={() => setModalIsOpen(true)}>
                Clôturer mon compte
            </a>

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

export default DeleteAccount;