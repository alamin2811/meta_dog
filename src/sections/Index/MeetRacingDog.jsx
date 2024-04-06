import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Dog from '../../components/Dog'
//import dogs image
import Dog1 from '../../assets/images/dogs/shiba.png';
import Dog2 from '../../assets/images/dogs/doge.png';
import Dog3 from '../../assets/images/dogs/myro.png';
import Dog4 from '../../assets/images/dogs/wif.png';
import Dog5 from '../../assets/images/dogs/floki.png';
import Dog6 from '../../assets/images/dogs/bonk.png';

import rankDog1 from '../../assets/images/dogs/floki1.png';

const DogData = [
    {
        dogNumber: 'dog1',
        dogImg: Dog1,
        dogImg2: Dog1,
        rank: '1',
        dogName: 'Shiba',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
    {
        dogNumber: 'dog2',
        dogImg: Dog2,
        dogImg2: Dog2,
        rank: '2',
        dogName: 'Doge',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
    {
        dogNumber: 'dog3',
        dogImg: Dog3,
        dogImg2: Dog3,
        rank: '3',
        dogName: 'Myro',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
    {
        dogNumber: 'dog4',
        dogImg: Dog4,
        dogImg2: Dog4,
        rank: '4',
        dogName: 'Wif',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
    {
        dogNumber: 'dog5',
        dogImg: Dog5,
        dogImg2: rankDog1,
        rank: '5',
        dogName: 'Floki',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
    {
        dogNumber: 'dog6',
        dogImg: Dog6,
        dogImg2: Dog6,
        rank: '6',
        dogName: 'Bonk',
        description: 'Stated as a meme token and now creating a whole ecosystem that is been fuelled by dog token.',
    },
]

const MeetRacingDog = () => {
    return (
        <div className='meet-racing-dog-section'>
            <div className="overlay">
                <SectionTitle
                    titlePosition="text-center" title="Meet our" subtitle="Racing Dogs"
                />
                <div className="race-section">
                    <div className="race-dogs">
                        {DogData.map((info) => {
                            return (
                                <Dog data={info} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetRacingDog