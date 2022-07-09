const Input = ({ disabled = false, className, type = "text", ...props }) => (
    <input
        disabled={disabled}
        type={type}
        className={`${className} rounded-md shadow-sm border-gray-300 dark:border-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 dark:bg-gray-700 bg-gray-200 text-gray-700 dark:text-gray-200`}
        {...props}
    />
)

export default Input
