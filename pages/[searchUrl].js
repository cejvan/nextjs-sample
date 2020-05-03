import Layout from "../components/layout"
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { data } from '../components/data'
import { useState, useEffect } from 'react'

const DynamicComponent = props => {
    const [content, setContent ] = useState({})
    const router = useRouter();

    useEffect(() => {
        for( let i = 0 ; i < data.length; i++){
            if( data[i].url === router.query.searchUrl ){
                setContent(data[i])
                return
            }
            const d = {
                title: 'Böyle birşey yok.',
                content: 'İçerik bulunamadı.',
                imgUrl: ''
            }
            setContent(d)
        }
    },[router.query.searchUrl])

    return(
        <Layout>
            <Container fluid='md'>
                <h1>{content.title}</h1>
                <div>{content.content}</div>
                { content.imgUrl && <div><img src={content.imgUrl} alt={content.title} /></div>}
            </Container>
        </Layout>
    )
}

export default DynamicComponent