import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import axios from "@/lib/axios";
import { useState } from "react";
import { useEffect } from "react";
import FieldErrors from "../FieldErrors";
import { H2 } from "@/utilities/typography";
import SuccessMessage from "../SuccessMessage";
import { useAuth } from "@/hooks/auth";

const UpdateAccount = () => {

    const { user } = useAuth()

    const [updateErrors, setUpdateErrors] = useState([])
    const [success, setSuccess] = useState()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    useEffect(() => {
        setName(user?.name ? user?.name : '')
        setEmail(user?.email ? user?.email : '')
    }, [user])

    const updateAccount = (e) => {
        e.preventDefault();
        setUpdateErrors([]);
        axios.put(`/api/user/${user?.id}`,
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
        <form onSubmit={updateAccount}>
            <div className="md:flex mt-10">
                <div className="w-full">
                    <H2 className="mb-5">Informations d'identité</H2>
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
                    <Button type="submit" className="mt-10">Enregistrer mes informations</Button>
                </div>
            </div>
        </form>
    )

}

export default UpdateAccount;