export default function Loading() {
  return (
    <div
      className="animate-pulse"
      style={{ background: 'rgb(7,10,20)', minHeight: '100vh' }}
    >
      <div
        className="min-h-screen"
        style={{ background: 'rgba(255,255,255,0.01)' }}
      />
      <div className="h-32" style={{ background: 'rgba(255,255,255,0.01)' }} />
      <div className="h-96" style={{ background: 'rgba(255,255,255,0.01)' }} />
      <div
        className="h-[500px]"
        style={{ background: 'rgba(255,255,255,0.01)' }}
      />
      <div
        className="h-[600px]"
        style={{ background: 'rgba(255,255,255,0.01)' }}
      />
      <div className="h-96" style={{ background: 'rgba(255,255,255,0.01)' }} />
      <div className="h-64" style={{ background: 'rgba(255,255,255,0.01)' }} />
    </div>
  );
}
