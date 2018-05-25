
addArticle = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
}

export {addArticle}