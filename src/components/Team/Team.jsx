import { Link } from 'react-router-dom';
import TeamMember from './TeamMember';
import { TeamSlider } from '../ImageSlider';

const Team = () => {

    return (
        <div className='bg-white py-32'>
            <div className="bg-[url('./assets/img/bg-team.jpg')] bg-no-repeat">
                <div className='m-auto container max-w-[1300px] pt-28'>
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                            <p className='text-xl text-white'>Meet some of our Team Members</p>
                        </div>
                        <p className='font-bold text-6xl text-white pt-4 pb-20'>Experienced People</p>
                    </div>

                    <TeamSlider
                        memberList={[
                            { member: <TeamMember name="James Galler" role="Managing Director" /> },
                            { member: <TeamMember name="Terry Markham" role="Director" /> },
                            { member: <TeamMember name="Daniel Millyard" role="Developer" /> },
                        ]}
                    />                    
                </div>
            </div>       
        </div>         
    )
}

Team.displayName = 'Team'

export default Team
