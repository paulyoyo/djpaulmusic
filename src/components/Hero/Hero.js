import React from "react";
import HeroGradientAnimation from "@components/shared/HeroGradientAnimation";
import { Link } from "gatsby";
import RevealWrapper from "../animation/RevealWrapper";

const Hero = ({
  badge = "Disponible para eventos",
  h1,
  h2,
  description,
  primaryCTA,
  secondaryCTA
}) => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      <HeroGradientAnimation />
      <div className="container">
        <RevealWrapper className="text-center">
          {badge && (
            <div className="rv-badge mb-5 md:mb-10">
              <span className="rv-badge-text">{badge}</span>
            </div>
          )}
          <h1 className="mb-7 xl:mb-8" dangerouslySetInnerHTML={{ __html: h1 }} />
          {h2 && (
            <h2 className="mx-auto mb-6 max-w-xl text-xl font-semibold md:text-2xl lg:max-w-[750px]">
              {h2}
            </h2>
          )}
          <p className="mx-auto mb-10 max-w-xl md:mb-14 lg:max-w-[750px] xl:mb-[76px]">
            {description}
          </p>

          <ul className="flex list-none flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {primaryCTA && (
              <li className="mx-auto block w-[90%] md:ml-auto md:mr-0 md:inline-block md:w-auto">
                <Link
                  to={primaryCTA.link}
                  className="rv-button rv-button-primary block md:inline-block"
                >
                  <div className="rv-button-top">
                    <span>{primaryCTA.text}</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">{primaryCTA.text}</span>
                  </div>
                </Link>
              </li>
            )}

            {secondaryCTA && (
              <li className="mx-auto block w-[90%] md:ml-0 md:mr-auto md:inline-block md:w-auto">
                <Link
                  to={secondaryCTA.link}
                  className="rv-button rv-button-white block md:inline-block"
                >
                  <div className="rv-button-top">
                    <span>{secondaryCTA.text}</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>{secondaryCTA.text}</span>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default Hero;
