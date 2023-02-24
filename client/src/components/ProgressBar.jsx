const ProgressBar = ({progress}) => {

    return (
        <div className="outer-bar">
            <div 
                className="inner-bar"
                style={{ width: `${progress}%`, backgroundColor: 'rgb(141, 181, 145)' }}
            ></div>
        </div>
    )
}

export default ProgressBar
