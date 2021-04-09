export const changeTheme = (changeTo: (string | null)) => {
        if(changeTo === 'day' || changeTo == null){
            if(!document.body.classList.contains('day')){
                document.body.classList.add('day');
                document.body.classList.remove('night');
                window.localStorage.setItem('theme', 'day');
            }
        }else{
            if(!document.body.classList.contains('night')){
                document.body.classList.add('night');
                document.body.classList.remove('day');
                window.localStorage.setItem('theme', 'night');
            }
        }
}