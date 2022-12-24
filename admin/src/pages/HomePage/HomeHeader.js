import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { Typography } from "@strapi/design-system/Typography";
import { Link } from "@strapi/design-system/v2/Link";
import { Stack } from "@strapi/design-system/Stack";
import { Box } from "@strapi/design-system/Box";
import { Button } from "@strapi/design-system/Button";
import ArrowRight from "@strapi/icons/ArrowRight";

const WordWrap = styled(Typography)`
  word-break: break-word;
`;

const StackCustom = styled(Stack)`
  align-items: flex-start;
`;

const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      {/* modif_zach_customWelcomeMessageHeader */}
      <Box paddingLeft={6} paddingBottom={10}>
        <StackCustom spacing={5}>
          <Typography as="h1" variant="alpha">
            Bienvenue, Florian! 👋
          </Typography>
          <Typography as="h2" variant="epsilon">
            Comment avancez-vous dans la rédaction de votre contenu ? 💬 <br />
            Pour toute question au sujet du panneau administrateur, veuillez me
            contacter.📞
          </Typography>
          {/* modif_zach_linkToTuto */}
          <Typography as="h3" variant="epsilon">
            {"N'hésitez pas à"}
            <a
              style={{
                color: "#4945ff",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              href="#"
              target="_blank"
            >
              {" consulter le tutoriel vidéo "}
            </a>
            démontrant comment ajouter du contenu à La Rétropolitaine.
          </Typography>
          {/*           <WordWrap textColor="neutral600" variant="epsilon">
            {hasCreatedContentType
              ? formatMessage({
                  id: "app.components.HomePage.welcomeBlock.content.again",
                  defaultMessage:
                    "Comment avancez-vous dans la rédaction de votre contenu ? Pour toute question au sujet du panneau administrateur, veuillez me contacter.",
                })
              : formatMessage({
                  id: "app.components.HomePage.welcomeBlock.content",
                  defaultMessage:
                    "Félicitations ! Vous venez de vous connecter pour la toute première fois.",
                })}
            <Typography as="h1" variant="alpha">
              Essai remplacement hyperlink
            </Typography>
          </WordWrap>
 */}{" "}
          {/*           {hasCreatedContentType ? (
            <Link isExternal href="https://strapi.io/blog">
              {formatMessage({
                id: "app.components.HomePage.button.blog",
                defaultMessage: "See more on the blog",
              })}
            </Link>
          ) : (
            <Button size="L" onClick={onCreateCT} endIcon={<ArrowRight />}>
              {formatMessage({
                id: "app.components.HomePage.create",
                defaultMessage: "Create your first Content type",
              })}
            </Button>
          )} */}
        </StackCustom>
      </Box>
    </div>
  );
};

HomeHeader.defaultProps = {
  hasCreatedContentType: undefined,
  onCreateCT: undefined,
};

HomeHeader.propTypes = {
  hasCreatedContentType: PropTypes.bool,
  onCreateCT: PropTypes.func,
};

export default HomeHeader;
