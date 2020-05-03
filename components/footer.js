import styles from './styles/HeaderFooter.module.scss'
import { Container } from 'react-bootstrap'

const Footer = props => {
    return(        
        <div className={styles.footerContainer}>
            <Container>
                Footer
            </Container> 
        </div>   
    )
}

export default Footer