export function getCoords(elemId: string): { top: number, left: number } { // crossbrowser version
    const element: HTMLElement = document.getElementById(elemId) || new HTMLElement;
    const box = element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

export function scrollToElement(element: string, offset: number) {
    let top: number = 0;
    if (element) {
        let coords = getCoords(element);
        top = coords.top - offset;
    }
    window.scrollTo({
        top,
        behavior: "smooth"
    })
}