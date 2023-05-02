import api from "../config/Api";

const Service = ({
    start: (processID: string) => api.post(`process-definition/key/${processID}/start`, {}),

    chooseBeer: (selectedBeerType: string, processID: string) => api.post(`/process-definition/key/${processID}/complete`, {
        "variables": {
            "malz": {
                "value": selectedBeerType,
            }
        }
    }),

    storage: (storageCondition: string, processID: string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "lager": {
                "value": storageCondition,
                "type": "String"
            }
        },
        "Content-Type": "application/json"
    }),

    ressource: (ressourcePath: string, processID: string) => api.post(`/process-definition/key/${processID}`, {
        "variables": {
            "rohstoff": {
                "value": ressourcePath,
                "type": "String"
            }
        }
    }),

    chooseHop: (selectedHop: string, processID: string) => api.post(`/process-definition/key/${processID}`, {
        "variables": {
            "malz": {
                "value": selectedHop,
                "type": "String"
            }
        }
    }),

    wuerzeKlar: (clear: string, processID: string) => api.post(`/process-definition/key/${processID}`, {
        "variables": {
            "lager": {
                "value": clear,
                "type": "String"
            }
        }
    }),

    badgeCondition: (badgeConditionValue: string, processID: string) => api.post(`/process-definition/key/${processID}`, {
        "variables": {
            "lager": {
                "value": badgeConditionValue,
                "type": "String"
            }
        }
    }),
    completeTask: (taskID: string, beerType: string) => api.post(`/task/${taskID}/complete`, {
        "variables":
            {
                "malz": {"value": "Lager"}
            }
    }),

    getValue: (processID: string) => api.get(`/task?processDefinitionKey=${processID}`)

});

export default Service;