const Auth1Layout = ({
    children}: {children: React.ReactNode }) => {
    return ( 
        <div className="h-screen flex items-center justify-center  
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-rose-100 to-rose-400">
            {children}
        </div>
     );
}
 
export default Auth1Layout;