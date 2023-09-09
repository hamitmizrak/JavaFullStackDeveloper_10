import axios from "axios";

// CONST URL
const PERSIST_URL = "/category/api/v1";

// CLASS
export default class ApiCategory {

    // CREATE
    // http://localhost:4444/category/api/v1/create
    //@PostMapping("/create")
    categoryApiCreate(categoryDto) {
        return axios.post(`${PERSIST_URL}/create`, categoryDto)
    }

    // LIST
    // http://localhost:4444/category/api/v1/list
    //@GetMapping(value="/list")
    categoryApiList() {
        return axios.get(`${PERSIST_URL}/list`);
    }
    // FIND
    // http://localhost:4444/category/api/v1/find/1
    //@GetMapping(value="/find/{id}")
    categoryApiFindById(id) {
        return axios.get(PERSIST_URL + "/find/" + id);
    }

    // UPDATE
    // http://localhost:4444/category/api/v1/update/1
    //@PutMapping(value = "/update/{id}")
     categoryApiUpdate( id,  categoryDto) {
        return axios.put(`${PERSIST_URL}/update/${id}`,categoryDto);
    }

    // DELETE BY ID
    // http://localhost:4444/category/api/v1/delete/1
    //@DeleteMapping(value = "/delete/{id}")
    categoryApiDeleteById(id) {
        return axios.delete(`${PERSIST_URL}/update/${id}`);
    }

} //end class
