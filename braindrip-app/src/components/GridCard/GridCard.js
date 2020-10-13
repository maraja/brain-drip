import React from 'react';
import PropTypes from 'prop-types';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Space } from "antd";

import GridCardWrapper, {
  TitleWrapper,
  FavoriteIcon,
  ContentWrapper,
  TitleArea,
  DifficultyArea,
  VotesArea,
  MetaWrapper,
  ButtonGroup,
} from './GridCard.style';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const GridCard = ({
  className,
  favorite,
  upVotes,
  downVotes,
  description,
  difficulty,
  editBtn,
  viewDetailsBtn,
  children,
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <TitleWrapper className="media_wrapper">{children}</TitleWrapper>
      <ContentWrapper className="content_wrapper">
        {description && <TitleArea>{description}</TitleArea>}
        <MetaWrapper className="meta_wrapper">
          {difficulty && <DifficultyArea className="price">{difficulty}</DifficultyArea>}
          <VotesArea className="rating">
            <IconText icon={LikeOutlined} text={upVotes} key="list-vertical-like-o" />
            &nbsp;&nbsp;&nbsp;
            <IconText icon={DislikeOutlined} text={downVotes} key="list-vertical-dislike-o" />
          </VotesArea>
          {viewDetailsBtn || editBtn ? (
            <ButtonGroup className="button_group">
              {viewDetailsBtn}
              {editBtn}
            </ButtonGroup>
          ) : null}
        </MetaWrapper>
      </ContentWrapper>

      {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
    </GridCardWrapper>
  );
};

GridCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.string,
  difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default GridCard;
