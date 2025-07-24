

function Banner(props) {
    return (
        <header className="banner">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    );
}

export default Banner;