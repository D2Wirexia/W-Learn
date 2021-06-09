let isCheck = false
let countLess = 0
let view = 'Индивидуальное'

export const setChoiceValueSubscribeLesson = (check, less, type) => {
    isCheck = check
    countLess = Number(less)
    view = type
}

export const getChoiceValueSubscribeLesson = () => {
    return {isCheck, countLess, view}
}
