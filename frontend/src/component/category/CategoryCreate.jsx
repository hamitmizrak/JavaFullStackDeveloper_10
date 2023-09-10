import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

// FUNCTION
function CategoryCreate({ t, i18n, props }) {

  // REDIRECT
  const navigate = useNavigate();

  // STATE
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState();
  const [multipleRequest, setMultipleRequest] = useState();
  const [isRead, setIsRead] = useState();

  // USE EFFECT
  // categoryName'de errorda herhangi bir değişiklik olduğunda error mesajı silinsin
  useEffect(() => {
    setError(undefined);
  }, [categoryName]);

  /////////////////////////////////////////
  // FUNCTION ALL
  // id: 1, systemDate: '2023-08-28T07:55:24.075+00:00', updatedUser: 'HamitM.', updatedDate: '2023-08-29T10:24:33.428+00:00', categoryName: 'bilgisayar449696'

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-3">{t("category_create")}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="category_name" className="mb-1">{t('category_name')}</label>
          <input 
          type="text" 
          className="form-control" 
          id="category_name" 
          name="category_name"
          placeholder={t('category_name')}
          autoFocus={true}
          required={true}
          />
        </div>
        <div className="alert alert-warning mt-2 mb-2">Hata!!</div>
        <input type="checkbox" name="" id="" /> Okunuz mu ? <br />
        <button className="btn btn-danger mt-2 me-2">{t('cleaner')}</button>
        <button className="btn btn-primary mt-2"  disabled={true}>{t('create')}</button>
      </form>
    </React.Fragment>
  ) //end return
} // end function

// i18n 
export default withTranslation()(CategoryCreate);
