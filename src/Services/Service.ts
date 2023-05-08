import api from "../config/Api";

const Service = ({
    start: (processID: string) => api.post(`process-definition/key/${processID}/start`, {}),

    completeBeerTypeTask: (taskID: string, userInput: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
               malz: {"value": userInput}
            }
    }),

    completeStorageTask: (taskID: string, userInput: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "lager": {"value": userInput}
            }
    }),

    getValue: (processID: string) => api.get(`/task?processDefinitionKey=${processID}`)

});

export default Service;