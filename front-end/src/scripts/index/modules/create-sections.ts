import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { fetchData } from './../../_modules/fetch-data';
import { Section } from './../../_interfaces/Section';

const url = 'http://here-goes-api-url';

export const createSections = async () => {
    //const sectionList: [Section] = await fetchData(url);
    // placeholder
    const sectionList = [
            {title: 'Section One', desc: 'section one description'},
            {title: 'Section Two', desc: 'section two description'},
            {title: 'Section Three', desc: 'section three description'},
            {title: 'Section Four', desc: 'section four description'}
    ];
    // ---
    const mainContentElement = document.querySelector('main')!;
    mainContentElement.classList.add('mainPage');
    sectionList.forEach((element) => {
        mainContentElement.appendChild(createSection(element));
    });
};
const createSection = (section: Section): HTMLElement => {
    const sectionElement = document.createElement('section');
    let elements: HTMLElement[] = [];
    sectionElement.classList.add('section');
    elements.push((createElement('h2', ['sectionTitle'], section.title)));
    elements.push((createElement('h4', ['sectionDesc'], section.desc)));
    appendChildren(sectionElement, elements);
    sectionElement.addEventListener('click', sectionButtonHandler(section.title));
    return sectionElement;
};
const sectionButtonHandler = (title: string) => {
    return () => {
        localStorage.setItem('currentSection', title);
        location.assign('./section.html');
    }
};