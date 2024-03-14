import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { ProjectSlider } from '../ImageSlider';

const ExploreProjects = () => {

    return (
        <div className='bg-white py-32'>
            <div className='flex flex-col m-auto container max-w-[1300px]'>
                <p className='font-bold text-6xl text-[#174034] text-center pb-20'>Explore Projects</p>
                <ProjectSlider
                    projectList={[
                        { project: <ProjectItem featureTitle="Technology" /> },
                        { project: <ProjectItem featureTitle="Film & Video" /> },
                        { project: <ProjectItem featureTitle="Fashion" /> },
                        { project: <ProjectItem featureTitle="Design"/> },
                        { project: <ProjectItem featureTitle="Game"/> },
                        { project: <ProjectItem featureTitle="Human"/> },
                    ]}
                />
            </div>    
        </div>
          
    )
}

ExploreProjects.displayName = 'ExploreProjects'

export default ExploreProjects
