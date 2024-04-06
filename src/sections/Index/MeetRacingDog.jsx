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

import wif from '../../assets/images/dogs/wif_1.png';
import shiba from '../../assets/images/dogs/shiba_2.png';
import floki from '../../assets/images/dogs/floki_3.png';
import doge from '../../assets/images/dogs/doge_4.png';
import bonk from '../../assets/images/dogs/bonk_5.png';
import myro from '../../assets/images/dogs/myro_6.png';

const DogData = [
    {
        dogNumber: 'dog4',
        dogImg: Dog4,
        dogImg2: wif,
        rank: '1',
        dogName: 'Wif',
        description: 'Dog with hat is a recent dog meme that has established itself as a top dog token.',    
    },
    {
        dogNumber: 'dog1',
        dogImg: Dog1,
        dogImg2: shiba,
        rank: '2',
        dogName: 'Shiba',
        description: 'Made it wave in 2021 and still growing hard as the top dog token after doge.',
    },
    {
        dogNumber: 'dog5',
        dogImg: Dog5,
        dogImg2: floki,
        rank: '3',
        dogName: 'Floki',
        description: 'Stated as a meme token and now creating a whole ecosystem that is being fueled by dog token.',
    },
    {
        dogNumber: 'dog2',
        dogImg: Dog2,
        dogImg2: doge,
        rank: '4',
        dogName: 'Doge',
        description: "Elon's favorite dog token is on top as number 1 dog token",
    },
    {
        dogNumber: 'dog6',
        dogImg: Dog6,
        dogImg2: bonk,
        rank: '5',
        dogName: 'Bonk',
        description: 'The first dog token on solana to make wave and reach 1b market cap.',
    },
    {
        dogNumber: 'dog3',
        dogImg: Dog3,
        dogImg2: myro,
        rank: '6',
        dogName: 'Myro',
        description: 'Solana founder dog token also made it to metadog race.',
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