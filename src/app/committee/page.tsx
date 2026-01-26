import CommitteeMember from '@/components/CommitteeMember'
import { committeeMembers } from '@/data/committeeMembers'

export default function Committee() {
  return (
    <main className="bg-background text-container-foreground">
      <div className="mx-auto w-full pt-6 md:pt-10">
        <header className="mx-auto mb-10 max-w-7xl px-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Organizing Committee</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
            Meet the chairs and committee members supporting EUVIP 2026.
          </p>
        </header>

        <div className="">
          {Object.entries(committeeMembers).map(([sectionName, members], sectionIndex) => (
            <section
              key={sectionName}
              className={`-mx-6 px-6 py-10 md:-mx-8 md:px-8 md:py-12 ${
                sectionIndex % 2 === 0 ? 'bg-background' : 'bg-container'
              }`}
            >
              <div className="mx-auto max-w-7xl px-8">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{sectionName}</h2>
                    <div className="bg-accent mt-2 h-1 w-16 rounded-full" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-x-10 gap-y-16">
                  {members.map((member, index) => (
                    <div key={`${sectionName}-${index}`} className="w-full sm:w-[260px]">
                      <CommitteeMember
                        firstName={member.firstName}
                        lastName={member.lastName}
                        organization={member.organization}
                        country={member.country}
                        imageUrl={member.imageUrl}
                        cvLink={member.cvLink}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
