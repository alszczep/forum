import { Section } from '../../_interfaces/Section';

export const createSections = (sectionList:[Section]) => {
    const mainContentElement = document.querySelector('main');
    if(mainContentElement)
        sectionList.forEach((element) => {
            mainContentElement.appendChild(createSection(element));
        });
};
const createSection = (section: Section): HTMLElement => {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('section');
    sectionElement.appendChild(createSectionTitle(section.title));
    sectionElement.appendChild(createSectionDesc(section.desc));
    sectionElement.addEventListener('click', sectionButtonHandler(section.title));
    return sectionElement;
};
const sectionButtonHandler = (title: string) => {
    return () => {
        localStorage.setItem('currentSection', title);
        location.assign('./section.html');
    }
};
const createSectionTitle = (title: string): HTMLElement => {
    const titleElement = document.createElement('h2');
    titleElement.classList.add('sectionTitle');
    titleElement.textContent = title;
    return titleElement;
};
const createSectionDesc = (desc: string): HTMLElement => {
    const descElement = document.createElement('h4');
    descElement.classList.add('sectionDesc');
    descElement.textContent = desc;
    return descElement;
};