const action1 = (userName) => {
    console.log('action called', userName)
    const obj = {}
        // new Promise((resolve, reject) => {        
        //     resolve())
        // }

    return dispatch => {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                // console.log('timer ended')
                resolve(
                fetch('https://api.github.com/users/'+userName)
                .then(async (response) => {
                    // console.log('listComp response.json: ', response.json())
                    return response.json()
                })
                .then(json => {
                    // console.log('--------------second then-------------')
                    // console.log('1. picture', json.avatar_url)
                    obj.picture = json.avatar_url
                    // console.log('2. login', json.login)
                    obj.login = json.login
                    // console.log('3. link to github profile', json.html_url)
                    obj.link = json.html_url
                    // console.log('--------------modal-------------')
                    // console.log('1. no. of followers', json.followers)
                    obj.followers = json.followers
                    // console.log('2. no. of following', json.following)
                    obj.following = json.following
                    // console.log('3. picture', json.avatar_url)
                    //picture already saved
                    // console.log('4. location', json.location)
                    obj.location = json.location
                    // console.log('5. full name', json.name)
                    obj.name = json.name
                    
                    console.log('action: obj: ', json.html_url)
                    if(json.html_url) {
                        dispatch({type: 'ADD_USER', payload: {...obj}})
                    }

                })
                )
    
            }, 1000)
        })
        
    }   
    // return {type: 'ADD_USER', payload: {...obj}}
}

const addTodo = (title, date, category, color) => {
    return { type: 'ADD_TODO', payload: { title, date, category, color } }
    // call TODAYS_TODOS()
}


export { action1, addTodo, }