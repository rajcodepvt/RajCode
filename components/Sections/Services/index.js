"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextBlock from "../../TextBlock";
import SvgBlock from "../../SvgBlock";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
  overflow: hidden;
  @media only Screen and (max-width: 48em) {
    padding-top: 15rem;
  }
  @media only Screen and (max-width: 40em) {
    padding-top: 12rem;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 8rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    margin: 6rem calc(3rem + 3vw);
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 5rem calc(1.5rem + 2vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  @media only Screen and (max-width: 48em) {
    opacity: 0.3;
    width: 15vw;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Services = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const lineRef = useRef(null);
  const contentRefs = useRef([]);

  const setContentRef = (el, index) => {
    contentRefs.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      const line = lineRef.current;
      const contents = contentRefs.current.filter(Boolean);

      if (!section || !bg || !line || contents.length === 0) return;

      const mq = window.matchMedia("(max-width: 48em)");

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top+=180",
          end: "bottom bottom",
          pin: bg,
          pinReparent: true,
        },
      });

      t1.fromTo(
        line,
        { height: "15rem" },
        {
          height: "3rem",
          duration: 2,
          scrollTrigger: {
            trigger: line,
            start: "top top+=200",
            end: "bottom top+=220",
            scrub: true,
          },
        }
      );

      contents.forEach((el, index) => {
        const textBlock = el.querySelector("#leftBlock");
        const objBlock = el.querySelector("div > img")?.parentElement;
        const svgBlock = el.querySelector("#svgBlock");

        if (!textBlock || !svgBlock) return;

        const startTop = mq.matches ? "top center+=200" : "top center+=100";
        const endBottom = mq.matches ? "bottom bottom-=100" : "bottom bottom-=200";

        t1.from(textBlock, {
          x: -300,
          opacity: 0,
          duration: 2,
          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: startTop,
            end: endBottom,
            scrub: true,
            snap: true,
          },
        });

        if (objBlock) {
          t1.to(objBlock, {
            transform: "scale(0)",
            ease: "power2.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: objBlock,
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,
            },
          });
        }

        t1.from(svgBlock, {
          y: 400,
          duration: 2,
          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            end: endBottom,
            scrub: true,
            snap: true,
          },
        });

        const fadeEnd = mq.matches
          ? { start: "top top+=300", end: "center top+=300" }
          : { start: "top top+=200", end: "center top+=300" };

        t1.to(el, {
          opacity: 0,
          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: fadeEnd.start,
            end: fadeEnd.end,
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ServiceSection id="services" ref={sectionRef}>
      <Background ref={bgRef}>
        <Title className="title">What I Do</Title>
        <Line id="line" ref={lineRef} />
        <Triangle id="triangle" />
      </Background>

      <Content ref={(el) => setContentRef(el, 0)}>
        <TextBlock
          topic="Design"
          title={<h1>I build award-winning designs</h1>}
          subText={
            <h5>
              I help clients with great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src="/assets/3dtube.png" alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={(el) => setContentRef(el, 1)}>
        <TextBlock
          topic="Develop"
          title={<h1>I develop high-quality websites & apps</h1>}
          subText={
            <h5>
              I build appropriate solutions to develop your website & app with
              the best tools available
            </h5>
          }
        />
        <OBJ>
          <img src="/assets/3dtriangle.png" alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content ref={(el) => setContentRef(el, 2)}>
        <TextBlock
          topic="Support"
          title={<h1>I provide support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, I will stay available to help you use
              it and provide technical support and maintenance for your
              business
            </h5>
          }
        />
        <OBJ>
          <img src="/assets/3dcapsule.png" alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
