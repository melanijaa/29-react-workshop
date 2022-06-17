const Pokemon = (props) => {
    return (
        <li>
            {props.vardas} <a href={props.urlas}> daugiau info apie {props.vardas}</a>
        </li>
    );
};

export default Pokemon;