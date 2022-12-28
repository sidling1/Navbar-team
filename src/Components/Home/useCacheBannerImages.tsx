import { useEffect, useState } from 'react';
//aise individually daalna rahega kya ?
const Frames = ["10_Qzj5gWJ03hiJMpyHT_L1Hvji5aMcnI","11sUPQwjQgoki3DDo8CBGjYoXah-dRSL-","14SxaugY_tS1xwuwxejkuj4qMsl1NPvPh","1uL5TrJpe-OBMzhAVXIBGD6WvLjx1UB4j","13uOwK8kGP5Uu7X6u_HgWuIhAwG04vAJ7","1GH9fvhYkty4-Cm0S_uiIit52hF6chETp","1BIs2WIZDWlhrZULkx71N02YQ7ZuDsXnx","1ppk3o8-P8VjwkhfHvrNklXaXfJMJvrC_","1Z4kjdjX2rARb1-uH1FsJ-vgNpOk0Hx-u","1Jbp6Sw47KJP-QZh04r0WTksrKrqICMBA","1KOuypEdMB7ld2oNrhoOyB5zGhLavY0Ds","1C0sSwSoZhcM4zjNLfgAO2wPbYOVaBT5X","1NJsTr-caM_QGJ9JTYFVqtGhy_Ju4efG5","1NapsMcpmnuHQsEDAC3cl9cxzTHZp4kHf","19yTHDksWxWysA3xDcxPJJwn3pfAkLKiw","1bJcEdB5un2iFdi2PLPyS4mUupUG4fb6x","17isbGKTQ_Qd5QfRnedv9j9QHR_aQbLMi","1OTnp4xQJCU3tXZjz5W58fdmefgJzzmRv","19BB2bCCGXgU7jriiIcyrsMDiEFf2_u3a","1lwdbTme4tTO2gwYG3Qe8hXOxOPP-Ccme","1V0jw88h6ggeM0ikthp12-ndG2uXthcSC","1wG1xEUUfpNdGkjfNHOCEJfqgfsQGoUkq","1qkrK6E5t0slLeLbSIhHCpNCCxCPHYI2G","1HYFRVLv4ceQmsAtMBqn6qGwXiLviBA7V","1CDvSk5AFGBApZwriUMGxHGbaC2meCs3i","15VhNmWTKrT6CLRB4jKWGrDxos7-gGFMP","1nEkbEfMjUlr8UsxIGZBhk_k8WSEOHnWQ","1hePDG6G8nTFAUZdxewhk1YGKwVgESxk1","17E8jKI2mwq2RuOq8PgnASU96rP81ARug"];
//const Frames = ["1oltiaWVJg5cho_MHThQzGpNi-ya1Upjg","1Psd4Hd1ExADpMo3DWJF26LIxS-FOhW03","1XkuFOAIAHBUBdXN9y3-wlNIC0mq0BRe0","1jHuHQ5kpkSxncoBurXlCp7p2Ik338Xzu","1jwl8a1R32kWjK7-dh747MFveNp-Gj3Dw","1uEQuGmC5HQRaIuQP8g0tbbDE-x58Mosq","1zkzYg_dxF9G4kAXKjtAF0B0RabvdjnQd","1JUFNR850UfuWuD2kMe_6Q9OLqAzFc4oy","1pyzdc86np7g4643z7fSJ53Twf5J31BlE","1PYFVwqkiZxiqka51SCBukUR9x7LsR8hI","1UDTdQRjRpLxvPCrz05EtRBw0YZuizTV2","1fBs66y6AFOZCy6BQlmSLaJGSAuqXMb6g","1Z-Vf8mmBatSALjpkwF2exxJuJzi9p8mj","117usL4hAt2YGp9NJVB4fRQqKzEf6hobU","1p-bm5ZyeP6vwJkZ5af9OS62sNbEhEQoh","1PMif47RraHowkd_l39zsKW_7cZflYaXV","1q4JSJMK-RmI61jfVBr0BkiQWa1GwczMf","14a5m9IWWHAKx83ygz_Odn3c9xvbF_H33","1slUqk-K2xByWU1k2ULr5Lr16B0HSGYso","1mcp5zSb4dv5usbap54AgeblSfcS_Jeg4","1IGSHEndv_uX0qCB9ScptUBBLc1DO8RUt","1TFoW0mzR4v-7pHyLYvDVj2ui_BfwNkfm","15L_uuGkZSVZx119R4LOXAjLFkwvMeB1M","1kuLh3WogC2ogbCU134g_1_FaXGQVV69p","1OoviSvDpaCg27PxlINGQbEcsFXrOODip","1QYGYCJdqrW_TV1V7NPh6O8zpG5YsncaI","1O2ZskWRQ8azK8YuQMT4SLZBtn0QhkobR","1cschUiThZJnjiAiQ81VRv5H7UqdqS34H","1utoebcEyT-1Cah5Ly-tu3mVQm14Ls2bF"];
const currentFrame = (index) => {
    index = index-1;
    //yaha apne images ka link daalna hai
    return `https://drive.google.com/uc?export=view&id=${Frames[index]}`;
};


const preloadImage = async (index: number, setImages) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const imgSrc = currentFrame(index);
        img.src = imgSrc;
        setImages((prev) => [...prev, imgSrc]);
        //resolve(index);
        img.onload = () => resolve(index);
        img.onerror = () => resolve(index);
        // img.onerror = reject();
    });
};

const useCacheBannerImages = (frameCount: number, totalFrames: number) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const mql = window.matchMedia('(max-width: 800px)').matches;

    const multiplier = totalFrames / frameCount;
    useEffect(() => {
        if (!mql) {
            const cacheImages = async () => {
                const array = new Array(frameCount).fill(undefined);
                const promises = array.map((_, i) => {
                    return preloadImage(i, setImages);
                });

                promises.push(preloadImage(totalFrames, setImages));

                await Promise.all(promises);
                setLoading(false);
            };
            cacheImages();
        }
        {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, []);
    return { images, loading };
};

export default useCacheBannerImages;
