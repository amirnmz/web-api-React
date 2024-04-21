import axios from "axios";
import {Container,Row,Col} from "react-bootstrap"
import Navbarsite from "../../components/navbar/navbar"
import "./home.css"
import Articleitem from "../../components/article/Articleitem"
import { useEffect, useState } from "react"

function Home(){
    const [articles,setArticles] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3100/articles")
        .then(res => setArticles(res.data))
    }, []);
   
    return(
        <>
        <Navbarsite/>
       
        <Container>
        <h1 style={{margin:"20px"}}> لیست مقالات</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
                {articles.map(arti=>(
                    <Col key={arti.id}>
                    <Articleitem {...arti}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
}
export default Home