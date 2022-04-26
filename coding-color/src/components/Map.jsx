const ColorQuote = (props) => {
    console.log(props.words)
    return (
        <li className="quote-style" id={props.words}>
            <p>{props.words}</p>
        </li>
        
    )
}

export default ColorQuote