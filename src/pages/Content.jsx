import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';

const lazyLoadComponent = (path) => {
    const Component =  lazy(() => import(path));
    return (
        <Suspense fallback={<Loading />}>
            <Component />
        </Suspense>
    )
}

const formComponentsPath = '../components/form/';

const Content = () => {
    return (
        <div className="page_content">
            <Routes>
                <Route path='/' element={lazyLoadComponent('./Welcome')} />

                <Route path='/categories' element={lazyLoadComponent('./Categories')} />

                <Route path='/resume' element={lazyLoadComponent('./ResumePdf')} />

                <Route path='/preview' element={lazyLoadComponent('./Preview')} />
    
                <Route path='/details' element={lazyLoadComponent('./Details')}>
                    <Route index path='personal_details' element={lazyLoadComponent(formComponentsPath + 'PersonalDetails')} />
                    <Route path='summary' element={lazyLoadComponent(formComponentsPath + 'Summary')} />
                    <Route path='work_experience' element={lazyLoadComponent(formComponentsPath + 'WorkExperience')} />
                    <Route path='technical_skills' element={lazyLoadComponent(formComponentsPath + 'TechnicalSkills')} />
                    <Route path='soft_skills' element={lazyLoadComponent(formComponentsPath + 'SoftSkills')} />
                    <Route path='work_links' element={lazyLoadComponent(formComponentsPath + 'WorkLinks')} />
                    <Route path='accomplishments' element={lazyLoadComponent(formComponentsPath + 'Accomplishments')} />
                    <Route path='projects' element={lazyLoadComponent(formComponentsPath + 'Projects')} />
                    <Route path='education' element={lazyLoadComponent(formComponentsPath + 'Education')} />
                </Route>
                
                <Route path="*" element={lazyLoadComponent('./PageNotFound')} />
            </Routes>
        </div>
    );
}

export default Content;