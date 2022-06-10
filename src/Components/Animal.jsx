import randColor from '../Function/randColor'

function Animal({name, photo}) { //VISADA IS DYDZIOSIOS
    return (
        <>
        <figure>
            <figcaption style={{backgroundColor: randColor()}}>{name}</figcaption>
            <img src={photo} alt={name + '-animal'}></img>
        </figure>
        </>
    )
}
export default Animal