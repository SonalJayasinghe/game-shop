import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e62c385cb59746d38167e7cc45c72a46'
    }
})