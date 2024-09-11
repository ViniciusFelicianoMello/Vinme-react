import Slider from '../../components/slider'
import Title from '../../components/title'
import MemberCard from './components/memberCard'
import { members } from '../../utils/data';
import './team.sass'

const Team = () => {
    return (
        <section className='team' id='team'>
            <Title start="Conheça os" span="membros" end="do nossos time de especialistas!" />
            <Slider>
                {members.map(member => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </Slider>
        </section>
    )
}

export default Team
