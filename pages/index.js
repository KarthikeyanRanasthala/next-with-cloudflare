import React from 'react';
import Image from 'next/image';

import imgSrc from '../public/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg';

const normalizeSrc = (src) => {
    return src[0] === "/" ? src.slice(1) : src;
};

const cloudflareLoader = ({ src, width, quality }) => {
    const params = [`width=${width}`];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(",");
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const IndexPage = () => (
    <>
        {/* This will fetch the image at full width and 75% of quality */}
        <div style={{ width: '300px' }}>
            <Image
                loader={cloudflareLoader}
                src={imgSrc}
            />
        </div>
        {/* This will fetch the image at closest preset width to 300px and 75% of quality */}
        <Image
            loader={cloudflareLoader}
            src={imgSrc}
            width={300}
            height={200}
        />
        {/* This will also do the same as above */}
        <Image
            loader={cloudflareLoader}
            src="/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg"
            width={300}
            height={200}
        />
        {/* This will fetch the image according to the viewport width using srcset */}
        <Image
            loader={cloudflareLoader}
            src={imgSrc}
            layout="responsive"
        />
    </>
);

export default IndexPage;