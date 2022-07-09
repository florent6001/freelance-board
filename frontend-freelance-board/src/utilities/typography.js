const P = ({ className, children }) => {
    return (
        <p className={`${className} text-base text-gray-700 dark:text-gray-200`}>
            {children}
        </p>
    )
}

const H1 = ({ className, children }) => {
    return (
        <h1 className={`${className} text-3xl font-semibold text-gray-700 dark:text-gray-200`}>
            {children}
        </h1>
    )
}

const H2 = ({ className, children }) => {
    return (
        <h2 className={`${className} text-2xl font-semibold text-gray-700 dark:text-gray-200`}>
            {children}
        </h2>
    )
}

export {
    P,
    H1,
    H2
}