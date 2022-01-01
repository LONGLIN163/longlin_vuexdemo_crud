
export const GET_ARTICLELIST=(state,payload)=>{
    state.articleList=payload
    state.filteredList=state.articleList
}

export const GET_TYPES=(state)=>{
    state.types=Array.from(new Set(state.articleList.map(a => a.taste)));
}

export const TOOGLE_REFRESHCOMPO=(state,refreshStatus)=>{
    state.reFresh=refreshStatus;
}

export const GET_LIST_BYTYPE=(state,typeString)=>{
    state.filteredList=state.articleList.filter((item) => {
      return item.taste===typeString
    })
}
export const RESET_FILTEREDLIST=(state)=>{
    state.filteredList=state.articleList
}
export const SHOW_SELECTED_ARTICLE=(state,val)=>{
    state.previewedProduct=val
}

export const TOOGLE_DIALOGFORM=(state)=>{
    state.dialogFormVisible=!state.dialogFormVisible
}