
const INITIAL_STATE = {
    articles: []
}
function articleReducer(state = INITIAL_STATE, action){

    // eslint-disable-next-line default-case
    switch(action.type){
        case "ADDARTICLE":{
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                ...state,
                articles :newArr
            }
        }
        
        case "LOADARTICLES" :{
            return {
                ...state,
                articles : action.payload
            }
        }
    }
    return state;
}
export default articleReducer;


export const gerArticles = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type : 'LOADARTICLES',
            payload :data
        })
    })

}