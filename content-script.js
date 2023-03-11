function changeBlock() {
    if (!!document.getElementsByClassName(
        "ContributionCalendar-day"
    )) {
        const array = document.getElementsByClassName(
            "ContributionCalendar-day"
        )
        for (let index = 0; index < array.length; index++) {
            array[index].style.background='#39d353' + Math.floor(Math.random()*100)
            
        }
    }
}
changeBlock();