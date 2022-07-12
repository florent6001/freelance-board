const FieldErrors = ({ errors = [] }) => {

    return (
        <>
            {errors.length > 0 &&
                <div className="mt-3 text-red-500">
                    {errors.map(error => (
                        <span className="block">{error}</span>
                    ))
                    }
                </div >
            }
        </>
    )
}

export default FieldErrors
