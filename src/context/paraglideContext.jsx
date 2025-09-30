import { createContext } from "react";




const paraglideContext = createContext()



export const ParaglideProvider = ({ children }) => {

    const test = 0
    // const inlangProject = await loadProjectFromDirectory({
    //     path: "./project.inlang",
    // });

    // const output = await compileProject({
    //     project: inlangProject,
    // });
    


    return (<paraglideContext.Provider value={{ test }}>
        {children}
    </paraglideContext.Provider>)

}


