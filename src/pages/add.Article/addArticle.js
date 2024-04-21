import Navbarsite from "../../components/navbar/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./addArticle.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddArticle() {
    const navigate =useNavigate()

   const resetformdata = ()=>{
    setFormdata({
        title: "",
        desc: "",
        writter: "",
        category: "",
        img: "",
        readingTime: "",

    });
   }
 const [formdata,setFormdata] = useState({})
const posthandler = ()=>{
    axios.post("http://localhost:3100/articles",formdata)
    .then(response=>{
        if(response.status === 201){
            Swal.fire({
                title: "مقاله جدید با موفقیت ساخته شد",
                timer:1500,
                timerProgressBar:true,
                showConfirmButton:false,
                icon: "success",
            })
            navigate("/")


        }
        

    })
    .catch(eror=>{
        Swal.fire({
            title: "مقاله   ساخته نشد",
            timer:1200,
            timerProgressBar:true,
            showConfirmButton:false,
            icon: "error",
        })
    })
   
    resetformdata();
    
}
const formhandler = (e)=>{
    setFormdata({...formdata,[e.target.name]: e.target.value});
    
}


    return (
        <>
            <Navbarsite />
            <div className="form-container">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label> عنوان مقاله</Form.Label>
                        <Form.Control value={formdata.title} name="title"  onChange={formhandler}  type="text" placeholder="عنوان مقاله خود را وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label> توضیح کوتاه</Form.Label>
                        <Form.Control value={formdata.desc} name="desc" onChange={formhandler} type="text" placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  نویسنده مقاله</Form.Label>
                        <Form.Control value={formdata.writter} name="writter" onChange={formhandler} type="text"  />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  موضوع مقاله</Form.Label>
                        <Form.Control value={formdata.category} name="category" onChange={formhandler} type="text" placeholder="موضوع مقاله وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label> ادرس عکس را وارد کنید </Form.Label>
                        <Form.Control value={formdata.img} name="img" onChange={formhandler} type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>  مدت زمان مقاله</Form.Label>
                        <Form.Control value={formdata.readingTime} name="readingTime" onChange={formhandler} type="number"  />
                    </Form.Group>


                    <Button onClick={posthandler} variant="primary" type="button">
                        ساخت مقاله
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default AddArticle