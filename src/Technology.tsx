const Technology = (technology: {
  name: string;
  subtechnologies?: string[];
}) => {
  return (
    <div className="inline-block">
      <div className="inline-block">
        <div className="bg-gray-800 rounded text-white mb-1 p-1 mr-1">
          {technology.name}
        </div>
      </div>
      {technology.subtechnologies &&
        technology.subtechnologies.map((subtechnology, i) => {
          return (
            <div className="inline-block" key={i}>
              <div className="bg-gray-600 rounded text-white mb-1 p-1 mr-1">
                {subtechnology}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Technology;
