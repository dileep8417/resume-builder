import ResumeOptionsHeader from './ResumeOptionsHeader';
import ResumeTemplate from './ResumeTemplate';

const Resume = ({ isPreviewMode }) => {
  return (
    <div style={{backgroundColor: '#484848', padding: '24px 0'}}>
      <ResumeOptionsHeader isPreviewMode={isPreviewMode} />
      <ResumeTemplate />
    </div>
  );
};

export default Resume;