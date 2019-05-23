import axios from "axios";

const BASEURL = "http://gateway.marvel.com/v1/public/characters?name=";
const APIKEY = "&ts=1&apikey=4f82aad81edf09ddae1833aecf5099ac&hash=c354f5dc8eaa43b1eab943a71762410c";

const AllURL = "http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=4f82aad81edf09ddae1833aecf5099ac&hash=c354f5dc8eaa43b1eab943a71762410c";

const offSetURL = "&offset="

export default {
  search: function(query, offset) {
    const moreUrl = offset? offSetURL + offset: "";
    return axios.get(BASEURL + query + APIKEY + moreUrl);
  },

  searchAll: function(offset){
    const moreUrl = offset? offSetURL + offset: "";
    return axios.get(AllURL + moreUrl);

  }
 
};



