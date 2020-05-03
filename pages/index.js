import Layout from "../components/layout"
import { Container } from 'react-bootstrap'
import { data } from '../components/data'
import Link from 'next/link'

const Index = props =>{
    const dynamicLinks = data => {
        return(
            data.map( d => {
                return(
                   <div key={d.id}>
                        <Link href='/[searchUrl].js' as={`/${d.url}`} >
                            <a>{d.title}</a>
                        </Link>
                    </div> 
                )
            })
        )
    }

    return(
        <Layout>
            <Container fluid='md'>
               <div>hello from next!</div>
                {dynamicLinks(data)}
            </Container>
        </Layout>
    )
}

export default Index