import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './Form.css'

export default function Form() {

    const [article, setArticle] =useState({
        title:"",
        body:""
    })
const dispatch = useDispatch();

const handleForm = e => {
    e.preventDefault();
    dispatch({
        type:'ADDARTICLE',
        payload :article
    })
    setArticle({
        title:"",
        body:""
    })
}

const handleInput = e =>{
if(e.target.classList.contains('inp-title')){
    const newObjectState = {...article,title: e.target.value};
    setArticle(newObjectState);
}
else if(e.target.classList.contains('inp-body')){
    const newObjectState = {...article,body: e.target.value};
    setArticle(newObjectState);
}
};
console.log(article)



    return (
        <>
            <h1 className="title-form">Écrivez un article</h1>
            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input 
                onChange={handleInput}
                value={article.title}
                type="text" id="title" 
                placeholder="Entrez votre nom"
                className="inp-title"
                />
               <label htmlFor="article">Votre article</label>
                <textarea 
                onChange={handleInput}
                value={article.body}
                id="article" 
                placeholder="votre article"
                className="inp-body"
                ></textarea>
                <button>Envoyez l'article</button>
            </form>

        </>
    )
}
