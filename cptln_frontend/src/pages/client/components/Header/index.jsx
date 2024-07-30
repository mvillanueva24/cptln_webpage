export const Header = (props) => {
    return(
        <>
            <header className={`${props.color} w-full max-[500px]:h-auto max-md:pt-[120px] max-md:pb-[50px] max-[600px]:h-[300px] max-md:h-[350px] md:h-[400px] md:pt-[160px] md:pb-[80px]  flex flex-col justify-center items-center gap-5`}>
                <h2 className="text-white max-[500px]:text-[1.625em] max-md:text-[2.1875em] max-lg:text-[2.5em] max-[1110px]:text-[2.8125em] min-[1110px]:text-[3.125em] font-bold leading-[1.2em]">{props.title}</h2>
                {props.text && <p className="text-white text-xl font-bold text-center">{props.text}</p>}
                
            </header>
        </>
    )
}

export default Header;