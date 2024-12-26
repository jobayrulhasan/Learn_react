function MyCard(propos) {
    //receive data using propes
    const {titleText, descriptionText} = propos;
    return(
        <div className='card'>
            <h4 className='cardTitle'>{titleText}</h4>
            <p className='cardDescription'>{descriptionText}</p>
            <h6 className='cardFooter'>Card footer</h6>
        </div>
    )
}

export default MyCard;