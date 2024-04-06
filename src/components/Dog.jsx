import React from 'react'

const Dog = ({ data }) => {
    return (
        <div className={`dog ${data.dogNumber}`}>
            <div className="dog-inner">
                <img src={data.dogImg} alt="dog" />
                <div className="dog-detail-section">
                    <div className="dog-dots">
                        <div className="dots-inner"></div>
                    </div>
                    <div className="dog-detail">
                        <div className="dog-detail-inner">
                            <div className="detail-dog-img">
                                <img src={data.dogImg2} alt="img" />
                            </div>
                            <div className="dog-name">
                                <h2>{data.
                                    rank}<span>{data.dogName}</span></h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dog
