import ImageItem from './ImageItem';
function Images(props) {
    let data = props.src;
    console.log(data.src)
    return (
        <div>
            <img src={data.src} alt={data.title} />
        </div>
    )
}

export default Images;