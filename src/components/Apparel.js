import ViewApparel from './ViewApparel';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import products from './ApparelData'


export default function Apparel() {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <>
            <HomeNavBar/>

            <Container className='justify-content-center p-2'>
                 <Row>
                    {products.map((product)=> {
                        return(
                            <ViewApparel product={product} userInfo={userInfo}/>
                        )
                    })}
                 </Row>
            </Container>
                
            
        </>
    )
}