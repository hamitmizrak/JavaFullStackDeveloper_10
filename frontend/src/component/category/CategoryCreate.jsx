import React, {useEffect, useState} from 'react'

// i18n
import {withTranslation} from 'react-i18next'

// Router
import {useNavigate} from 'react-router-dom';
import ApiCategory from "../../services/ApiCategory";

// FUNCTION
function CategoryCreate({t, i18n, props}) {

    // REDIRECT
    const navigate = useNavigate();

    // STATE
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState();
    const [multipleRequest, setMultipleRequest] = useState();
    const [isRead, setIsRead] = useState(false);

    // USE EFFECT
    // categoryName'de errorda herhangi bir değişiklik olduğunda error mesajı silinsin
    useEffect(() => {
        setError(undefined);
        setIsRead(false);
    }, [categoryName]);

    /////////////////////////////////////////
    // FUNCTION ALL
    // id: 1, systemDate: '2023-08-28T07:55:24.075+00:00', updatedUser: 'HamitM.', updatedDate: '2023-08-29T10:24:33.428+00:00', categoryName: 'bilgisayar449696'

    // Create Change
    const categoryOnChange = (event) => {
        //  name="category_name"
        const {name, value} = event.target;
        console.log(`${name} => ${value}`)
        //onChange
        setCategoryName(value);
    }

    // Is Read
    const categoryReadOnChange = (event) => {
        console.log(event.target.checked);
        setIsRead(event.target.checked);
    }

    // Create Submit
    const categoryCreateSubmit = async (event) => {
        // Browser Post yapmasın
        event.preventDefault();

        // Category Object
        const newCategory = {categoryName};
        console.log(newCategory);

        //  Hatayı gösterme
        setError(undefined);

        // try-catch
        try {
            const response = await ApiCategory.categoryApiCreate(newCategory);
            if (response.status == 200) {
                // alert("success")
                navigate("/category/list");
            }
        } catch (e) {
            console.error(e);
            setError(e.response.data.validationErrors);
        }
    }

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
                        onChange={categoryOnChange}
                        // 2.YOL
                        //onChange={(event)=>{setCategoryName(event.target.value)}}
                    />
                </div>
                {
                    (error) ? <div className="alert alert-warning mt-2 mb-2">{error.categoryName}</div> : ""
                }
                <div className="form-check mt-3 mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="isRead"
                        id="isRead"
                        onChange={categoryReadOnChange}
                    />
                    <label className="form-check-label" htmlFor="isRead">
                        Okudunuz mu ?
                    </label>
                </div>


                <button className="btn btn-danger mt-2 me-2">{t('cleaner')}</button>
                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    disabled={!isRead}
                    onClick={categoryCreateSubmit}
                >{t('create')}</button>
            </form>
        </React.Fragment>
    ) //end return
} // end function

// i18n 
export default withTranslation()(CategoryCreate);
