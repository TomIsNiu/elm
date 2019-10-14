import axios from "axios"

export default {
  get(url,response,exception){
    axios({
      method:"get",
      url:"https://elm.cangdu.org" + url,
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      }
    }).then((result)=>{
      response(result.data);
    }).catch((error)=>{
      if (exception){
        exception(error);
      } else {
        console.log(error);
      }
    })
  },
  post(url,data,response,exception){
    axios({
      method: "post",
      url:"https://elm.cangdu.org"+url,
      data:data,
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      }
    }).then((result)=>{
      response(result.data);
    }).catch((error)=>{
      if (exception){
        exception(error);
      } else {
        console.log(error);
      }
    });
  }
}
