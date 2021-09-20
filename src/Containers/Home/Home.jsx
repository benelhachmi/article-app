import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {useEffect , useState} from 'react'
import {gerArticles}  from '../../redux/articles/articleReducer'
import {v4  as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'

import './Home.css'


export default function Home() {

    const {articles} =useSelector(state => ({
        ...state.articleReducer
    }))
    const dispatch  = useDispatch()

    useEffect(() => {
        if(articles.length === 0){
            dispatch(gerArticles())
        }
    },[])

    return (
        <>
            <h1 className="home-title">tous les article</h1>
            <div className="container-cards">
                {articles.map(e => {
                    return(
                        <Card key={uuidv4()} >
                        <h2>{e.title}</h2> 
                        <Link to={{
                        pathname: `articles/${e.title.replace(/\s+/g, '-').trim()}`,
                        state: {
                            title :e.title,
                            body :e.body,
                        },
                        }}>
                        Lire l'article
                        </Link>
                        </Card>
                           
                    )
                })}

            </div>
        </>
    )
}
