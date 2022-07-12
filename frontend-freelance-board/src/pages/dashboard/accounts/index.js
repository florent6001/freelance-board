import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import AppLayout from "@/components/Layouts/AppLayout";
import ConfirmationBox from "@/components/ConfirmationBox";
import { P, H1, H2 } from "@/utilities/typography";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import FieldErrors from "@/components/FieldErrors";
import SuccessMessage from "@/components/SuccessMessage";

const Accounts = () => {

    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { user, logout } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [updateErrors, setUpdateErrors] = useState([])
    const [success, setSuccess] = useState()

    useEffect(() => {
        setName(user?.name ? user?.name : '')
        setEmail(user?.email ? user?.email : '')
    }, [user])

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

    const updateAccount = (e) => {
        e.preventDefault();
        setUpdateErrors([]);
        axios.post('/api/user/update',
            {
                name, email, password, password_confirmation: passwordConfirm
            }
        ).then((res) => {
            setPassword('')
            setPasswordConfirm('')
            setSuccess('Les informations saisies ont bien été enregistrées.')
        }).catch((err) => {
            setUpdateErrors(err.response.data.errors)
        })
    }

    return (
        <>
            <AppLayout title="Information de mon compte">
                <div className="container">
                    <H1>Informations de mon compte</H1>
                    <H2 className="mt-10 mb-5">Informations d'identité</H2>
                    <form onSubmit={updateAccount}>
                        <div className="md:flex mt-10">
                            <div className="w-full">
                                <div className="w-full md:flex">
                                    <div className="w-full md:mx-5 my-3 md:my-0">
                                        <Label htmlFor="name">Nom complet</Label>
                                        <Input className="w-full" required id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                        <FieldErrors errors={updateErrors.name} />
                                    </div>
                                    <div className="w-full md:mx-5 my-3 md:my-0">
                                        <Label htmlFor="email">Adresse email</Label>
                                        <Input className="w-full" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <FieldErrors errors={updateErrors.email} />
                                    </div>
                                </div>
                                <div className="w-full md:flex md:mt-5">
                                    <div className="w-full md:mx-5 my-3 md:my-0">
                                        <Label htmlFor="password">Nouveau mot de passe</Label>
                                        <Input className="w-full" id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                                        <FieldErrors errors={updateErrors.password} />
                                    </div>
                                    <div className="w-full md:mx-5 my-3 md:my-0">
                                        <Label htmlFor="password_confirm">Confirmation du nouveau mot de passe</Label>
                                        <Input className="w-full" id="password_confirm" value={passwordConfirm} type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                                    </div>
                                </div>
                                <SuccessMessage message={success} />
                                <Button type="submit" className="mt-10">Enregistrer les changements</Button>
                            </div>
                        </div>
                    </form>
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