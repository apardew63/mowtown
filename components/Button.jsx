export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) {
  const baseClasses = "relative overflow-hidden group flex items-center gap-2 rounded-lg transition-all duration-500";

  const variants = {
    primary: "border-2 border-[#273F2B] text-[#273F2B] hover:text-white",
    secondary: "border-2 border-white text-white hover:text-[#26402B]",
    green: "border-2 border-[#4A9F44] text-[#4A9F44] hover:text-white",
  };

  const sizes = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base",
    large: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
        {children}
        <span className={`p-2 sm:p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 rotate-45 group-hover:rotate-90`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7 7 7M12 3v18"
            />
          </svg>
        </span>
      </span>
      <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></span>
    </button>
  );
}