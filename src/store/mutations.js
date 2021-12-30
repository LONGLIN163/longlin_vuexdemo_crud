
export const getArticleList=(state,payload)=>{
    state.articleList=payload
    state.filteredList=state.articleList
}

export const getTypes=(state)=>{
    state.types=Array.from(new Set(state.articleList.map(a => a.taste)));
}

export const ToogleRefreshCompo=(state,refreshStatus)=>{
    state.reFresh=refreshStatus;
}

export const getListByType=(state,typeString)=>{
    state.filteredList=state.articleList.filter((item) => {
      return item.taste===typeString
    })
}
export const resetFilteredList=(state)=>{
    state.filteredList=state.articleList
}
export const showSelectArticle=(state,val)=>{
    state.previewedProduct=val
}

export const toggleDialogForm=(state)=>{
    state.dialogFormVisible=!state.dialogFormVisible
}