import React from 'react'

const SectionTitle = ( props ) => {
    return(
        <div className="col-12">
            <div className="section-title">
                <h2>{props.sectitle}</h2>
            </div>
        </div>
    )
}

export default SectionTitle;