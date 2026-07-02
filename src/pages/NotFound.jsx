import Button from '../components/shared/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-[10rem] font-black text-primary leading-none">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-2 mb-8">The page you are looking for does not exist or has been moved.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </div>
  );
}
