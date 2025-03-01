import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function Home() {
  console.log(publicRuntimeConfig, "publicRuntimeConfig");
  return (
    <div className="min-h-[88vh]">
      <div className="">Home page</div>
      <div className="">Build Time: {process.env.BUILD_TIME_VARIABLE}</div>
      <div className="">Run Time: {publicRuntimeConfig?.RUNTIME_VARIABLE}</div>
    </div>
  );
}
