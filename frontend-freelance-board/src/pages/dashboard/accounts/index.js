import { H1 } from "@/utilities/typography";
import AppLayout from "@/components/Layouts/AppLayout";
import DeleteAccount from "@/components/accounts/DeleteAccount";
import UpdateAccount from "@/components/accounts/UpdateAccount";
import UpdateCompany from "@/components/accounts/UpdateCompany";

const Accounts = () => {

    return (
        <>
            <AppLayout title="Information de mon compte">
                <div className="container">
                    <H1>Paramètres de mon compte</H1>
                    <UpdateAccount />
                    <UpdateCompany />
                    <DeleteAccount />
                </div>
            </AppLayout>
        </>
    )

}

export default Accounts;