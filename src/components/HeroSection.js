import Customimage from "./CustomImage"
export default function HeroSection(){
    const images =["/img/gallery/img_10.jpeg",
    "/img/gallery/img_2.jpeg","/img/gallery/img_3.jpeg","/img/gallery/img_4.jpeg",
    "/img/gallery/img_5.jpeg","/img/gallery/img_6.jpeg","/img/gallery/img_8.jpeg",
    "/img/gallery/img_7.jpeg","/img/gallery/img_9.jpeg"


    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About?</h1>
                <p className="info">GourmetGuru is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>

            </div>
            <div className="col gallery">
                {
                    images.map((src, index) => (
                        <Customimage key={index} imgSrc={src} pt={"90%"} />
                    ))
                }
                
            </div>
        </div>
    )
}