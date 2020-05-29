import React from 'react';

import '../Hero_Infos/Hero_Infos.css'

const Hero_Infos = () => {
    return (
        <div className="hero_infos">
            <div className="block-with-info">
                <h3>The Information about hero</h3>
                <div className="info_list">
                    <ul>
                        <li className="mass">
                            <p>Mass</p>
                            <p>2000</p>
                        </li>
                        <li className="home">
                            <p>Home World</p>
                            <p>Venera</p>
                        </li>
                        <li className="gender">
                            <p>Gender</p>
                            <p>male</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Hero_Infos;