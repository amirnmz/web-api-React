import Card from 'react-bootstrap/Card';
import { IoTimeOutline } from "react-icons/io5";
import { TiArrowLeftThick } from "react-icons/ti"
import "./Articleitem.css"
import { Link } from 'react-router-dom';
function Articleitem({img,category,desc,writter,readingTime,id}) {
    return (
        <>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='py-2'>  {category} </Card.Title>
                    <Card.Text >
                    {desc}
                    </Card.Text>
                    <Link key={id} to={`/article/${id}`}>
                    <span className='read-more'>
                        <span>
                            ادامه مقاله 
                        </span>
                        <TiArrowLeftThick size={"25px"} />
                    </span>
                    </Link>
                  
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center py-3 '>
                    <span>نویسنده :{writter}  </span>
                    <span> <IoTimeOutline size={"20px"} /> {readingTime} دقیقه</span>
                </Card.Footer>
            </Card>
        </>
    )
}
export default Articleitem