export default function SuccessModal({ type, onClose }) {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="bg-white border border-gray-300 p-6 rounded-xl max-w-sm w-full mx-4">
                <h3 className="text-xl font-bold mb-4">
                    {type === 'signup' ? 'Registration Successful!' : 'Login Successful!'}
                </h3>
                <p className="mb-6">
                    {type === 'signup'
                        ? 'Your account has been created successfully.'
                        : 'You have successfully logged in.'}
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
