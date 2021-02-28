/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, useTheme } from "@emotion/react";
import { ReactComponent as GitHubLogo } from "../../assets/git.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

import { styles } from "./home.styles";

export const Home = () => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <div css={css.topSection}>
      <div css={css.topSectionContent}>
        <div css={css.topSectionNameContainer}>
          <div css={css.topSectionNameBlock}>
            <div css={css.topSectionFirstName}>Khulan</div>
            <div css={css.topSectionLastName}>Myagmardorj</div>
            <div css={css.topSectionNameLine} />
          </div>
        </div>

        <div css={css.topSectionIntro}>
          <div css={css.topSectionIntroHello}>Hello.</div>
          <div css={css.topSectionIntroHighlight}>
            I’m a Software Developer based in NYC.
          </div>
          <div css={css.topSectionIntroDetail}>
            At the intersection of product, design, and engineering, I’m focused
            on front-end development and web analytics.
          </div>

          <div css={css.topSectionIntroSocial}>
            <a href="https://github.com/myagmar2">
              <GitHubLogo />
            </a>
            <a href="https://www.linkedin.com/in/khulan-myagmardorj/">
              <LinkedInLogo />
            </a>
            <a href="https://twitter.com/khulski?lang=en">
              <TwitterLogo />
            </a>
            <a href="/khulan-myagmardorj-resume.pdf">
              <div css={css.topSectionIntroSocialResume}>Resume</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
