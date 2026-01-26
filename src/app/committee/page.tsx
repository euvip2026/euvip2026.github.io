import CommitteeMember from '@/components/CommitteeMember'
import { committeeMembers } from '@/data/committeeMembers'

export default function Committee() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  return (
    <>
      <section className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden shadow-sm">
          <img src={`${basePath}/committee.png`} alt="Committee Image" className="w-full object-cover blur-xs" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Organizing Committee</h2>
            <div className="mt-3 h-1 w-16 bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </section>
      <main className="bg-background text-container-foreground">
        <div className="mx-auto w-full">
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
    </>
  )
}
