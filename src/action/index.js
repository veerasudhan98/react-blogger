import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceHolder'


//Action
export const fetchPostsAndUsers = () => async (dispatch, getState)=>{
        await dispatch(fetchPosts())
        const userId =_.uniq(_.map(getState().posts,'userId'))
        userId.forEach((id)=> dispatch(fetchUser(id)))
}

export const fetchPosts = () => async (dispatch)=>{
        const response = await jsonPlaceholder.get('/posts')
        dispatch({type: "FETCH_POSTS", payload: response.data})
}

export const fetchUser = (id)=> async (dispatch)=>{
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch({type: "FETCH_USER", payload: response.data})
}

//MEMOIZE TECHNIQUE TO AVOID SAME ID REQUEST (DUPLICATE ID)

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch)=>{
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({ type: 'FETCH__USER', response: 'response.data'})
// })

