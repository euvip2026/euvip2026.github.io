import CommitteeMember from '@/components/CommitteeMember'
import { committeeMembers } from '@/data/committeeMembers'

export default function Committee() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Committee</h1>
      
      {Object.entries(committeeMembers).map(([sectionName, members]) => (
        <div key={sectionName} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-left border-b-2 border-gray-300 pb-2">
            {sectionName}
          </h2>
          <div 
            className="grid gap-6 justify-items-center"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            }}
          >
            {members.map((member, index) => (
              <CommitteeMember
                key={`${sectionName}-${index}`}
                firstName={member.firstName}
                lastName={member.lastName}
                organization={member.organization}
                country={member.country}
                imageUrl={member.imageUrl}
                cvLink={member.cvLink}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
