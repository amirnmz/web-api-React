import axios from "axios";
import Navbarsite from "../../components/navbar/navbar"
import "./editArticle.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Editarticle() {
    const navigate=useNavigate()
    const [articledata, setArticleData] = useState({})
    const articleId = useParams().articleid;


    useEffect(() => {
        axios.get(`http://localhost:3100/articles/${articleId}`)
            .then((response) => {
                setArticleData(response.data);

            });
    }, []);

    const edithandler = () => {
        axios.put(`http://localhost:3100/articles/${articleId}`,articledata)
        Swal.fire({
            title: "مقاله  با موفقیت ویرایش شد",
            timer:1100,
            timerProgressBar:true,
            showConfirmButton:false,
            icon: "success",
        })
        navigate("/")
        

    }

    const formhandler = (e) => {
        setArticleData({...articledata,[e.target.name]: e.target.value});

    }

    return (
        <>
            <Navbarsite />
            <div className="form-container">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label> عنوان مقاله</Form.Label>
                        <Form.Control
                         value={articledata.title}
                         name="title" 
                         onChange={formhandler}
                         type="text" 
                         placeholder="عنوان مقاله خود را وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label> توضیح کوتاه</Form.Label>
                        <Form.Control value={articledata.desc} name="desc" onChange={formhandler} type="text" placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  نویسنده مقاله</Form.Label>
                        <Form.Control value={articledata.writter} name="writter" onChange={formhandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  موضوع مقاله</Form.Label>
                        <Form.Control value={articledata.category} name="category" onChange={formhandler} type="text" placeholder="موضوع مقاله وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label> ادرس عکس را وارد کنید </Form.Label>
                        <Form.Control value={articledata.img} name="img" onChange={formhandler} type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  مدت زمان مقاله</Form.Label>
                        <Form.Control value={articledata.readingTime} name="readingTime" onChange={formhandler} type="number" />
                    </Form.Group>


                    <Button onClick={edithandler} variant="primary" type="button">
                        ویرایش مقاله
                    </Button>
                </Form>
            </div>



        </>
    )
}
export default Editarticle