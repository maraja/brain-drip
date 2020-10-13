import React from 'react';
import SectionGrid from '#root/components/SectionGrid/SectionGrid';
import { PostPlaceholder } from '#root/components/UI/ContentLoader/ContentLoader';
import { useQuery } from "@apollo/client";
import { SINGLE_LEARNING_PATH } from '#root/settings/constant';
import { GET_LEARNING_PATHS_BY_USER } from "#root/graphql/queries"
import Loader from '#root/components/Loader/Loader';

const UserItemLists = () => {
  const { data, loading, error, refetch } = useQuery(GET_LEARNING_PATHS_BY_USER);
  if (loading) {
    return <Loader/>;
  }
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4];
  return (
    <SectionGrid
      link={SINGLE_LEARNING_PATH}
      columnWidth={columnWidth}
      data={data? data.userLearningPaths:[]}
      totalItem={data? data.userLearningPaths.length : 0}
      loading={loading}
      limit={10}
      handleLoadMore={()=>{}}
      placeholder={<PostPlaceholder />}
    />
  );
};

export default UserItemLists;
