export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container bg-white mx-auto px-4">{children}</div>;
}
