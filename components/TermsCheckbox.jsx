import Link from 'next/link';

export default function TermsCheckbox({ accepted, onChange, error }) {
    return (
        <div className="flex items-start">
            <div className="relative flex items-center h-5">
                <input
                    type="checkbox"
                    id="terms-checkbox"
                    checked={accepted}
                    onChange={onChange}
                    className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 cursor-pointer"
                />
                <svg
                    className="absolute w-4 h-4 left-0 top-0.5 text-white hidden peer-checked:block pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="terms-checkbox" className="ml-2 text-gray-700 text-sm">
                    I agree to the <Link href="#" className="underline hover:text-primary">Terms and Conditions</Link>
                </label>
                {error && <p className="text-xs text-red-500 mt-1 w-full">{error}</p>}
            </div>
        </div>
    );
}
