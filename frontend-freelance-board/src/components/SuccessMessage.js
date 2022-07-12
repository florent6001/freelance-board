const SuccessMessage = ({ message, className }) => {
    return (
        <>
            {message &&
                <div className={`${className} bg-green-500 p-5 rounded mt-10 text-white dark:text-gray-800`}>
                    {message}
                </div>
            }
        </>
    )
}

export default SuccessMessage;