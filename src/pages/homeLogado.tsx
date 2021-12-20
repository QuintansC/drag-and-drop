import { useEffect, useContext } from 'react';
import { NavComponents } from '../components/dashboard/NavComponents';
import { NavVertical } from '../components/dashboard/NavVertical';
import { DropzoneContext } from '../contexts/DropzoneContext';
import styles from '../styles/pages/HomeLogado.module.scss';
import { ContentMain } from '../components/dashboard/ContentMain';
import { HomeLogadoType } from '../types/index'

import Layout from '../layouts/headerNav';
function HomePricipal(props: any){ 
  return(
    <Layout title="Quadros | Trello">
      <ContentMain />
    </Layout>
  )
}

export default HomePricipal;