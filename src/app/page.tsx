export default function Home() {
  return (
    <div className="min-h-[88vh]">
      <div className="">Home page</div>
      <div className="">Build Time: {process.env.BUILD_TIME_VARIABLE}</div>
      <div className="">Run Time: {process.env.RUNTIME_VARIABLE}</div>
    </div>
  );
}
