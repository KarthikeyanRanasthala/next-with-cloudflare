import React from 'react';
import Image from 'next/image';

import imgSrc from '../public/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg';

const IndexPage = () => (
    <>
        {/* This will fetch the image at full width and 75% of quality */}
        <div style={{ width: '300px' }}>
            <Image
                src={imgSrc}
            />
        </div>
        {/* This will fetch the image at closest preset width to 300px and 75% of quality */}
        <Image
            src={imgSrc}
            width={300}
            height={200}
        />
        {/* This will also do the same as above */}
        <Image
            src="/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg"
            width={300}
            height={200}
        />
        {/* This will fetch the image according to the viewport width using srcset */}
        <Image
            src={imgSrc}
            layout="responsive"
        />
    </>
);

export default IndexPage;