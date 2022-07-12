const SuccessMessage = ({ message }) => {
    return (
        <>
            {message &&
                <div className="bg-green-500 p-5 rounded mt-10 text-white dark:text-gray-800">
                    {message}
                </div>
            }
        </>
    )
}

export default SuccessMessage;