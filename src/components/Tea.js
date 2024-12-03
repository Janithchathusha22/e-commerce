import ViewTea from './ViewTea';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import products from './TeaData'


export default function Tea() {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <>
            <HomeNavBar/>

            <Container className='justify-content-center p-2'>
                 <Row>
                    {products.map((product)=> {
                        return(
                            <ViewTea product={product} userInfo={userInfo}/>
                        )
                    })}
                 </Row>
            </Container>
                
            
        </>
    )
}