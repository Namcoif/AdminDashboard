const _handleDate=(date)=>{
    let newDate = new Date(date)
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

    let changeDate = day + '-' + (month + 1) + '-' + year;
    return changeDate
}

export const HandleFunction={
    _handleDate
}