import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { useNavigate } from 'react-router-dom';

// Services
import ApiCategory from '../../services/ApiCategory';
import axios from 'axios';

// FUNCTION Unutma: {t,i18n,props}
 function CategoryList({t,i18n,props}) {

  // REDIRECT
  let navigate= useNavigate();

  // STATE
  const [CategoryStateApi,setCategoryStateApi] =useState([]); //dikkat diziyi unutma

  // USE EFFECT
useEffect(()=>{
  ApiCategory.categoryApiList()
  .then((response)=>{
    // console.log(response);
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.headers);
    if(response.status===200){
      setCategoryStateApi(response.data)
    }
  })
  .catch((err)=>{
    console.error(err);
  });
  // 2.YOL
  // axios.get("http://localhost:4444/category/api/v1/list")
  // .then((response)=>{
  //   if(response.status===200){
  //     console.log("axios data");
  //     console.log(response.data);
  //     //setCategoryStateApi(response.data)
  //   }
  // })
  // .catch((err)=>{
  //   console.error(err);
  // });
},[]); //end useEffect
  /////////////////////////////////////////
  // FUNCTION ALL
// id: 1, systemDate: '2023-08-28T07:55:24.075+00:00', updatedUser: 'HamitM.', updatedDate: '2023-08-29T10:24:33.428+00:00', categoryName: 'bilgisayar449696'
  // RETURN
  return (
    <React.Fragment>
        <br /><br /><br /><br />
     <h1 className="text-center display-3">{t("category_list")}</h1>
     <table className="table table-hover table-striped table-responsive">
      <thead>
        <tr>
          <th>{t("id")}</th>
          <th>{t("category_name")}</th>
          <th>{t("updatedUser")}</th>
          <th>{t("date")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bilgisayar</td>
          <td>HamitM.</td>
          <td>2023-08-29T10:24:33.428+00:00'</td>
        </tr>
      </tbody>
     </table>
        </React.Fragment>
  ) //end return
} // end function

// i18n 
export default withTranslation()(CategoryList);
