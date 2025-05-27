export default function InputField({ name, placeholder, value, onChange, error }) {
    return (
        <div>
            <input
                name={name}
                type="text"
                placeholder={placeholder}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:shadow-lg focus:shadow-gray-300"
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-xs text-red-500 ms-1 mt-1">{error}</p>}
        </div>
    );
}
