import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LazyLoad from '../components/wrappers/LazyLoad';

// Lazy load pages
const Welcome = lazy(() => import('./Welcome'));
const Categories = lazy(() => import('./Categories'));
const Preview = lazy(() => import('./Preview'));
const Details = lazy(() => import('./Details'));
const PageNotFound = lazy(() => import('./PageNotFound'));

// Lazy load forms
const PersonalDetails = lazy(() => import('../components/form/PersonalDetails'));
const Summary = lazy(() => import('../components/form/Summary'));
const WorkExperience = lazy(() => import('../components/form/WorkExperience'));
const TechnicalSkills = lazy(() => import('../components/form/TechnicalSkills'));
const SoftSkills = lazy(() => import('../components/form/SoftSkills'));
const WorkLinks = lazy(() => import('../components/form/WorkLinks'));
const Accomplishments = lazy(() => import('../components/form/Accomplishments'));
const Projects = lazy(() => import('../components/form/Projects'));
const Education = lazy(() => import('../components/form/Education'));

// Lazy load PDF
const ResumePdf = lazy(() => import('../components/resume/pdf/ResumePDF'));

const Content = () => {
    const basePath = import.meta.env.BASE_URL || '/';
    return (
        <div className="page_content">
            <Routes>
                <Route path={`${basePath}`} element={
                    <LazyLoad>
                        <Welcome />
                    </LazyLoad>
                }/>

                <Route path={`${basePath}categories`} element={
                    <LazyLoad>
                        <Categories />
                    </LazyLoad>
                }/>

                <Route path={`${basePath}resume`} element={
                    <LazyLoad>
                        <ResumePdf />
                    </LazyLoad>
                }/>

                <Route path={`${basePath}preview`} element={
                    <LazyLoad>
                        <Preview />
                    </LazyLoad>
                }/>
    
                <Route path={`${basePath}details`} element={
                    <LazyLoad>
                        <Details />
                    </LazyLoad>
                    }>
                    <Route index path='personal_details' element={
                        <LazyLoad>
                            <PersonalDetails />
                        </LazyLoad>
                    }/>
                    <Route path='summary' element={
                        <LazyLoad>
                            <Summary />
                        </LazyLoad>
                    }/>
                    <Route path='work_experience' element={
                        <LazyLoad>
                            <WorkExperience />
                        </LazyLoad>
                    }/>
                    <Route path='technical_skills' element={
                        <LazyLoad>
                            <TechnicalSkills />
                        </LazyLoad>
                    }/>
                    <Route path='soft_skills' element={
                        <LazyLoad>
                            <SoftSkills />
                        </LazyLoad>
                    }/>
                    <Route path='work_links' element={
                        <LazyLoad>
                            <WorkLinks />
                        </LazyLoad>
                    }/>
                    <Route path='accomplishments' element={
                        <LazyLoad>
                            <Accomplishments />
                        </LazyLoad>
                    }/>
                    <Route path='projects' element={
                        <LazyLoad>
                            <Projects />
                        </LazyLoad>
                    }/>
                    <Route path='education' element={
                        <LazyLoad>
                            <Education />
                        </LazyLoad>
                    }/>
                </Route>
                
                <Route path="*" element={
                    <LazyLoad>
                        <PageNotFound />
                    </LazyLoad>
                }/>
            </Routes>
        </div>
    );
}

export default Content;