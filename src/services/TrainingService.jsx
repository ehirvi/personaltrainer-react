import axios from "axios";

const API_URL = "https://traineeapp.azurewebsites.net/gettrainings";

const getAll = () => (
    axios
        .get(API_URL)
        .then(promise => promise.data)
)


export default { getAll }