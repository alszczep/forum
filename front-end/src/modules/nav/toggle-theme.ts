export const toggleTheme = (theme: string, themeImgWrapperRef: React.RefObject<HTMLElement>, setTheme: React.Dispatch<React.SetStateAction<string | null>>) => {
    let newTheme = theme === 'day'? 'night': 'day';
    if(themeImgWrapperRef && themeImgWrapperRef.current){
        themeImgWrapperRef.current.classList.remove(`navigation__theme--${theme}`);
        themeImgWrapperRef.current.classList.add(`navigation__theme--${newTheme}`);
    }
    setTheme(newTheme);
}