export function Post (props) {
    return (        
        <p>
            <strong>{props.author}</strong><br />
            <span>{props.content}</span>
        </p>
    )
}

// Default exports vs Named exports