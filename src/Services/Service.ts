import api from "../config/Api";

const Service = ({
    startSudhaus: (processID:string) => api.post(`/process-definition/key/${processID}/start`),

    chooseBeer: (selectedBeer: string, processID:string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "malz": {
                "value": selectedBeer,
                "type": "String"
            }
        }
    }),
    chooseHop: (selectedHop: string, processID:string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "malz": {
                "value": selectedHop,
                "type": "String"
            }
        }
    }),

    storage:(storageCondition: string, processID:string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "lager": {
                "value": storageCondition,
                "type": "String"
            }
        }
    }),

    wuerzeKlar:(clear: string, processID:string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "lager": {
                "value": clear,
                "type": "String"
            }
        }
    }),

    badgeCondition:(badgeConditionValue: string, processID:string) => api.post(`/process-definition/key/${processID}/start`, {
        "variables": {
            "lager": {
                "value": badgeConditionValue,
                "type": "String"
            }
        }
    }),

    getValue: (processID:string) => api.get(`/task?processDefinitionKey=${processID}`)

});

export default Service;