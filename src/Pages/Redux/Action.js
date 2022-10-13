export const Add = (item) => {
    return {
        type: "AddItem",
        payload: item
    }
}
export const Delete = (id) => {
    return {
        type: "Delete",
        payload: id
    }
}