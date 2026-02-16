export default function LoaderComponent() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-dark relative overflow-hidden">
      <div className="flex flex-col justify-center items-center z-10">
        {/* Cyber loader */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-accent/20 rotate-45"></div>
          <div className="absolute inset-2 border-2 border-secondary/20 -rotate-45"></div>
          
          {/* Spinning elements */}
          <div className="absolute inset-0 border-2 border-transparent border-t-accent animate-spin" style={{ animationDuration: '1s' }}></div>
          <div className="absolute inset-3 border-2 border-transparent border-b-secondary animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
          </div>
        </div>
        
        {/* Text */}
        <div className="mt-8 text-center">
          <p className="font-display text-accent text-lg tracking-[0.3em] animate-pulse">
            LOADING
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <span className="text-accent">{'>'}</span> Please wait...
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="mt-6 w-48 h-1 bg-gray-800 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent to-secondary animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}
