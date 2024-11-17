export const DarkGraySectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 py-16">
      {/* <div className="container mx-auto px-6 lg:px-8 text-center"> */}
        {children}
      {/* </div> */}
    </div>
  );
}
