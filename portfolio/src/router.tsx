import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage";
import SkillsPage from "./views/SkillsPage";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import EducationPage from "./views/EducationPage";
import ExperiencePage from "./views/ExperiencePage";
import ProjectsPage from "./views/ProjectsPage";
import ContactPage from "./views/ContactPage";



export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/skills" element={<SkillsPage/>}/>
                    <Route path="/education" element={<EducationPage/>}/>
                    <Route path="/experience" element={<ExperiencePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Route>
               

            </Routes>
        </BrowserRouter>
    )
}