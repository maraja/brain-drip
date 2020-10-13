import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import TextLink from '#root/components/UI/TextLink/TextLink';
import Favourite from '#root/components/UI/Favorite/Favorite';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GridCard from '../GridCard/GridCard';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PostGrid = ({
  name,
  description,
  difficulty,
  id,
  link,
  upVotes,
  downVotes,
}) => {
  return (
    <GridCard
      isCarousel={true}
      favorite={
        <Favourite
          onClick={event => {
            console.log(event);
          }}
        />
      }
      title={<TextLink link={`${link}/${id}`} content={description} />}
      description={description}
      difficulty={difficulty}
      upVotes={upVotes}
      downVotes={downVotes}
      viewDetailsBtn={
        <TextLink
          link={`${link}/${id}`}
          icon={<FiExternalLink />}
          content="View Details"
        />
      }
    >
       {<TextLink link={`${link}/${id}`} content={<Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        containerClass="container"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
      >
       {name}
        
      </Carousel>}/>}
    </GridCard>
  );
};

export default PostGrid;
