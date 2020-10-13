import React, { useState, Fragment } from 'react';
import Sticky from 'react-stickynode';
import Toolbar from '#root/components/UI/Toolbar/Toolbar';
import CategotySearch from '#root/components/Search/CategorySearch/CategotySearch';
import { PostPlaceholder } from '#root/components/UI/ContentLoader/ContentLoader';
import SectionGrid from '#root/components/SectionGrid/SectionGrid';
import FilterDrawer from '#root/components/Search/MobileSearchView';
import useWindowSize from '#root/library/hooks/useWindowSize';
import { useQuery } from "@apollo/client";
import { SINGLE_LEARNING_PATH } from '#root/settings/constant';
import LearningPathWrapper, { PostsWrapper } from './LearningPath.style';
import { GET_LEARNING_PATHS_ALL } from "#root/graphql/queries"

export default function LearningPath({ location, history }) {
  const { width } = useWindowSize();
  //const { data, loading, loadMoreData, total, limit } = useDataApi(url);
  const { data, loading, error, refetch } = useQuery(GET_LEARNING_PATHS_ALL);

  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4];

  return (
    <LearningPathWrapper>
      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            width > 991 ? (
              <CategotySearch history={history} location={location} />
            ) : (
              <FilterDrawer history={history} location={location} />
            )
          }
        />
      </Sticky>

      <Fragment>
        <PostsWrapper className={'col-24'}>
          <SectionGrid
            link={SINGLE_LEARNING_PATH}
            columnWidth={columnWidth}
            data={data? data.learningPaths:[]}
            totalItem={data? data.learningPaths.length : 0}
            loading={loading}
            limit={10}
            handleLoadMore={()=>{}}
            placeholder={<PostPlaceholder />}
          />
        </PostsWrapper>
      </Fragment>
    </LearningPathWrapper>
  );
}
