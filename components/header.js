import styles from './styles/HeaderFooter.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
const Header = props => {
    return(
        <div className={styles.headerContainer}>
            <Container>
                <Row>
                    <Col sm='9'>
                        Header
                    </Col>
                    <Col sm='3'>
                        <div>
                            <Link href='/'>
                                <a>Anasayfa</a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>   
    )
}

export default Header