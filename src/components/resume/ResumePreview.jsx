import ResumeOptionsHeader from './ResumeOptionsHeader';
import ResumeTemplate from './ResumeTemplate';

const ResumePreview = ({ isPreviewMode }) => {
  return (
    <div style={{backgroundColor: '#484848', padding: '24px 0', overflow: 'auto'}}>
      <ResumeOptionsHeader isPreviewMode={isPreviewMode} />
      <ResumeTemplate isPreview={isPreviewMode} />
    </div>
  );
};

export default ResumePreview;