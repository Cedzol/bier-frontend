import api from "../config/Api";

const Service = ({
    start: (processID: string) => api.post(`process-definition/key/${processID}/start`, {}),

    completeBeerTypeTask: (taskID: string, userInput: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "malz": {"value": userInput}
            }
    }),

    completeStorageTask: (taskID: string, userInput: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "lager": {"value": userInput}
            }
    }),

    getValue: (processID: string) => {
        return api.get(`/task?processDefinitionKey=${processID}`)
    },

    completePath: (taskID: string, ingredienceType: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "rohstoff": {"value": ingredienceType}
            }
    }),
    completeBeerClear: (taskID:string, klar: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "klar": {"value": klar}
            }
    }),
    completeHopTypeTask: (taskID:string, hop: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "hopfen": {"value": hop}
            }
    }),
    completeTestResult: (taskID:string, result: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "labor": {"value": result}
            }
    }),
    completeLabor:(taskID:string)=>api.post(`/task/${taskID}/complete`, {}),
})

export default Service;