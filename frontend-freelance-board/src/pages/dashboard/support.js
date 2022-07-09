import { H1 } from "@/utilities/typography"
import AppLayout from "@/components/Layouts/AppLayout"
import Button from "@/components/Button";

const Support = () => {

    return (
        <AppLayout title="Contacter le support">
            <div className="container">
                <H1>Demande de support</H1>
                <p className="my-5 dark:text-gray-100">
                    Vous avez un problème avec Freelance-Board, une suggestion d'amélioration ? <br />
                    Remplissez la zone de texte ci-dessous afin de nous transmettre votre message, nous vous répondrons dans les plus brefs délais.
                </p>
                <textarea className="w-full dark:bg-gray-700 bg-gray-100 rounded-md my-5" rows={10}></textarea>
                <Button className={"float-right"}>Envoyer la demande de support</Button>
            </div>
        </AppLayout>
    )

}

export default Support;