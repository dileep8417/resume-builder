import React from 'react';
import { PDFViewer, Document, Page, StyleSheet, View, Text, Font } from '@react-pdf/renderer';
import resumeStyles from '../styles/components/resume.style';
import InterRegular from '../assets/fonts/inter/Inter-Regular.ttf';
import InterBold from '../assets/fonts/inter/Inter-Bold.ttf';
import InterBlack from '../assets/fonts/inter/Inter-Black.ttf';
import { useSelector } from 'react-redux';
import WorkExperienceSection from '../components/resume/pdf/sections/WorkExperienceSection'
import SummarySection from '../components/resume/pdf/sections/SummarySection';
import ProjectsSection from '../components/resume/pdf/sections/ProjectsSection';
import AccomplishmentsSection from '../components/resume/pdf/sections/AccomplishmentsSection';
import EducationSection from '../components/resume/pdf/sections/EducationSection';
import TechnicalSkillsSection from '../components/resume/pdf/sections/TechnicalSkillsSection';
import ContactDetailsSection from '../components/resume/pdf/sections/ContactDetailsSection';
import ResumeHeader from '../components/resume/pdf/sections/ResumeHeader';
import WorkLinksSection from '../components/resume/pdf/sections/WorkLinksSection';
import SoftSkillsSection from '../components/resume/pdf/sections/SoftSkillsSection';
import { getSelectedCategories } from '../helpers/categoriesHelper';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: InterRegular
    },
    {
      src: InterBold,
      fontWeight: 700
    },
    {
      src: InterBlack,
      fontWeight: 900
    }
  ]
});

const ResumePDF = () => {

  const formData = useSelector(state => state.formData);

  const selectedCategories = getSelectedCategories();

  const styles = StyleSheet.create({
    frame: {
      width: '100vw',
      height: '100vh'
    },
    ...resumeStyles
  });
  
  return (
    <PDFViewer style={styles.frame}>
      <Document>
        <Page style={styles.resume}>
          
          <ResumeHeader styles={styles} name={formData.personalDetails[0].fields.name} />
          
          <View style={styles.body}>

            <View style={styles.leftContainer}>
              
              {selectedCategories['summary'] && (
                <SummarySection styles={styles} summary={formData.summary[0].fields.summary} />
              )}

              {selectedCategories['workExperience'] && (
                <WorkExperienceSection styles={styles} workExperiences={formData.workExperience} />
              )}
              
              {selectedCategories['education'] && (
                <EducationSection styles={styles} education={formData.education} />
              )}
              
              {selectedCategories['projects'] && (
                <ProjectsSection styles={styles} projects={formData.projects} />
              )}

              {selectedCategories['accomplishments'] && (
                <AccomplishmentsSection styles={styles} accomplishments={formData.accomplishments[0].fields.accomplishment} />
              )}
            </View>
            <View style={styles.rightContainerPdf}>
              {selectedCategories['technicalSkills'] && (
                <TechnicalSkillsSection styles={styles} technicalSkills={formData.technicalSkills} />
              )}

              {selectedCategories['softSkills'] && (
                <SoftSkillsSection styles={styles} skills={formData.softSkills[0].fields.skills} />
              )}

              <ContactDetailsSection styles={styles} details={formData.personalDetails[0]} />

              {selectedCategories['workLinks'] && (
                <WorkLinksSection styles={styles} details={formData.workLinks[0]} />
              )}
            </View>
          </View>


        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumePDF;