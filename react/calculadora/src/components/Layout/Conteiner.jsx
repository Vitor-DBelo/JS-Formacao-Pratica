export default function Container({ children }) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-600 ">
        {children}
      </div>
    );
  }
  