import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization: 'Bearer cdLR3hvfLlELvaG9Y4KQZG-AUomLRp3eakS629TAgaH576v5hmjNoVGypqLdnWGTWXe4GBDh3aIrrlKTbt-ee3dAoUCy93LEwpFuSKe43bjdx87QhqLh97Xln5ZUXnYx'
    }

});

