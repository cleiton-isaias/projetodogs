import React from 'react'
import { STATS_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import Info from '../Helper/Info';
// import UserStatsGraphs from './UserStatsGraphs';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData()
  }, [request]);


  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title='Estatísticas' />
        {data != 0 ?
          <UserStatsGraphs data={data} />
          :
          <Info info='Vamos postar algumas fotos?! 👻' />
        }
      </React.Suspense>
    );
  }
  else return null
}

export default UserStats