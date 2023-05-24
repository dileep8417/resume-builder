import Welcome from './Welcome';
import Categories from './Categories';
import Details from './Details';
import Preview from './Preview';
import PageNotFound from './PageNotFound';
import { Routes, Route} from 'react-router-dom';
import PersonalDetails from '../components/form/PersonalDetails';
import Summary from '../components/form/Summary';
import WorkExperience from '../components/form/WorkExperience';
import Education from '../components/form/Education';
import Projects from '../components/form/Projects';
import TechnicalSkills from '../components/form/TechnicalSkills';
import SoftSkills from '../components/form/SoftSkills';
import WorkLinks from '../components/form/WorkLinks';
import Achievements from '../components/form/Achievements';

const Content = () => {
    return (
        <div className="page_content">
            <Routes>
                <Route path='/' element={<Welcome />} />

                <Route path='/categories' element={<Categories />} />

                <Route path='/details' element={<Details />}>
                    <Route index path='personal_details' element={<PersonalDetails />} />
                    <Route path='summary' element={<Summary />} />
                    <Route path='work_experience' element={<WorkExperience />} />
                    <Route path='technical_skills' element={<TechnicalSkills />} />
                    <Route path='soft_skills' element={<SoftSkills />} />
                    <Route path='work_links' element={<WorkLinks />} />
                    <Route path='achievements' element={<Achievements />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='education' element={<Education />} />
                </Route>

                <Route path='/preview' element={<Preview />} />
                
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Content;