const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-full flex-col items-center justify-center px-6 py-24 text-center bg-[#000000] text-white">
            {children}
        </div>
    )
}

export default AuthLayout;