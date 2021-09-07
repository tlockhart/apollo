import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Layout, QueryResult} from '../components';
import TrackDetail from '../components/track-detail';

// the client query, when the route is hit, it passes the trackID from the URL's dynamic segment
export const GET_TRACK = gql`
    query getTrack($trackId: ID!) {
      track(id: $trackId) {
        id
        title
        author {
          id
          name
          photo
        }
        thumbnail
        length
        modulesCount
        numberOfViews
        modules {
          id
          title
          length
        }
        description
      }
    }
  `;
  
  const Track = ({trackId}) => {
      // useQuery hook sends the GET_TRACK Query to the server and the trackId variable
      // whenever this page is displayed
      //Note the trackedId comes from the urls dynamic segment
      const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId },
      });
    return (
      <Layout>
        <QueryResult error={error} loading={loading} data={data}>
          <TrackDetail track={data?.track} />
        </QueryResult>
      </Layout>
    );
  };
  export default Track;

