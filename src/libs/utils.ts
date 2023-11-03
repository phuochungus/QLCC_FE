import { endpoint } from "@/constraints/endpoints";
import { isString } from "util";
import { isString } from "util";
export async function validateToken(token: string | undefined): Promise<boolean> {
    if (!token)
        return false;
    const result = await fetch(endpoint.tokenValidate, {
        method: "get", headers: {
            'Authorization': 'Bearer ' + token,
            'accept': "application/json",
            'Content-Type': 'application/json'
        },
    })
        .then(res => true)
        .catch(err => { console.log(err); return false })
    return result;
}

export function loadingFiler(container: HTMLElement) {
export function loadingFiler(container: HTMLElement) {
    //document: The current HTMl, usage: Create new HTML => Loading Div with spinner
    //container: The HTML element to put the loading inside,
    window.scroll({ top: 0 })
    var div = document.createElement("div");
    div.className = "loadingFilter";
    div.style.backgroundColor = "black";
    div.style.width = "100%";
    div.style.height = "100vh";
    div.style.opacity = "0.2";
    div.style.position = "absolute";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignContent = "center";
    div.style.flexWrap = "wrap";
    var spinner = document.createElement("div");
    spinner.className = "spinner-border";
    spinner.style.color = "white";
    div.appendChild(spinner);
    container.appendChild(div);
}
export function removeLoadingFilter(container: HTMLElement) {
    var temp = container.getElementsByClassName("loadingFilter")
    if (temp.length == 0)
        return
    container.removeChild(temp[0]);
}

export function search(list: any[], field: string, param: any, ): any[]
{
    const result:any[] = [];
    if(list.length == 0)
        return [];
    const t = 
    list.forEach(element => {
        const data = element[field as keyof typeof list[0]]
        if(isString(data) && (data as string).includes(param) || data == param)
        result.push(element);
            
    });
    return result
}

export function search(list: any[], field: string, param: any,): any[] {
    const result: any[] = [];
    if (list.length == 0)
        return [];
    const t =
        list.forEach(element => {
            const data = element[field as keyof typeof list[0]]
            if (isString(data) && (data as string).includes(param) || data == param)
                result.push(element);

        });
    return result
}
