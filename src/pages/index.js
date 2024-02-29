import { Layout } from "@/layout/Layout";
export default function Home() {
  return <div></div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
