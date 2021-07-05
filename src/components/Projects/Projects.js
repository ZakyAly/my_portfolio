import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projectsList } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsList.map(
        (p, id, image, title, description, tags, source, visit) => (
          <BlogCard key={title}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank">
                Code
              </ExternalLinks>
              <ExternalLinks href={p.visit} target="_blank">
                Source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
