const Skill = (skill: {
  name: string;
  subskills?: string[];
}) => {
  return (
    <div className="inline-block">
      <div className="inline-block">
        <div className="bg-gray-800 rounded text-white mb-1 p-1 mr-1">
          {skill.name}
        </div>
      </div>
      {skill.subskills &&
        skill.subskills.map((subskill, i) => {
          return (
            <div className="inline-block" key={i}>
              <div className="bg-gray-600 rounded text-white mb-1 p-1 mr-1">
                {subskill}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Skill;
