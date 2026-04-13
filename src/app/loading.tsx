export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-red-500 animate-pulse">
        WS
      </div>
    </div>
  );
}