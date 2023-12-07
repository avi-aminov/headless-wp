/* eslint-disable react/prop-types */
// src/HomePage.jsx
import Marquee from "react-fast-marquee";
import { Container } from '../App.style';
import hero from '../assets/hero-0001.png';
import {
    HeroSection,
    ContentWrap,
    Content,
    ContentTitle,
    CTA,
    LogosWrap,
    LogosTitle,
    MarqueeContent,
    SecondTitle,
    HeroImage
} from './HomePage.style';
import PostComponent from "../components/PostComponent";

const HomePage = ({ data }) => {

    return (
        <>
            <Container>
                <HeroSection>
                    <ContentWrap>
                        <ContentTitle dangerouslySetInnerHTML={{ __html: data?.acf?.title || '' }} />
                        <Content dangerouslySetInnerHTML={{ __html: data?.acf?.sub_title || '' }} />
                        <HeroImage src={hero} alt="hero image" />
                        <CTA href="#">Try Wordtune for free</CTA>
                    </ContentWrap>
                </HeroSection>

                <div>
                    <LogosTitle dangerouslySetInnerHTML={{ __html: data?.acf?.logo_title || '' }} />
                    <LogosWrap>
                        {
                            data?.acf?.logos.map((logo) => {
                                return (
                                    <li key={logo.id}>
                                        <img src={logo.full_image_url} alt="" />
                                    </li>
                                );
                            })
                        }
                    </LogosWrap>
                </div>
            </Container>

            <Marquee speed={30} style={{ background: '#1F1F1F', padding: '12px 0', marginTop: '43px' }}>
                {[...Array(10)].map((_, index) => (
                    <MarqueeContent key={index}>Reach your professional potential</MarqueeContent>
                ))}
            </Marquee>

            <div>
                <div style={{ textAlign: 'center' }}>
                    <SecondTitle>
                        Get a feel for what <span>Wordtune can do</span>
                    </SecondTitle>

                    <CTA href="#">Try Wordtune for free</CTA>
                </div>
                <PostComponent content={data?.content?.rendered || 'No Content'} />
            </div>
        </>
    );
};

export default HomePage;
