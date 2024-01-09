import { HomeContent } from '../../components/dashboard/HomeContent/index';
import Layout from '../../utils/layouts';
import { Container } from '../../components/dashboard/Container';
function Quadros(props: any){ 
  return(
    <Layout title="Quadros | Trello">
      <Container>
        <HomeContent />
      </Container>
    </Layout>
  )
}

export default Quadros;