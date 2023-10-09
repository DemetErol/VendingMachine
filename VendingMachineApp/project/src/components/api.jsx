import axios from "axios";
const http = axios.create();

export function loadProducts(){
    return http.get("api/v1/products");
}