// rcc
import React, {Component} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

// Header, Main, Footer
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

// Category
import CategoryList from "./component/category/CategoryList";
import CategoryCreate from "./component/category/CategoryCreate";
import CategoryUpdate from "./component/category/CategoryUpdate";

// i18n
import { withTranslation } from 'react-i18next';
import CategoryView from "./component/category/CategoryView";

// Class Component Template
 class BlogRouter extends Component {

    // Ekranda görünen
    static displayName = "Blog Router"

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        // BIND
    }

    // CDM

    // RENDER
    render() {

        // RETURN
        return (
            <React.Fragment>
                {/*Header*/}
                <Header logo="fa-solid fa-jet-fighter-up"></Header>

                <Routes>
                    {/*Root Path*/}
                    <Route path={"/"} element={<Main/>} />

                    <Route path={"/category/list"} element={<CategoryList name="Category List"/>}/>
                    <Route path={"/category/create"} element={<CategoryCreate name="Category Create"/>}/>
                    <Route path={"/category/view/:id"} element={<CategoryView name="Category View" />} />
                    <Route path={"/category/update/:id"} element={<CategoryUpdate name="Category Update"/>}/>

                    {/* Bad Request*/}
                    <Route path={"*"} element={<Navigate to={"/"} />} />
                </Routes>

                {/*Footer*/}
                <Footer copy="&copy; 2021-2023 Bütün Haklar Saklıdır."></Footer>
            </React.Fragment>
        ) //end return
    } // // end render
} //end class

// Wrapper Higher Order Component i18n
export default withTranslation()(BlogRouter);
