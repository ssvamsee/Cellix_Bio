import { Helmet } from "react-helmet";

const Subbu = () => {
    return(
        <div>
            <Helmet>
                <title>Subbu Apparsundaram | Cellix Bio</title>
                <meta name="description" content="Subbu Apparsundaram"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Mahesh Kandula," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Subbu Apparsundaram</h1>
                    </div>
                </div>
            </div>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.SubbuApparsundaram+(edit).png" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>Subbu Apparsundaram</h1>
                    <h2>CDO & COO</h2>
                    <p>Subbu Apparsundaram is an established scientist with extensive experience in drug discovery and development. Dr. Subbu founded VClinBio that entered into strategic partnership with Cellix Bio. Previously, Subbu was a Drug Discovery Scientist at Hoffmann-La Roche Pharmaceuticals, and a faculty at the University of Kentucky Medical Center. He has published several peer reviewed research papers.</p>
                </div>
            </div>
        </div>
    );
}
export default Subbu;