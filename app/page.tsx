import CompanionCard from '@/components/companion-card';
import CompanionsList from '@/components/companions-list';
import CTA from '@/components/cta';
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';


const Page = async () =>  {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);


  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard key={companion.id}  color={getSubjectColor(companion.subject)} {...companion}/>
        ))}
      </section>
      <section className="home-section">
        <CompanionsList title="recently completed sessions" companions={recentSessionCompanions} classNames='w-2/3 max-lg:w-full' />
        <CTA />
      </section>
    </main>
  )
}

export default Page