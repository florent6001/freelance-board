import Button from "./Button";
import { H1, P } from "@/utilities/typography";

const ConfirmationBox = ({ title, children }) => {

    return (
        <>
            <div className="fixed flex items-center justify-center h-screen w-screen top-0 left-0 mx-auto my-auto z-50 bg-gray-900 opacity-50">
            </div>
            <div className="opacity-100 fixed flex items-center justify-center h-screen w-screen top-0 left-0 mx-auto my-auto z-50">
                <div className="max-w-4xl object-contain bg-contain bg-gray-100 dark:bg-gray-700 px-16 py-10 rounded-md">
                    <H1>{title}</H1>
                    {children}
                </div>
            </div>
        </>
    )

}

export default ConfirmationBox;