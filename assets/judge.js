const q1 =  (answer) => {
    return (answer === true ? 'fin1' : 'q2')
} // 자신이 직접 만든건지에 대한 질문

const q2 = (answer) => {
    return (answer === true ? 'q4' : 'q3')
} // 저작권자 생존에 대한 질문

const q3 = (answer) => {
    return (answer === true ? 'fin2' : 'fin3')
} // 사후 저작권 유효에 대한 질문

const q4 = (answer) => {
    return (answer === true ? 'fin4' : 'fin3')
} // 사용허가에 대한 질문

    // fin1: 자신이 만든 것으로, 얼마든지 사용할 수 있음.
    // fin2: 사후 저작권 만료로 합법적 사용 가능
    // fin3: 사용한다면 저작권법 위반
    // fin4: 허가받은 내용 하에서 사용가능

export { q1, q2, q3, q4 }
