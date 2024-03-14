import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { ProjectSlider } from '../ImageSlider';

const FeaturedProjects = () => {

    return (
        <div className='bg-white'>
            <div className='flex flex-col m-auto container max-w-[1300px]'>
                <p className='font-bold text-6xl text-[#174034] text-center pt-32 pb-20'>Featured Projects</p>

                <ProjectSlider
                    projectList={[
                        { project: <ProjectItem featureTitle="Technology" /> },
                        { project: <ProjectItem featureTitle="Film & Video" /> },
                        { project: <ProjectItem featureTitle="Fashion" /> },
                        { project: <ProjectItem featureTitle="Design"/> },
                    ]}
                />
            </div>   
        </div>           
    )
}

FeaturedProjects.displayName = 'FeaturedProjects'

export default FeaturedProjects
