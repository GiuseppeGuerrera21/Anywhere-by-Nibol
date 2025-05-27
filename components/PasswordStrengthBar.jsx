export default function PasswordStrengthBar({ strength, feedback }) {
    const getColor = () =>
        strength < 60 ? 'bg-primary' : strength < 90 ? 'bg-yellow-500' : 'bg-green-500';

    return (
        <div className="flex items-center gap-4">
            <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${getColor()}`} style={{ width: `${strength}%` }}></div>
            </div>
            <p className="text-xs text-gray-600 whitespace-nowrap">{feedback}</p>
        </div>
    );
}
