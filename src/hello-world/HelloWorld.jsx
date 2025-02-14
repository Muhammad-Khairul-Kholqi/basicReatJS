export default function HelloWorld() {
    return (
        <>
            <HeaderHelloWorld head = "Hello World!" />
            <ParagraphHelloWorld />
        </>
    )
}

export function HeaderHelloWorld({head = "Lupa kasih teks!!"}) {
    return (
        <>
            <h1 style={{
                fontWeight: "bold",
                letterSpacing: "5px"
            }}>{head.toUpperCase()}</h1>
        </>
    )
}

export function ParagraphHelloWorld() {
    const paragraph = "Selamat datang di dunia!";
    const style = {
        color: "blue",
    }
    return (
        <>
            <h1 style={style}>{paragraph}</h1>
        </>
    )
}