const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8 md:gap-28 md:my-10 my-4 mb-20">
      {children}
    </div>
  );
};

export default Layout;
