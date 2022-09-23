import { HomeContent as TemplatesContent } from '../../components/dashboard/HomeContent';
import Layout from '../../../utils/layouts';
import { Container } from '../../components/dashboard/Container';
import useCategories from '../../../data/categories';
function Templates(){ 
  const { data } = useCategories()
  return(
    <Layout title="Templates | Trello">
      <Container>
        {
          data.map((target: any)=>{
          return (
            <div key={target.id}>
              {target.name}
            </div>
          )})
        }
        <TemplatesContent></TemplatesContent>
      </Container>    
    </Layout>
  )
}

export default Templates;